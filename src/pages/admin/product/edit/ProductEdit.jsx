import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router";
import { useForm, FormProvider } from "react-hook-form";
import {
    FormRowWithStyles,
    FormSubmitWithStyles,
    BackButtonWithStyles,
    TextInputWithStyles,
    ShoeApiClient,
    FormSelectWithStyles,
    TextAreaWithStyles
} from "../../helpers";
import styles from "./product-edit.module.scss";

export default function ProductEdit(props) {
    const { register, handleSubmit, formState: { errors }, setValue } = useForm();
    const onSubmit = async (data, event) => {
        event.preventDefault();
        console.log(data);
        await ShoeApiClient.update(data._id, data);
        alert("Product Updated");
    }

    const [product, setProduct] = useState({});
    const { id } = useParams();
    useEffect(() => onMounted(), []);
    const onMounted = () => {
        (async () => {
            const fetchedAndJsonified = await ShoeApiClient.findOne(id);
            fetchedAndJsonified && setProduct(fetchedAndJsonified);
        })();
    }

    useEffect(() => onShoeDataFetched(), [product]);
    const onShoeDataFetched = () => Object.entries(product)
        .forEach(([key, value]) => setValue(key, value));


    const history = useHistory();
    const directBackToList = (event) => {
        event.preventDefault();
        history.goBack();
    }

    return (
        <section className={styles["product-edit"]}>
            <FormProvider {...{ register, errors, handleSubmit }}>
                <form onSubmit={handleSubmit(onSubmit)} className={styles["form"]}>
                    <h3 className={styles["form__title"]}>
                        Product Form
                    </h3>

                    <TextInputWithStyles htmlFor="id"
                        label="Id"
                        id="id"
                        name="_id"
                        type="text"
                        readOnly={true} />

                    <TextInputWithStyles htmlFor="name"
                        label="Name"
                        id="name"
                        name="name"
                        type="text" />

                    <TextInputWithStyles htmlFor="quantity"
                        label="Quantity"
                        id="quantity"
                        name="quantity"
                        type="number" />

                    <FormRowWithStyles>
                        <TextInputWithStyles htmlFor="original-price"
                            label="Original Price"
                            id="original-price"
                            name="origin_price"
                            type="number" />

                        <TextInputWithStyles htmlFor="discount-price"
                            label="Discount Price"
                            id="discount-price"
                            name="discount_price"
                            type="number" />
                    </FormRowWithStyles>

                    <TextInputWithStyles htmlFor="link"
                        label="Image Link"
                        id="link"
                        name="link"
                        type="text" value={product.link} />

                    <FormRowWithStyles>
                        <FormSelectWithStyles htmlFor="gender"
                            label="Gender"
                            id="gender"
                            name="gender"
                            value={product.gender}
                            options={[
                                { text: "Nam", value: "Nam" },
                                { text: "Nữ", value: "Nữ" },
                                { text: "Nam & Nữ", value: "Nam & Nữ" }]} />

                    </FormRowWithStyles>

                    <FormRowWithStyles>
                        <TextInputWithStyles htmlFor="color"
                            label="Color"
                            id="color"
                            name="color"
                            type="text" />

                        <TextInputWithStyles htmlFor="size"
                            label="Size"
                            id="size"
                            name="size"
                            type="text" />
                    </FormRowWithStyles>

                    <TextInputWithStyles htmlFor="brand"
                        label="Brand"
                        id="brand"
                        name="brand"
                        type="text" />

                    <TextAreaWithStyles htmlFor="description"
                        id="description"
                        label="Description"
                        name="description" />

                    <div className={styles["form__actions"]}>
                        <BackButtonWithStyles onClick={directBackToList}>
                            Back To List
                        </BackButtonWithStyles>

                        <FormSubmitWithStyles value="Update Product" />
                    </div>
                </form>
            </FormProvider>
        </section >
    )
}

