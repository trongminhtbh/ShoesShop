import React, { useState, useEffect } from "react";
import { useHistory, useRouteMatch } from "react-router";
import styles from "./orders-list.module.scss";
import { OrderApiClient } from "../../helpers/api";
import { DeleteButtonWithStyles, EditButtonWithStyles } from "../../helpers";

export default function OrdersList() {
    const [orders, setOrders] = useState([]);
    const [searchTerm, setSearchTerm] = useState([]);

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

    const onOrderSearch = (event) => {
        event.preventDefault();
        const text = event.target.value;
        setSearchTerm(text);
    }

    return (
        <section>
            <div>
                <h3 className={styles["order-table-header"]}>
                    Orders List
                </h3>
            </div>
            <input type="text"
                placeholder="Search"
                value={searchTerm}
                onChange={onOrderSearch}
                style={{
                    padding: "7px 15px",
                    minWidth: "440px",
                    borderRadius: "5px",
                    outline: "none",
                    border: "1px solid rgba(0, 0, 0, 0.25)",
                    marginBottom: "10px"
                }} />

            <table className={styles["order-table"]}>
                <thead className={styles["order-table-head"]}>
                    <tr>
                        <th className={styles["order-id"]}>
                            Id
                        </th>
                        <th className={styles["order-customer"]}>
                            Customer Id
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
                <tbody>
                    {orders
                        .filter(order => Object.values(order)
                            .some(property => property
                                .toString()
                                .includes(searchTerm)))
                        .map((order) =>
                            <OrderTableRow key={order._id} order={order} onUserDeleted={onOrderDeleted} />)
                    }
                </tbody>
            </table>
        </section>
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