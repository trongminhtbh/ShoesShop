import React, { useState } from "react";
import { useHistory } from "react-router";
import { useForm, FormProvider } from "react-hook-form";
import {
    FormRowWithStyles,
    BackButtonWithStyles,
    FormSubmitWithStyles,
    TextInputWithStyles,
    ShoeApiClient,
    FormSelectWithStyles,
    TextAreaWithStyles
} from "../../helpers";
import styles from "./product-add.module.scss";

export default function ProductAdd() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = async (shoeData, event) => {
        event.preventDefault();
        await ShoeApiClient.create(shoeData);
        alert("Product Created");
    }

    const history = useHistory();
    const directBackToList = (event) => {
        event.preventDefault();
        history.goBack();
    }

    return (
        <section className={styles["product-edit"]}>
            <FormProvider {...{ register, errors }}>
                <form onSubmit={handleSubmit(onSubmit)} className={styles["form"]}>
                    <h3 className={styles["form__title"]}>Product Form</h3>

                    <TextInputWithStyles label="Name" htmlFor="name"
                        type="text" id="name" name="name" />

                    <FormRowWithStyles>
                        <TextInputWithStyles label="Price" htmlFor="price"
                            type="number" id="price" name="price" />

                        <TextInputWithStyles label="Discount" htmlFor="discount"
                            type="number" id="discount" name="discount" />
                    </FormRowWithStyles>

                    <TextInputWithStyles label="Image Link" htmlFor="link"
                        type="text" id="link" name="link" />

                    <FormSelectWithStyles label="Gender" htmlFor="gender" id="gender" name="gender"
                        options={[
                            { text: "Nam", value: "Nam" },
                            { text: "Nữ", value: "Nữ" },
                            { text: "Nam & Nữ", value: "Nam & Nữ" }]} />

                    <FormRowWithStyles>
                        <TextInputWithStyles label="Color" htmlFor="color"
                            type="text" id="color" name="color" />

                        <TextInputWithStyles label="Size" htmlFor="size"
                            type="number" id="size" name="size" />
                    </FormRowWithStyles>

                    <TextInputWithStyles label="Brand" htmlFor="brand"
                        type="text" id="brand" name="brand" />

                    <TextAreaWithStyles htmlFor="description" id="description" label="Description"
                        name="description" />

                    <div className={styles["form__actions"]}>
                        <BackButtonWithStyles
                            onClick={directBackToList}>
                            Back To List
                        </BackButtonWithStyles>

                        <FormSubmitWithStyles value="Create Product" />
                    </div>
                </form>
            </FormProvider>
        </section >
    )
}
