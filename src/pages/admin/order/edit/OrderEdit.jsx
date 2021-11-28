import React, { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useHistory } from "react-router";
import { OrderApiClient } from "../../helpers";
import {
    TextInputWithStyles,
    FormRowWithStyles,
    FormSubmitWithStyles,
    BackButtonWithStyles,
    TextAreaWithStyles,
} from "../../helpers/components";
import { makeStyles } from "@material-ui/core";
import styles from "./order-edit.module.scss";
import { useOrderInfoFetch } from "./useOrderInfoFetch";
import { Close } from "@material-ui/icons";

const useStyles = makeStyles({
    modal: {
        position: "absolute",
        left: "50%", top: "50%",
        transform: "translate(-50%, -50%)",
        backgroundColor: "white",
        width: "600px",
        minHeight: "200px",
        borderRadius: "4px",
        boxShadow: "0 0 20px 2px rgba(0, 0, 0, 0.115)",
        padding: "30px",
        color: "black",
        justifyContent: "center",
    },

    modalCloseButton: {
        position: "absolute",
        right: "5px",
        top: "5px",
        width: "30px",
        height: "30px"
    }
});

function Modal({ children }) {
    const classes = useStyles();
    return (<div className={classes.modal}>
        {children}
        <BackButtonWithStyles />
    </div>)
}

export default function OrderEdit() {
    const { register, handleSubmit, setValue,
        formState: { errors } } = useForm();
    const [order, customer] = useOrderInfoFetch();

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [deliveryOrder, setDeliveryOrder] = useState(null);

    const onSubmit = async (orderData, event) => {
        event.preventDefault();
        await OrderApiClient.update(orderData._id, { state: "waiting" });
        alert("Order Updated");
    }

    const [token, setToken] = useState();
    useEffect(() => getToken(), [])
    const getToken = () => {
        (async function () {
            const requestUrl = "https://apistg.ahamove.com/v1/partner/register_account?mobile=84908842280&name=Ahamove+Test+User&api_key=test_key";
            const response = await fetch(requestUrl, {
                method: "GET",
                headers: {
                    "Cache-Control": "no cache",
                    "Content-Type": "application/json"
                }
            }).then((response) => response.json());

            if (response) {
                setToken(response.token);
            }
        })();
    }

    useEffect(() => onOrderFetched(), [order])
    const onOrderFetched = () => Object.entries(order)
        .forEach(([key, value]) => setValue(key, value));

    useEffect(() => onCustomerFetched(), [customer]);
    const onCustomerFetched = () => Object.entries(customer)
        .forEach(([key, value]) => key !== "_id" ? setValue(key, value) : null);

    const history = useHistory();
    const directBackToList = (event) => {
        event.preventDefault();
        history.goBack();
    }

    const handleDeliverOrder = async (event) => {
        event.preventDefault();
        const fromAddress = "66 Trần Não, Quận 2, TP. Hồ Chí Minh";
        const response = await fetch(
            `https://apistg.ahamove.com/v1/order/create?token=${token}&order_time=0&path=[{"address":"${fromAddress}"},{"address":"${customer.delivery_info}"}]&service_id=SGN-BIKE&&requests=[]`, {
            method: "GET",
            headers: {
                "Cache-Control": "no-cache"
            }
        }).then((response => response.json()));

        setDeliveryOrder({
            order_id: response.order_id,
            status: response.status,
            shared_Link: response.shared_link,
            distance_fee: response.order.distance_fee,
            distance: response.order.distance,
            currency: response.order.currency,
            discount: response.order.discount,
            total_price: response.order.distance_price,
            fromAddress: "",
            toAddress: "",
        })

        setIsModalOpen(true);
    }

    const openModal = (event) => {
        event.preventDefault();
        setIsModalOpen(true);
    }

    const closeModal = (event) => {
        event.preventDefault();
        setIsModalOpen(false);
    }

    return (
        <section className={styles["order-edit"]}>
            {isModalOpen && <Modal>
                <h5>Success. Here is the detail of your delivery order</h5>

                {deliveryOrder && <ul>
                    <li>Order id: {deliveryOrder.order_id}</li>
                    <li>Status: {deliveryOrder.status}</li>
                    <li>Link: <a href={deliveryOrder.shared_Link} target="_blank">link</a></li>
                    <li>From Address: {deliveryOrder.fromAddress}</li>
                    <li>To Address: {deliveryOrder.toAddress}</li>
                    <li>Distance: {deliveryOrder.distance}</li>
                    <li>Distance Fee: {deliveryOrder.distance_fee}</li>
                    <li>Discount: {deliveryOrder.discount}</li>
                    <li>Total Price: {deliveryOrder.total_price}</li>
                </ul>}

                <BackButtonWithStyles onClick={(event) => closeModal(event)}>
                    Close
                </BackButtonWithStyles>
            </Modal>}
            <FormProvider {...{ register, handleSubmit, errors }}>
                <form onSubmit={handleSubmit(onSubmit)}
                    className={styles["form"]}>

                    <h3 className={styles["form-title"]}>
                        General Detail
                    </h3>

                    <TextInputWithStyles htmlFor="id" label="Id" id="id"
                        name="_id" type="id" readOnly={true} />

                    <FormRowWithStyles>
                        <TextInputWithStyles htmlFor="date" label="Date" id="date"
                            name="order_date" type="text" readOnly={true} />

                        <TextInputWithStyles
                            htmlFor="status" id="status" name="state" label="Status"
                            readOnly={true}
                        />
                    </FormRowWithStyles>

                    <TextInputWithStyles htmlFor="email" label="Customer Email"
                        name="email" type="text" readOnly={true} />

                    <TextInputWithStyles htmlFor="total-price" label="Total Price"
                        name="total" type="number" readOnly={true} />

                    <TextInputWithStyles id="payment-method" htmlFor="payment-method" label="Payment Method"
                        name="payment_method" type="text" readOnly={true} />


                    <TextAreaWithStyles id="address" htmlFor="address" label="Delivery Info"
                        name="delivery_info" readOnly={true} />
                    <div style={{ marginLeft: "150px" }}>
                        {
                            deliveryOrder &&
                            <BackButtonWithStyles
                                onClick={(event) => openModal(event)}>
                                View Delivery Detail
                            </BackButtonWithStyles>
                        }
                    </div>

                    <h3 className="product-list-title">
                        Products Detail
                    </h3>

                    <ProductList products={order.items} />

                    <div className={styles["form-actions"]}>
                        <BackButtonWithStyles
                            onClick={(event) => directBackToList(event)}>
                            Back To List
                        </BackButtonWithStyles>


                        {order?.state?.toLowerCase() === "canceled" &&
                            <FormSubmitWithStyles value="Order Canceled" disabled={true} />}
                        {order?.state?.toLowerCase() !== "canceled" &&
                            order?.state?.toLowerCase() !== "delivered" &&
                            <FormSubmitWithStyles value="Cancel" />}
                        {order?.state?.toLowerCase() === "waiting" &&
                            <FormSubmitWithStyles value="Deliver Order" onClick={(event) => handleDeliverOrder(event)} />}
                        {order?.state?.toLowerCase() === "shipping" &&
                            <FormSubmitWithStyles value="Shipping" disabled={true} />}
                        {order?.state?.toLowerCase() === "delivered" &&
                            <FormSubmitWithStyles value="Order Delivered" disabled={true} />}

                    </div>
                </form>
            </FormProvider>
        </section >
    )
}

const ProductList = (props) => {
    const products = props.products;

    return (
        <table className={styles["product-table"]}>
            <ProductTableHeader />
            <tbody>
                {
                    products && products.map(product =>
                        <ProductTableRow key={product._id} product={product} />)
                }
            </tbody>
        </table>

    )
}

const ProductTableHeader = (props) => {
    return (
        <thead>
            <tr>
                <th className={styles["product-image"]}>Product</th>
                <th className={styles["product-id"]}>Id</th>
                <th className={styles["product-name"]}>Name</th>
                <th className={styles["product-price"]}>Price Each</th>
            </tr>
        </thead>
    )
}

const ProductTableRow = (props) => {
    const { _id, name, price, link } = props.product;

    return (
        <tr>
            <td className={styles["product-image"]}>
                <img width="60px" height="60px" src={link} alt="product" />
            </td>
            <td className={styles["product-id"]}>
                {_id}
            </td>
            <td className={styles["product-name"]}>
                {name}
            </td>
            <td className={styles["product-price"]}>
                {price} vnd
            </td>
        </tr>
    )
}


