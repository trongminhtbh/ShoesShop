import React, { useEffect } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { useHistory, useParams } from "react-router-dom";
import { TextAreaWithStyles, TextInputWithStyles, FormSubmitWithStyles, BackButtonWithStyles } from "../helpers";
import styles from "./discount.module.scss";

const baseUrl = "https://pacific-ridge-30189.herokuapp.com/",
    path = "discount",
    url = baseUrl + path;

function useFetchDiscount(callback = (discount) => { }) {

    const { id } = useParams();

    useEffect(() => {
        (async function () {
            const query = `?code=${id}`;

            const jsonResp = await fetch(url + query, {
                method: "GET",
            }).then(resp => resp.json());

            callback(jsonResp);
        })();
    }, []);
}

async function editDiscount(discount) {
    const query = `?id=${discount._id}`;
    await fetch(url + query, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(discount)
    }).then(resp => resp.json());

    alert("Discount edited!");
}

export default function DiscountEdit() {
    const { register, handleSubmit, formState: { errors }, setValue } = useForm();

    const history = useHistory();

    const populateFormData = (discount) => {
        const entries = Object.entries(discount);
        entries.forEach(([key, value]) => setValue(key, value));
    }

    useFetchDiscount(populateFormData);

    const onSubmit = async (data, event) => {
        event.preventDefault();
        await editDiscount(data);
    }

    const onBack = (event) => {
        event.preventDefault();
        history.goBack();
    }

    return (<section className={styles["discount-edit"]}>
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

                <TextAreaWithStyles label="Description"
                    htmlFor="description"
                    id="description"
                    name="description" />

                <div className={styles["form__actions"]}>
                    <BackButtonWithStyles onClick={onBack}>
                        Back To List
                    </BackButtonWithStyles>

                    <FormSubmitWithStyles value="Edit Discount" />
                </div>
            </form>
        </FormProvider>
    </section>)
}