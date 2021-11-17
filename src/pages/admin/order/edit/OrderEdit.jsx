import React, { useState } from "react";
import { useHistory } from "react-router";
import {
    TextInputWithStyles,
    FormRowWithStyles,
    FormSelectWithStyles,
    FormSubmitWithStyles,
    BackButtonWithStyles
} from "../../helpers/components";
import styles from "./order-edit.module.scss";

const products = [
    {
        id: 1,
        name: "sandal 1",
        brands: "nike",
        price: 196000,
        imageLink: 'image',
        quantity: 2
    },

    {
        id: 2,
        name: "sandal 2",
        brands: "nike",
        price: 125000,
        imageLink: 'image',
        quantity: 2
    },

    {
        id: 3,
        name: "sandal 3",
        brands: "nike",
        price: 100000,
        imageLink: 'image',
        quantity: 2
    }
]


export default function OrderEdit(props) {
    const history = useHistory();

    const [order, setOrder] = useState({
        _id: "",
    })

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    const handleDirectingBackToList = (event) => {
        event.preventDefault();
        history.goBack();
    }

    const handleFormInputChange = (event) => {
        event.preventDefault();
    }

    return (
        <section className={styles["order-edit"]}>
            <form onSubmit={handleSubmit}
                className={styles["form"]}>

                <h3 className={styles["form__title"]}>Order Detail</h3>

                <TextInputWithStyles htmlFor="id" label="Id" name="id" type="id" readOnly={true}
                    value={order._id} />


                <FormRowWithStyles>
                    <TextInputWithStyles htmlFor="date" label="Date" name="date" type="date"
                        value={order.date} onChange={handleFormInputChange} />

                    <FormSelectWithStyles
                        htmlFor="status" id="status" name="status"
                        label="Status" options={[
                            { value: "waiting", text: "Waiting" },
                            { value: "confirmed", text: "Confirmed" },
                            { value: "delivered", text: "Delivered" }]}
                    />
                </FormRowWithStyles>

                <TextInputWithStyles htmlFor="customer" label="Customer" name="customer" type="text"
                    value={order.customer} onChange={handleFormInputChange} />

                <FormRowWithStyles>
                    <TextInputWithStyles htmlFor="total-price" label="Total Price" name="total-price" type="number"
                        value={order.totalPrice} onChange={handleFormInputChange} />

                    <TextInputWithStyles htmlFor="discount" label="Discount" name="discount" type="text"
                        value={order.discount} onChange={handleFormInputChange} />

                </FormRowWithStyles>

                <div className={styles["products-list"]}>
                    <h3>Products</h3>
                    {products.map((product) =>
                        <ProductRow product={product} />)}
                </div>

                <div className={styles["form__actions"]}>
                    <BackButtonWithStyles
                        onClick={(event) => handleDirectingBackToList(event)}>
                        Back To List
                    </BackButtonWithStyles>

                    <FormSubmitWithStyles value="Update Order" />
                </div>
            </form>
        </section >
    )
}

const ProductRow = (props) => {
    const product = props.product;

    return (
        <div className={styles["product"]}>
            <div className={styles["product__image"]}>
                {product.imageLink}
            </div>
            <div>
                <div className={styles["product__brand"]}>
                    {product.brands}
                </div>
                <div className={styles["product__name"]}>
                    {product.name}
                </div>
            </div>
            <div className={styles["product__price"]}>
                {product.price}
            </div>
            <div className={styles["product__quantity"]}>
                {product.quantity}
            </div>
        </div>
    )
}
