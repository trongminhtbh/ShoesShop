import React, { useState, useEffect } from "react";
import { useHistory, useRouteMatch } from "react-router";
import { Pagination } from "../../../../components/pagination";
import { Edit, Delete } from "@material-ui/icons";
import styles from "./orders-list.module.scss";
import { OrderApiClient } from "../../helpers/api";

export default function OrdersList(props) {
    return (
        <section>
            <h3 className={styles["order-table-header"]}>
                Orders List
            </h3>

            <table className={styles["order-table"]}>
                <OrderTableHead />
                <OrderTableBody />
            </table>

            <Pagination pagesCount={5} />
        </section>
    )
}


const OrderTableHead = () => {
    return (
        <thead className={styles["order-table-head"]}>
            <tr>
                <th className={styles["order-id"]}>Id</th>
                <th className={styles["order-customer"]}>Customer</th>
                <th className={styles["order-total-price"]}>Total Price</th>
                <th className={styles["order-date"]}>Date</th>
                <th className={styles["order-status"]}>Status</th>
                <th className={styles["order-action"]}>Actions</th>
            </tr>
        </thead>
    )
}

const OrderTableBody = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => onMounted(), [])
    const onMounted = () => {
        (async function () {
            const fetchedAndJsoned = await OrderApiClient.findAll();
            if (fetchedAndJsoned) {
                setOrders(fetchedAndJsoned);
            }
        })();
    }

    return (
        <tbody>
            {orders && orders.map((order) =>
                <OrderTableRow order={order} />
            )}
        </tbody>
    )
}


const OrderTableRow = (props) => {
    const history = useHistory();
    const match = useRouteMatch();
    const directToOrderEdit = (id) => {
        const pathToOrderEdit = `${match.path}/edit/${id}`;
        history.push(pathToOrderEdit);
    }

    const deleteOrder = async (id) => {
        OrderApiClient.remove(id);
    }

    const { _id, user_id, total, order_date, state } = props.order;

    return (
        <tr key={_id}>
            <td className={styles["order-id"]}>
                {_id}
            </td>
            <td className={styles["order-customer"]}>
                {user_id}
            </td>
            <td className={styles["order-total-price"]}>
                {total}
            </td>
            <td className={styles["order-date"]}>
                {order_date}
            </td>
            <td className={styles["order-link"]}>
                {state}
            </td>
            <td className={styles["order-actions"]}>
                <button className={styles["order-action"]}
                    onClick={() => directToOrderEdit(_id)}>
                    <Edit />
                </button>
                <button className={styles["order-action"]}>
                    <Delete onClick={() => deleteOrder(_id)} />
                </button>
            </td>
        </tr>)
}