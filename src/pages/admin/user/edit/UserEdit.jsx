import React, { useState } from "react";
import { useHistory } from "react-router";
import { FormControlWithStyles, FormGroupWithStyles, FormLabelWithStyles, FormRowWithStyles } from "../../helpers/components";
import styles from "./user-edit.module.scss";

export default function UserEdit(props) {
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
                <h3 className={styles["form__title"]}>User Detail</h3>
                <FormGroupWithStyles>
                    <FormLabelWithStyles htmlFor="username">
                        Username
                    </FormLabelWithStyles>
                    <FormControlWithStyles type="text" id="username" name="username" readOnly />
                </FormGroupWithStyles>

                <FormGroupWithStyles>
                    <FormLabelWithStyles htmlFor="name">
                        Name
                    </FormLabelWithStyles>
                    <FormControlWithStyles type="text" id="name" name="name" readOnly />
                </FormGroupWithStyles>

                <FormGroupWithStyles>
                    <FormLabelWithStyles htmlFor="phone">
                        Phone
                    </FormLabelWithStyles>
                    <FormControlWithStyles type="text" id="phone" name="phone" />
                </FormGroupWithStyles>

                <FormGroupWithStyles>
                    <FormLabelWithStyles htmlFor="email">
                        Email
                    </FormLabelWithStyles>
                    <FormControlWithStyles type="email" id="email" name="email" />
                </FormGroupWithStyles>

                <FormGroupWithStyles>
                    <FormLabelWithStyles htmlFor="date-of-birth">
                        Date Of Birth
                    </FormLabelWithStyles>
                    <FormControlWithStyles type="date" id="date-of-birth" name="date-of-birth" />
                </FormGroupWithStyles>

                <div className={styles["form__actions"]}>
                    <button className="btn"
                        onClick={(event) => handleDirectingBackToList(event)}>
                        Back To List
                    </button>
                    <input type="submit" className="btn btn-primary" value="Create New" />
                </div>
            </form>
        </section>
    )
}
