import React, { useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { BackButtonWithStyles, FormRowWithStyles, FormSubmitWithStyles, TextAreaWithStyles, TextInputWithStyles } from "../helpers";
import styles from "./service.module.scss";
import { FormProvider, useForm } from "react-hook-form";

const baseUrl = "https://pacific-ridge-30189.herokuapp.com/",
    path = "schedule",
    url = baseUrl + path;


async function useFetchService(callback = (service) => { }) {
    const { register, handleSubmit, formState: { errors }, setValue } = useForm();

    const { id } = useParams();

    const query = `?id=${id}`;

    useEffect(() => {
        (async function () {
            const respJson = await fetch(url + query, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            }).then(response => response.json());

            callback(respJson);
        })();

    }, []);

}

export default function ServiceDetail() {
    const history = useHistory();

    const { register, formState: { errors }, setValue } = useForm();

    const populateFormData = (service) => {
        const entries = Object.entries(service);
        entries.forEach(([key, value]) => setValue(key, value));
    }

    useFetchService(populateFormData);

    const onBackButtonClicked = (event) => {
        event.preventDefault();
        history.goBack();
    }

    return (
        <section className={styles["service-edit"]}>
            <FormProvider {...{ register, errors }}>
                <form className={styles["form"]}>
                    <h3 className={styles["form-title"]}>
                        Schedule Detail
                    </h3>

                    <TextInputWithStyles label="Name"
                        htmlFor="name"
                        type="text"
                        id="name"
                        name="name"
                        readOnly={true} />

                    <FormRowWithStyles>
                        <TextInputWithStyles label="Number Of Pairs"
                            htmlFor="num-of-pair"
                            type="text"
                            id="num-of-pair"
                            name="num_of_pair"
                            readOnly={true} />

                        <TextInputWithStyles label="Total Price"
                            htmlFor="total-price"
                            type="total-price"
                            id="total-price"
                            name="total"
                            readOnly={true} />
                    </FormRowWithStyles>

                    <FormRowWithStyles>
                        <TextInputWithStyles label="Customer Phone"
                            htmlFor="phone"
                            type="text"
                            id="phone"
                            name="phone"
                            readOnly={true} />

                        <TextInputWithStyles label="Customer Email"
                            htmlFor="email"
                            type="text"
                            id="email"
                            name="email"
                            readOnly={true} />
                    </FormRowWithStyles>




                    <TextInputWithStyles label="Pack"
                        htmlFor="pack"
                        type="text"
                        id="pack"
                        name="pack"
                        readOnly={true} />

                    <FormRowWithStyles>
                        <TextInputWithStyles label="Send Time"
                            htmlFor="send-time"
                            type="text"
                            id="send-time"
                            name="send_time"
                            readOnly={true} />

                        <TextInputWithStyles label="Received Time"
                            htmlFor="send-time"
                            type="text"
                            id="received-time"
                            name="received_time"
                            readOnly={true} />
                    </FormRowWithStyles>


                    <TextInputWithStyles label="Type Received"
                        htmlFor="type-received"
                        type="text"
                        id="type-received"
                        name="type_received"
                        readOnly={true} />

                    <TextAreaWithStyles label="Address"
                        htmlFor="address"
                        id="address"
                        name="address"
                        readOnly={true} />

                    <BackButtonWithStyles onClick={onBackButtonClicked}>
                        Back To List
                    </BackButtonWithStyles>

                </form>
            </FormProvider>
        </section>)
}