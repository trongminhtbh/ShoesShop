import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router";
import { UserApiClient } from "../../helpers/api";
import {
    FormControlWithStyles,
    FormGroupWithStyles,
    FormLabelWithStyles,
    FormRowWithStyles,
    FormSubmitWithStyles,
    BackButtonWithStyles
} from "../../helpers/components";
import styles from "./user-edit.module.scss";

export default function UserEdit(props) {
    const history = useHistory();

    const { id } = useParams();

    const [user, setUser] = useState({
        _id: "",
        name: "",
        phone: "",
        email: "",
        dob: "",
        password: "",
    });

    useEffect(() => {
        (async function () {
            const fetchedAndJsonified = await UserApiClient.findOne(id);
            if (fetchedAndJsonified) {
                setUser(fetchedAndJsonified);
            }
        })();
    }, [])

    const handleFormInputChange = (event) => {
        setUser({
            [event.target.name]: event.target.value
        });
    }

    const handleUserUpdate = (event) => {
        event.preventDefault();
    }

    const handleDirectingBackToList = (event) => {
        history.goBack();
    }

    return (
        <section className={styles["product-edit"]}>
            <form onSubmit={(event) => handleUserUpdate(event)} className={styles["form"]}>
                <h3 className={styles["form__title"]}>User Detail</h3>
                <FormGroupWithStyles>
                    <FormLabelWithStyles htmlFor="username" >
                        Id
                    </FormLabelWithStyles>
                    <FormControlWithStyles type="text" id="username" name="username" value={user._id} readOnly />
                </FormGroupWithStyles>

                <FormGroupWithStyles>
                    <FormLabelWithStyles htmlFor="username" >
                        Username
                    </FormLabelWithStyles>
                    <FormControlWithStyles type="text" id="username" name="username" value={user.name} readOnly />
                </FormGroupWithStyles>

                <FormGroupWithStyles>
                    <FormLabelWithStyles htmlFor="name">
                        Name
                    </FormLabelWithStyles>
                    <FormControlWithStyles type="text" id="name" name="name" value={user.name} readOnly />
                </FormGroupWithStyles>

                <FormRowWithStyles>
                    <FormGroupWithStyles>
                        <FormLabelWithStyles htmlFor="phone">
                            Phone
                        </FormLabelWithStyles>
                        <FormControlWithStyles type="text" id="phone" name="phone" value={user.phone}
                            onChange={(event) => handleFormInputChange(event)} />
                    </FormGroupWithStyles>

                    <FormGroupWithStyles>
                        <FormLabelWithStyles htmlFor="dob">
                            Date Of Birth
                        </FormLabelWithStyles>
                        <FormControlWithStyles type="text" id="date-of-birth" name="dob" value={user.dob}
                            onChange={(event) => handleFormInputChange(event)} />
                    </FormGroupWithStyles>
                </FormRowWithStyles>

                <FormGroupWithStyles>
                    <FormLabelWithStyles htmlFor="email">
                        Email
                    </FormLabelWithStyles>
                    <FormControlWithStyles type="email" id="email" name="email" value={user.email}
                        onChange={(event) => handleFormInputChange(event)} />
                </FormGroupWithStyles>

                <FormGroupWithStyles>
                    <FormLabelWithStyles htmlFor="email">
                        Password
                    </FormLabelWithStyles>
                    <FormControlWithStyles type="password" id="password" name="password" value={user.password}
                        onChange={(event) => handleFormInputChange(event)} />
                </FormGroupWithStyles>

                <div className={styles["form__actions"]}>
                    <BackButtonWithStyles onClick={handleDirectingBackToList}>
                        Back To List
                    </BackButtonWithStyles>
                    <FormSubmitWithStyles value="Update User" onClick={handleUserUpdate} />
                </div>
            </form>
        </section>
    )
}
