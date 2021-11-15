import React, { useState } from "react";
import { useHistory } from "react-router";
import { FormGroupWithStyles, FormControlWithStyles, FormLabelWithStyles, FormRowWithStyles } from "../../helpers";
import styles from "./product-add.module.scss";

export default function ProductAdd(props) {
    const history = useHistory();

    const [formState, setFormState] = useState({
        name: '',
        price: '',
        imageLink: '',
        gender: '',
        side: '',
        color: '',
        quantity: 0,
    })

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    const handleFormInputChange = (event) => {
        setFormState({
            ...formState,
            [event.target.name]: event.target.value
        })
    }

    const handleDirectingBackToList = (event) => {
        history.goBack();
    }

    return (
        <section className={styles["product-edit"]}>
            <form onSubmit={(event) => handleSubmit(event)} className={styles["form"]}>
                <h3 className={styles["form__title"]}>Product Form</h3>
                <FormGroupWithStyles>
                    <FormLabelWithStyles htmlFor="id">
                        Id
                    </FormLabelWithStyles>
                    <FormControlWithStyles type="text" id="id" name="id" readOnly />
                </FormGroupWithStyles>

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
                    <FormLabelWithStyles htmlFor="image-link">
                        Image Link
                    </FormLabelWithStyles>
                    <FormControlWithStyles type="text" id="image-link" name="image-link"
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
                    <button className="btn"
                        onClick={(event) => handleDirectingBackToList(event)}>
                        Back To List
                    </button>
                    <input type="submit" className="btn btn-primary" value="Create New" />
                </div>
            </form>
        </section >
    )
}
