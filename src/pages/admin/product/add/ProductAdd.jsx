import React, { useState } from "react";
import { useHistory } from "react-router";
import {
    FormGroupWithStyles,
    FormControlWithStyles,
    FormLabelWithStyles,
    FormRowWithStyles,
    BackButtonWithStyles,
    FormSubmitWithStyles,
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
                <FormGroupWithStyles>
                    <FormLabelWithStyles htmlFor="name">
                        Name
                    </FormLabelWithStyles>
                    <FormControlWithStyles type="text" id="name" name="name"
                        onChange={handleFormInputChange} />
                </FormGroupWithStyles>

                <FormGroupWithStyles>
                    <FormLabelWithStyles htmlFor="price">
                        Price
                    </FormLabelWithStyles>
                    <FormControlWithStyles type="number" id="price" name="price"
                        onChange={handleFormInputChange} />
                </FormGroupWithStyles>

                <FormGroupWithStyles>
                    <FormLabelWithStyles htmlFor="link">
                        Image Link
                    </FormLabelWithStyles>
                    <FormControlWithStyles type="text" id="link" name="link"
                        onChange={handleFormInputChange} />
                </FormGroupWithStyles>


                <FormGroupWithStyles>
                    <FormLabelWithStyles htmlFor="gender">
                        Gender
                    </FormLabelWithStyles>
                    <FormControlWithStyles type="text" id="gender" name="gender"
                        onChange={handleFormInputChange} />
                </FormGroupWithStyles>

                <FormRowWithStyles>
                    <FormGroupWithStyles>
                        <FormLabelWithStyles htmlFor="color">
                            Color
                        </FormLabelWithStyles>
                        <FormControlWithStyles type="text" id="color" name="color"
                            onChange={handleFormInputChange} />
                    </FormGroupWithStyles>

                    <FormGroupWithStyles>
                        <FormLabelWithStyles htmlFor="size">
                            Size
                        </FormLabelWithStyles>
                        <FormControlWithStyles type="number" id="size" name="size"
                            onChange={handleFormInputChange} />
                    </FormGroupWithStyles>
                </FormRowWithStyles>

                <FormGroupWithStyles>
                    <FormLabelWithStyles htmlFor="brand">
                        Brand
                    </FormLabelWithStyles>
                    <FormControlWithStyles type="text" id="brand" name="brand"
                        onChange={handleFormInputChange} />
                </FormGroupWithStyles>


                <FormGroupWithStyles>
                    <FormLabelWithStyles htmlFor="quantity">
                        Quantity
                    </FormLabelWithStyles>
                    <FormControlWithStyles type="text" id="quantity" name="quantity"
                        onChange={handleFormInputChange} />
                </FormGroupWithStyles>

                <div className={styles["form__actions"]}>
                    <BackButtonWithStyles
                        onClick={handleDirectingBackToList}>
                        Back To List
                    </BackButtonWithStyles>

                    <FormSubmitWithStyles value="Create Product"/>
                </div>
            </form>
        </section >
    )
}
