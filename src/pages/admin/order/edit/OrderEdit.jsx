import React from "react";
import { useHistory } from "react-router";
import {
    FormControlWithStyles,
    FormGroupWithStyles,
    FormRowWithStyles,
    FormLabelWithStyles,
    FormSelectWithStyles,
    FormOptionWithStyles,
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

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    const handleDirectingBackToList = (event) => {
        event.preventDefault();
        history.goBack();
    }

    const handleFormInputChange = () => {

    }

    return (
        <section className={styles["order-edit"]}>
            <form onSubmit={(event) => handleSubmit(event)} className={styles["form"]}>
                <h3 className={styles["form__title"]}>Order Detail</h3>
                <FormGroupWithStyles>
                    <FormLabelWithStyles htmlFor="id">
                        Id
                    </FormLabelWithStyles>
                    <FormControlWithStyles type="text" id="id" name="id" readOnly />
                </FormGroupWithStyles>

                <FormRowWithStyles>
                    <FormGroupWithStyles>
                        <FormLabelWithStyles htmlFor="date">
                            Date
                        </FormLabelWithStyles>
                        <FormControlWithStyles type="date" id="date" name="date"
                            onChange={handleFormInputChange} />
                    </FormGroupWithStyles>

                    <FormGroupWithStyles>
                        <FormLabelWithStyles htmlFor="status">
                            Status
                        </FormLabelWithStyles>
                        <FormSelectWithStyles id="status" name="status">
                            <FormOptionWithStyles>Waiting</FormOptionWithStyles>
                            <FormOptionWithStyles>Confirmed</FormOptionWithStyles>
                            <FormOptionWithStyles>Delivered</FormOptionWithStyles>
                        </FormSelectWithStyles>
                    </FormGroupWithStyles>
                </FormRowWithStyles>

                <FormGroupWithStyles>
                    <FormLabelWithStyles htmlFor="customer">
                        Customer
                    </FormLabelWithStyles>
                    <FormControlWithStyles type="text" id="customer" name="customer"
                        onChange={handleFormInputChange} />
                </FormGroupWithStyles>

                <FormRowWithStyles>
                    <FormGroupWithStyles>
                        <FormLabelWithStyles htmlFor="total-price">
                            Total Price
                        </FormLabelWithStyles>
                        <FormControlWithStyles type="text" id="total-price" name="total-price"
                            onChange={handleFormInputChange} />
                    </FormGroupWithStyles>

                    <FormGroupWithStyles>
                        <FormLabelWithStyles htmlFor="discount">
                            Discount
                        </FormLabelWithStyles>
                        <FormControlWithStyles type="text" id="discount" name="discount"
                            onChange={handleFormInputChange} />
                    </FormGroupWithStyles>
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
