import React, { useState, useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useHistory, useParams } from "react-router";
import { OrderApiClient } from "../../helpers";
import {
    TextInputWithStyles,
    FormRowWithStyles,
    FormSelectWithStyles,
    FormSubmitWithStyles,
    BackButtonWithStyles
} from "../../helpers/components";
import TextAreaWithStyles from "../../helpers/components/form/text-area";
import styles from "./order-edit.module.scss";

export default function OrderEdit() {
    const { register, handleSubmit, setValue,
        formState: { errors } } = useForm();

    const onSubmit = async (orderData, event) => {
        event.preventDefault();
        await OrderApiClient.update(orderData._id, orderData);
        alert("Order Updated");
    }

    const [order, setOrder] = useState({})
    const { id } = useParams();
    useEffect(() => onMounted(), [])
    const onMounted = () => {
        (async () => {
            const fetched = await OrderApiClient.findOne(id);
            setOrder(fetched);
        })();
    }

    useEffect(() => onFetched(), [order])
    const onFetched = () => Object.entries(order)
        .forEach(([key, value]) => setValue(key, value));


    const history = useHistory();
    const directBackToList = (event) => {
        event.preventDefault();
        history.goBack();
    }

    const { items } = order;

    return (
        <section className={styles["order-edit"]}>
            <FormProvider {...{ register, handleSubmit, errors }}>
                <form onSubmit={handleSubmit(onSubmit)}
                    className={styles["form"]}>

                    <h3 className={styles["form-title"]}>
                        Order Detail
                    </h3>

                    <TextInputWithStyles htmlFor="id" label="Id" id="id"
                        name="_id" type="id" readOnly={true} />

                    <FormRowWithStyles>
                        <TextInputWithStyles htmlFor="date" label="Date" id="date"
                            name="order_date" type="date" />

                        <FormSelectWithStyles
                            htmlFor="status" id="status" name="state"
                            label="Status" options={[
                                { value: "Waiting", text: "Waiting" },
                                { value: "Confirmed", text: "Confirmed" },
                                { value: "Delivered", text: "Delivered" },
                                { value: "Canceled", text: "Canceled" }]}
                        />
                    </FormRowWithStyles>

                    <TextInputWithStyles htmlFor="customer" label="Customer Id"
                        name="user_id" type="text" />

                    <TextInputWithStyles htmlFor="total-price" label="Total Price"
                        name="total" type="number" />

                    <ProductList products={items} />


                    <div className={styles["form-actions"]}>
                        <BackButtonWithStyles
                            onClick={(event) => directBackToList(event)}>
                            Back To List
                        </BackButtonWithStyles>

                        <FormSubmitWithStyles value="Update Order" />
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
                <th className={styles["product-id"]}>Id</th>
                <th className={styles["product-name"]}>Name</th>
                <th className={styles["product-price"]}>Price</th>
                <th className={styles["product-quantity"]}>Quantity</th>
                <th className={styles["product-subtotal"]}>Sub Total</th>
            </tr>
        </thead>
    )
}

const ProductTableRow = (props) => {
    const { _id, name, price, num } = props.product;

    return (
        <tr>
            <td className={styles["product-id"]}>
                {_id}
            </td>
            <td className={styles["product-name"]}>
                {name}
            </td>
            <td className={styles["product-price"]}>
                {price}
            </td>
            <td className={styles["product-quantity"]}>
                {num}
            </td>
            <td className={styles["product-subtotal"]}>
                {num * price}
            </td>
        </tr>
    )
}


