import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router";
import {
    FormControlWithStyles,
    FormGroupWithStyles,
    FormLabelWithStyles,
    FormRowWithStyles,
    FormSubmitWithStyles,
    BackButtonWithStyles,
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
        size: 0,
        quantity: 0,
        description: "",
        discount: 0
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

        alert("Product Updated");
    }

    const handleDirectingBackToList = (event) => {
        event.preventDefault();
        history.goBack();
    }

    return (
        <section className={styles["product-edit"]}>
            <form onSubmit={(event) => handleProductupdate(event)} className={styles["form"]}>
                <h3 className={styles["form__title"]}>Product Form</h3>
                <FormGroupWithStyles>
                    <FormLabelWithStyles htmlFor="id">
                        Id
                    </FormLabelWithStyles>
                    <FormControlWithStyles type="text" id="id" name="id" readOnly
                        value={product._id} />
                </FormGroupWithStyles>

                <FormGroupWithStyles>
                    <FormLabelWithStyles htmlFor="name">
                        Name
                    </FormLabelWithStyles>
                    <FormControlWithStyles type="text" id="name" name="name" value={product.name}
                        onChange={handleFormInputChange} />
                </FormGroupWithStyles>


                <FormRowWithStyles>
                    <FormGroupWithStyles>
                        <FormLabelWithStyles htmlFor="price">
                            Price
                        </FormLabelWithStyles>
                        <FormControlWithStyles type="number" id="price" name="price"
                            onChange={handleFormInputChange} value={product.price} />
                    </FormGroupWithStyles>

                    <FormGroupWithStyles>
                        <FormLabelWithStyles htmlFor="quantity">
                            Quantity
                        </FormLabelWithStyles>
                        <FormControlWithStyles type="text" id="quantity" name="quantity"
                            onChange={handleFormInputChange} value={product.quantity} />
                    </FormGroupWithStyles>
                </FormRowWithStyles>

                <FormGroupWithStyles>
                    <FormLabelWithStyles htmlFor="link">
                        Image Link
                    </FormLabelWithStyles>
                    <FormControlWithStyles type="text" id="link" name="link"
                        onChange={handleFormInputChange} value={product.link} />
                </FormGroupWithStyles>

                <FormRowWithStyles>
                    <FormGroupWithStyles>
                        <FormLabelWithStyles htmlFor="gender">
                            Gender
                        </FormLabelWithStyles>
                        <FormControlWithStyles type="text" id="gender" name="gender" value={product.gender}
                            onChange={handleFormInputChange} />
                    </FormGroupWithStyles>

                    <FormGroupWithStyles>
                        <FormLabelWithStyles htmlFor="brand">
                            Brand
                        </FormLabelWithStyles>
                        <FormControlWithStyles type="text" id="brand" name="brand" v value={product.brand}
                            onChange={handleFormInputChange} />
                    </FormGroupWithStyles>
                </FormRowWithStyles>

                <FormRowWithStyles>
                    <FormGroupWithStyles>
                        <FormLabelWithStyles htmlFor="color">
                            Color
                        </FormLabelWithStyles>
                        <FormControlWithStyles type="text" id="color" name="color" value={product.color}
                            onChange={handleFormInputChange} />
                    </FormGroupWithStyles>

                    <FormGroupWithStyles>
                        <FormLabelWithStyles htmlFor="size">
                            Size
                        </FormLabelWithStyles>
                        <FormControlWithStyles type="number" id="size" name="size" value={product.size}
                        onChange={handleFormInputChange} />
                    </FormGroupWithStyles>
                </FormRowWithStyles>

                <div className={styles["form__actions"]}>
                    <BackButtonWithStyles
                        onClick={handleDirectingBackToList}>
                        Back To List
                    </BackButtonWithStyles>

                    <FormSubmitWithStyles value="Update Product" />
                </div>
            </form>
        </section >
    )
}

