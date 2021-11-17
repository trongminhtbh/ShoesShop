import React, { useState } from "react";
import { useHistory } from "react-router";
import {
    FormRowWithStyles,
    BackButtonWithStyles,
    FormSubmitWithStyles,
    TextInputWithStyles,
    ShoeApiClient
} from "../../helpers";
import styles from "./product-add.module.scss";

export default function ProductAdd(props) {
    const history = useHistory();

    const [product, setProduct] = useState({});

    const handleCreateProduct = async (event) => {
        event.preventDefault();
        await ShoeApiClient.create(product);
        alert("Product Created");
    }

    const handleFormInputChange = (event) => {
        let value = event.target.value;
        const type = event.target.type;

        if (type == "number") {
            value = Number(value);
        }

        setProduct({
            ...product,
            [event.target.name]: value
        })
    }

    const handleDirectingBackToList = (event) => {
        event.preventDefault();
        history.goBack();
    }

    return (
        <section className={styles["product-edit"]}>
            <form onSubmit={(event) => handleCreateProduct(event)} className={styles["form"]}>
                <h3 className={styles["form__title"]}>Product Form</h3>

                <TextInputWithStyles label="Name" htmlFor="name" type="text" id="name" name="name"
                    onChange={handleFormInputChange} />

                <TextInputWithStyles label="Price" htmlFor="price" type="number" id="price" name="price"
                    onChange={handleFormInputChange} />

                <TextInputWithStyles label="Image Link" htmlFor="link" type="text" id="link" name="link"
                    onChange={handleFormInputChange} />

                <TextInputWithStyles label="Gender" htmlFor="gender" type="text" id="gender" name="gender"
                    onChange={handleFormInputChange} />

                <FormRowWithStyles>
                    <TextInputWithStyles label="Color" htmlFor="color" type="text" id="color" name="color"
                        onChange={handleFormInputChange} />

                    <TextInputWithStyles label="Size" htmlFor="size" type="number" id="size" name="size"
                        onChange={handleFormInputChange} />
                </FormRowWithStyles>

                <TextInputWithStyles label="Brand" htmlFor="brand" type="text" id="brand" name="brand"
                    onChange={handleFormInputChange} />

                <TextInputWithStyles label="Quantity" htmlFor="quantity" type="number" id="quantity" name="quantity"
                    onChange={handleFormInputChange} />

                <div className={styles["form__actions"]}>
                    <BackButtonWithStyles
                        onClick={handleDirectingBackToList}>
                        Back To List
                    </BackButtonWithStyles>

                    <FormSubmitWithStyles value="Create Product" />
                </div>
            </form>
        </section >
    )
}
