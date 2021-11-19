import React, { useState, useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useHistory, useParams } from "react-router";
import { UserApiClient } from "../../helpers/api";
import {
    FormRowWithStyles,
    FormSubmitWithStyles,
    BackButtonWithStyles,
    TextInputWithStyles,
    TextAreaWithStyles
} from "../../helpers/components";
import styles from "./user-edit.module.scss";

export default function UserEdit(props) {
    const { register, handleSubmit, setValue,
        formState: { errors } } = useForm();

    const onSubmit = (userData, event) => {
        event.preventDefault();
        UserApiClient.update(userData._id, userData);
    }

    const { id } = useParams();
    const [user, setUser] = useState({});
    useEffect(() => onMounted(), [])
    const onMounted = () => {
        (async function () {
            const fetchedAndJsonified = await UserApiClient.findOne(id);
            if (fetchedAndJsonified) {
                setUser(fetchedAndJsonified);
                console.log(fetchedAndJsonified);
            }
        })();
    }

    useEffect(() => onUserFetched(), [user]);
    const onUserFetched = () => Object.entries(user)
        .forEach(([key, value]) => setValue(key, value));

    const history = useHistory();
    const directBackToList = (event) => {
        event.preventDefault();
        history.goBack();
    }

    return (
        <section className={styles["product-edit"]}>
            <FormProvider {...{ register, errors }}>
                <form onSubmit={handleSubmit(onSubmit)}
                    className={styles["form"]}>

                    <h3 className={styles["form-title"]}>
                        User Detail
                    </h3>

                    <TextInputWithStyles label="Id" htmlFor="id"
                        id="id" name="_id" type="text" value={user._id} readOnly={true}
                    />


                    <TextInputWithStyles label="Name" htmlFor="name"
                        id="name" name="name" type="text"
                    />

                    <FormRowWithStyles>
                        <TextInputWithStyles label="Phone" htmlFor="phone"
                            id="phone" name="phone" type="text"
                        />

                        <TextInputWithStyles label="Date Of Birth" htmlFor="dob"
                            id="dob" name="dob" type="text"
                        />
                    </FormRowWithStyles>

                    <TextInputWithStyles label="Email" htmlFor="email"
                        id="email" name="email" type="email"
                    />

                    <TextInputWithStyles label="Password" htmlFor="password"
                        id="password" name="password" type="password"
                    />

                    <TextAreaWithStyles label="Delivery Info" htmlFor="delivery-info"
                        name="delivery_info" />

                    <div className={styles["form-actions"]}>
                        <BackButtonWithStyles onClick={directBackToList}>
                            Back To List
                        </BackButtonWithStyles>
                        <FormSubmitWithStyles value="Update User" />
                    </div>
                </form>
            </FormProvider>
        </section>
    )
}
