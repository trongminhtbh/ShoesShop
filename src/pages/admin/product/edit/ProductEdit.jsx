import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router";
import {
    FormControlWithStyles,
    FormGroupWithStyles,
    FormLabelWithStyles,
    FormRowWithStyles,
    FormSubmitWithStyles,
    BackButtonWithStyles,
    TextInputWithStyles,
    ShoeApiClient
} from "../../helpers";
import styles from "./product-edit.module.scss";

export default function ProductEdit(props) {
    const history = useHistory();

    const { id } = useParams();

    const [product, setProduct] = useState({
        _id: "",
        name: "",
        price: 0,
        brand: "",
        link: "",
        gender: "",
        color: "",
        size: 0,
        quantity: 0,
        description: "",
    });

    useEffect(() => {
        (async function () {
            const fetchedAndJsonified = await ShoeApiClient.findOne(id);
            if (fetchedAndJsonified) {
                setProduct(fetchedAndJsonified);
            }
        })();
    }, [])

    const handleProductupdate = async (event) => {
        event.preventDefault();
        await ShoeApiClient.update(id, product);
        alert("Product Updated");
    }

    const handleFormInputChange = (event) => {
        event.preventDefault();

        const type = event.target.type;
        let value = event.target.value;
        if (type === "number") {
            value = parseInt(value);
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
            <form onSubmit={handleProductupdate} className={styles["form"]}>
                <h3 className={styles["form__title"]}>Product Form</h3>
                <TextInputWithStyles htmlFor="id" label="Id" id="id" name="id"
                    type="text" value={product._id} readOnly={true} />

                <TextInputWithStyles htmlFor="name" label="Name" id="name" name="name"
                    type="text" value={product.name}
                    onChange={handleFormInputChange} />

                <FormRowWithStyles>
                    <TextInputWithStyles htmlFor="price" label="Price" id="price" name="price"
                        type="number" value={product.price}
                        onChange={handleFormInputChange} />

                    <TextInputWithStyles htmlFor="quantity" label="Quantity" id="quantity" name="quantity"
                        type="number" value={product.quantity}
                        onChange={handleFormInputChange} />
                </FormRowWithStyles>

                <TextInputWithStyles htmlFor="link" label="Image Link" id="link" name="link"
                    type="text" value={product.link}
                    onChange={handleFormInputChange} />

                <FormRowWithStyles>
                    <TextInputWithStyles htmlFor="gender" label="Gender" id="gender" name="gender"
                        type="text" value={product.gender}
                        onChange={handleFormInputChange} />

                    <TextInputWithStyles htmlFor="brand" label="Brand" id="brand" name="brand"
                        type="text" value={product.brand}
                        onChange={handleFormInputChange} />
                </FormRowWithStyles>

                <FormRowWithStyles>
                    <TextInputWithStyles htmlFor="color" label="Color" id="color" name="color"
                        type="text" value={product.color}
                        onChange={handleFormInputChange} />

                    <TextInputWithStyles htmlFor="size" label="Size" id="size" name="size"
                        type="text" value={product.size}
                        onChange={handleFormInputChange} />
                </FormRowWithStyles>

                <div className={styles["form__actions"]}>
                    <BackButtonWithStyles onClick={handleDirectingBackToList}>
                        Back To List
                    </BackButtonWithStyles>

                    <FormSubmitWithStyles value="Update Product" />
                </div>
            </form>
        </section >
    )
}

