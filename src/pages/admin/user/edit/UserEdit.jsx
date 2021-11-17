import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router";
import { UserApiClient } from "../../helpers/api";
import {
    FormRowWithStyles,
    FormSubmitWithStyles,
    BackButtonWithStyles,
    TextInputWithStyles
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
            <form onSubmit={handleUserUpdate}
                className={styles["form"]}>

                <h3 className={styles["form__title"]}>User Detail</h3>

                <TextInputWithStyles label="Id"
                    htmlFor="id" id="id" name="id" type="text"
                    value={user._id} readOnly={true}
                />

                <TextInputWithStyles label="Username"
                    htmlFor="username" id="username" name="username" type="text"
                    value={user.name} readOnly={true}
                />

                <TextInputWithStyles label="Name"
                    htmlFor="name" id="name" name="name" type="text"
                    value={user.name} onChange={handleFormInputChange}
                />

                <FormRowWithStyles>
                    <TextInputWithStyles label="Phone"
                        htmlFor="phone" id="phone" name="phone" type="text"
                        value={user.phone} onChange={handleFormInputChange}
                    />

                    <TextInputWithStyles label="Date Of Birth"
                        htmlFor="dob" id="dob" name="dob" type="text"
                        value={user.dob} onChange={handleFormInputChange}
                    />
                </FormRowWithStyles>

                <TextInputWithStyles label="Email"
                    htmlFor="email" id="email" name="email" type="email"
                    value={user.email} onChange={handleFormInputChange}
                />

                <TextInputWithStyles label="Password"
                    htmlFor="password" id="password" name="password" type="password"
                    value={user.password} onChange={handleFormInputChange}
                />

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
