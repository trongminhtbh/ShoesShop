import React, { useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useHistory } from "react-router";
import { OrderApiClient } from "../../helpers";
import {
    TextInputWithStyles,
    FormRowWithStyles,
    FormSelectWithStyles,
    FormSubmitWithStyles,
    BackButtonWithStyles,
    TextAreaWithStyles
} from "../../helpers/components";
import styles from "./order-edit.module.scss";
import { useOrderInfoFetch } from "./useOrderInfoFetch";

export default function OrderEdit() {
    const { register, handleSubmit, setValue,
        formState: { errors } } = useForm();

    const [order, customer] = useOrderInfoFetch();

    const onSubmit = async (orderData, event) => {
        event.preventDefault();
        await OrderApiClient.update(orderData._id, orderData);
        alert("Order Updated");
    }

    useEffect(() => onOrderFetched(), [order])
    const onOrderFetched = () => Object.entries(order)
        .forEach(([key, value]) => setValue(key, value));

    useEffect(() => onCustomerFetched(), [customer]);
    const onCustomerFetched = () => Object.entries(customer)
        .forEach(([key, value]) => setValue(key, value));


    const history = useHistory();
    const directBackToList = (event) => {
        event.preventDefault();
        history.goBack();
    }

    const deliverOrder = (event) => {
        /**TODO: udpate order status */
    }

    const prepareOrderDelivery = (event) => {
        /**TODO: update order status */
    }

    const cancelOrder = (event) => {
        /**TODO: update order status */
    }

    return (
        <section className={styles["order-edit"]}>
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
                            name="order_date" type="date" readOnly={true} />

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
                            <FormSubmitWithStyles value="Cancel Order" />
                        }
                        {order?.state?.toLowerCase() === "waiting" &&
                            <FormSubmitWithStyles value="Prepare Delivery" />}
                        {order?.state?.toLowerCase() === "prepared" &&
                            <FormSubmitWithStyles value="Deliver Order" />}
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
    const { _id, name, price, num, link } = props.product;

    return (
        <tr>
            <td className={styles["product-image"]}>
                <img width="60px" height="60px" src={link} />
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


