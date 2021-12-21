import React, { useState, useEffect } from "react";
import { AddCircle } from "@material-ui/icons";
import { useHistory, useRouteMatch } from "react-router-dom";
import { DeleteButtonWithStyles, EditButtonWithStyles } from "../helpers";
import styles from "./discount.module.scss";

const baseUrl = "https://pacific-ridge-30189.herokuapp.com/",
    path = "discount/",
    url = baseUrl + path;

function useFetchDiscounts(callback = (discount) => { }) {

    useEffect(() => {
        (async function () {
            const action = "list";
            const response = await fetch(url + action, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            }).then(resp => resp.json());
            callback(response)
        })();
    }, []);

}

async function deleteDiscount() {
    const response = await fetch(url, {
        method: "DELETE",
    })
}

export default function DiscountList(props) {
    const match = useRouteMatch(),
        history = useHistory();

    const [discounts, setDiscounts] = useState([]);

    useFetchDiscounts((discounts) => setDiscounts(discounts));

    const onAddDiscount = (event) => {
        event.preventDefault();
        const path = `${match.path}add`;
        history.push(path);
    }

    const onDeleteDiscount = async (event, discountCode) => {
        event.preventDefault();
        await deleteDiscount(discountCode);
        const remainingDiscounts = discounts.filter(
            (discount) => discount.code !== discountCode);
        setDiscounts(remainingDiscounts);
    }

    const onEditDiscount = (event, discountCode) => {
        event.preventDefault();
        const path = `${match.path}edit/${discountCode}`;
        history.push(path);
    }

    return (
        <section>
            <header className={styles["discount-list-header"]}>
                <h3 className={styles["discount-list-title"]}>
                    Discounts List
                </h3>
                <button className={styles["discount-list-action"]}
                    onClick={(event) => onAddDiscount(event)}>
                    Add New Item
                    <AddCircle />
                </button>
            </header>

            <table className={styles["discount-table"]}>
                <thead>
                    <tr>
                        <th className={styles["discount-code"]}>
                            Code
                        </th>
                        <th className={styles["discount-value"]}>
                            Value
                        </th>
                        <th className={styles["discount-start-time"]}>
                            Start Time
                        </th>
                        <th className={styles["discount-end-time"]}>
                            End Time
                        </th>
                        <th className={styles["discount-quantity"]}>
                            Quantity
                        </th>
                        <th className={styles["discount-description"]}>
                            Description
                        </th>
                        <th className={styles["discount-action"]}>
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {discounts.map((discount) =>
                        <tr>
                            <td className={styles["discount-code"]}>
                                {discount.code}
                            </td>
                            <td className="discount-value">
                                {discount.value}
                            </td>
                            <td className="discount-start-time">
                                {discount.start_time}
                            </td>
                            <td className="discount-end-time">
                                {discount.end_time}
                            </td>
                            <td className="discount-quantity">
                                {discount.quantity}
                            </td>
                            <td className="discount-description">
                                {discount.description}
                            </td>
                            <td className="discount-actions">
                                <EditButtonWithStyles
                                    onClick={(event) => onEditDiscount(event, discount.code)} />
                                <DeleteButtonWithStyles
                                    onClick={(event) => onDeleteDiscount(event, discount.code)} />
                            </td>
                        </tr>)}
                </tbody>
            </table>
        </section>
    )
}
