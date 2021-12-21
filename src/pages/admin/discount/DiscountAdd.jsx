import React, { useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { BackButtonWithStyles, FormSubmitWithStyles, TextAreaWithStyles, TextInputWithStyles } from "../helpers";
import styles from "./discount.module.scss";

const baseUrl = "https://pacific-ridge-30189.herokuapp.com/",
    path = "discount",
    url = baseUrl + path;

function useFetchDiscount(callback = (discount) => { }) {
    useEffect(() => {
        (async function () {
            const jsonResp = await fetch(url, {
                headers: {
                    "Content-Type": "applicatinon/json"
                }
            }).then(resp => resp.json());

            callback(jsonResp);
        })();
    }, []);
}

async function createDiscount(discount) {
    const response = await fetch(url, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(discount)
    }).then(response => response.json());

    alert("discount created!");
    return response;
}

export default function DiscountAdd() {
    const { register,
        handleSubmit,
        setValue,
        formState: { errors } } = useForm();

    const history = useHistory();

    const populateFormData = (discount) => {
        const entries = Object.entries(discount);
        entries.forEach(([key, value]) => setValue(key, value));
    }

    useFetchDiscount(populateFormData);

    const onSubmit = async (data, event) => {
        event.preventDefault();
        await createDiscount(data);
    }

    const onBack = (event) => {
        event.preventDefault();
        history.goBack();
    }

    return (<section className={styles["discount-add"]}>
        <FormProvider {...{ register, errors }}>
            <form onSubmit={handleSubmit(onSubmit)} className={styles["form"]}>
                <h3 className={styles["form-title"]}>Discount Form</h3>

                <TextInputWithStyles label="Code"
                    htmlFor="code"
                    type="text"
                    id="name"
                    name="code" />

                <TextInputWithStyles label="Discount Value"
                    htmlFor="discount-value"
                    type="number"
                    min="0"
                    id="discount-value"
                    name="discount_value" />

                <TextInputWithStyles label="Start Date"
                    htmlFor="start-date"
                    type="text"
                    id="start-date"
                    name="start_time" />

                <TextInputWithStyles label="End Date"
                    htmlFor="end-date"
                    type="text"
                    id="end-date"
                    name="end_time" />

                <TextInputWithStyles label="Quanitty"
                    htmlFor="quantity"
                    type="number"
                    id="quantity"
                    min="0"
                    name="quantity" />

                <TextAreaWithStyles htmlFor="description"
                    id="description"
                    label="Description"
                    name="description" />

                <div className={styles["form__actions"]}>
                    <BackButtonWithStyles onClick={onBack}>
                        Back To List
                    </BackButtonWithStyles>

                    <FormSubmitWithStyles value="Create Discount" />
                </div>
            </form>
        </FormProvider>
    </section>)
}