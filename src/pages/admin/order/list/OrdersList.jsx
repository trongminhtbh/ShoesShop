import React, { useState, useEffect } from "react";
import { useHistory, useRouteMatch } from "react-router";
import styles from "./orders-list.module.scss";
import { OrderApiClient } from "../../helpers/api";
import { DeleteButtonWithStyles, EditButtonWithStyles } from "../../helpers";

export default function OrdersList() {
    return (
        <section>
            <div>
                <h3 className={styles["order-table-header"]}>
                    Orders List
                </h3>

            </div>

            <table className={styles["order-table"]}>
                <OrderTableHead />
                <OrderTableBody />
            </table>
        </section>
    )
}


const OrderTableHead = () => {
    return (
        <thead className={styles["order-table-head"]}>
            <tr>
                <th className={styles["order-id"]}>
                    Id
                </th>
                <th className={styles["order-customer"]}>
                    Customer
                </th>
                <th className={styles["order-total-price"]}>
                    Total Price
                </th>
                <th className={styles["order-date"]}>
                    Date
                </th>
                <th className={styles["order-status"]}>
                    Status
                </th>
                <th className={styles["order-payment-method"]}>
                    Payment Method
                </th>
                <th className={styles["order-action"]}>
                    Actions
                </th>
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

    const onOrderDeleted = (id) => {
        const deleted = orders.filter(order => order._id !== id);
        setOrders(deleted);
    }

    return (
        <tbody>
            {orders && orders.map((order) =>
                <OrderTableRow key={order._id} order={order}
                    onOrderDeleted={onOrderDeleted} />
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
        await OrderApiClient.remove(id);
        props.onOrderDeleted(id);
        alert("Order Deleted");
    }

    const { _id, user_id, total, order_date, state, payment_method } = props.order;

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
            <td className={styles["order-payment-method"]}>
                {payment_method}
            </td>
            <td className={styles["order-actions"]}>
                <EditButtonWithStyles onClick={() => directToOrderEdit(_id)} />
                <DeleteButtonWithStyles onClick={() => deleteOrder(_id)} />
            </td>
        </tr>)
}