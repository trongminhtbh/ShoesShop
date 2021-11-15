import React from "react";
import { useHistory } from "react-router";
import { Pagination } from "../../../../components/pagination";
import { Edit, Delete } from "@material-ui/icons";
import styles from "./orders-list.module.scss";

const orders = [
    {
        id: 1,
        customer: "Tang Minh Nhat",
        totalPrice: 200000,
        date: "12/11/2021",
        status: "waiting",
    },

    {
        id: 2,
        customer: "Tang Minh Nhat",
        totalPrice: 200000,
        date: "12/11/2021",
        status: "waiting",
    },

    {
        id: 3,
        customer: "Tang Minh Nhat",
        totalPrice: 200000,
        date: "12/11/2021",
        status: "waiting",
    },


    {
        id: 4,
        customer: "Tang Minh Nhat",
        totalPrice: 200000,
        date: "12/11/2021",
        status: "waiting",
    },
]

export default function OrdersList(props) {
    const history = useHistory();

    const directToOrderEdit = (id) => {
        history.push(`/orders/edit/${id}`);
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
                        orders.map((order) =>
                            <tr>
                                <td className={styles["orders-list__id"]}>{order.id}</td>
                                <td className={styles["orders-list__customer"]}>{order.customer}</td>
                                <td className={styles["orders-list__total-price"]}>{order.totalPrice}</td>
                                <td className={styles["orders-list__date"]}>{order.date}</td>
                                <td className={styles["orders-list__link"]}>{order.status}</td>
                                <td className={styles["orders-list__action"]}>
                                    <button className={styles["orders-list__action"]} 
                                        onClick={() => directToOrderEdit(order.id)}>
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
            <Pagination pagesCount={5}  className={styles["orders-list__paginatinon"]}/>
        </section>
    )
}