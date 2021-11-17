import React, { useState, useEffect } from "react";
import { useHistory, useRouteMatch } from "react-router";
import { Pagination } from "../../../../components/pagination";
import { Edit, Delete } from "@material-ui/icons";
import styles from "./orders-list.module.scss";
import { OrderApiClient } from "../../helpers/api";

export default function OrdersList(props) {
    const history = useHistory();
    const match = useRouteMatch();

    const [orders, setOrders] = useState([]);

    useEffect(() => {
        (async function () {
            const fetchedAndJsoned = await OrderApiClient.findAll();
            if (fetchedAndJsoned) {
                setOrders(fetchedAndJsoned);
            }
        })();
    }, [])

    const directToOrderEdit = (id) => {
        const pathToOrderEdit = `${match.path}/edit/${id}`;
        history.push(pathToOrderEdit);
    }

    return (
        <section>
            <h3 className={styles["orders-list__header"]}>Orders List</h3>
            <table className={styles["orders-list"]}>
                <thead className={styles["orders-list__head"]}>
                    <tr>
                        <th className={styles["orders-list__id"]}>Id</th>
                        <th className={styles["orders-list__customer"]}>Customer</th>
                        <th className={styles["orders-list__total-price"]}>Total Price</th>
                        <th className={styles["orders-list__date"]}>Date</th>
                        <th className={styles["orders-list__status"]}>Status</th>
                        <th className={styles["orders-list__status"]}>Actions</th>
                    </tr>
                </thead>
                <tbody className="orders-list__body">
                    {
                        orders && orders.map((order) =>
                            <tr key={order._id}>
                                <td className={styles["orders-list__id"]}>{order._id}</td>
                                <td className={styles["orders-list__customer"]}>{order.user_id}</td>
                                <td className={styles["orders-list__total-price"]}>{order.total}</td>
                                <td className={styles["orders-list__date"]}>{order.order_date}</td>
                                <td className={styles["orders-list__link"]}>{order.state}</td>
                                <td className={styles["orders-list__action"]}>
                                    <button className={styles["orders-list__action"]}
                                        onClick={() => directToOrderEdit(order._id)}>
                                        <Edit />
                                    </button>
                                    <button className={styles["orders-list__action"]}>
                                        <Delete />
                                    </button>
                                </td>
                            </tr>)
                    }
                </tbody>
            </table>
            <Pagination pagesCount={5} className={styles["orders-list__paginatinon"]} />
        </section>
    )
}