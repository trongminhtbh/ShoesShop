import React, { useState, useEffect } from "react";
import { AddCircle, Cake } from "@material-ui/icons";
import { useHistory, useRouteMatch } from "react-router-dom";
import { DeleteButtonWithStyles, EditButtonWithStyles } from "../helpers";
import styles from "./service.module.scss";

const baseUrl = "https://pacific-ridge-30189.herokuapp.com/",
    path = "schedule",
    url = baseUrl + path;

function useFetchService(callback = (service) => { }) {
    useEffect(() => {
        (async function () {
            const action = "list";
            const jsonResp = await fetch(url + "/" + action, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                },
            }).then(resp => resp.json());
            callback(jsonResp);
        })();
    }, [])
}

export default function ServiceList() {

    const match = useRouteMatch(),
        history = useHistory();

    const [services, setServices] = useState([]);

    useFetchService((services) => setServices(services));

    const onEditService = (event, serviceId) => {
        event.preventDefault();
        const path = `${match.path}/${serviceId}`
        history.push(path);
    }

    return (<section>
        <header className={styles["service-list-header"]}>
            <h3 className={styles["service-list-title"]}>
                Discounts List
            </h3>
        </header>

        <table className={styles["service-table"]}>
            <thead>
                <tr>
                    <th className={styles["service-name"]}>
                        Name
                    </th>
                    <th className={styles["service-email"]}>
                        Customer Email
                    </th>
                    <th className={styles["service-num-of-pair"]}>
                        Number Of Pairs
                    </th>
                    <th className={styles["service-send-time"]}>
                        Send Time
                    </th>
                    <th className={styles["service-received-time"]}>
                        Receive Time
                    </th>
                    <th className={styles["service-total"]}>
                        Total Price
                    </th>
                    <th className={styles["service-actin"]}>
                        Action
                    </th>
                </tr>
            </thead>
            <tbody>
                {services.map(service =>
                    <tr>
                        <td className={styles["service-name"]}>
                            {service.name}
                        </td>
                        <td className={styles["service-email"]}>
                            {service.email}
                        </td>
                        <td className={styles["service-num-of-pair"]}>
                            {service.num_of_pair}
                        </td>
                        <td className={styles["service-send-time"]}>
                            {service.send_time}
                        </td>
                        <td className={styles["service-received-time"]}>
                            {service.received_time}
                        </td>
                        <td className={styles["service-total"]}>
                            {service.total}
                        </td>
                        <td className={styles["service-action"]}>
                            <EditButtonWithStyles
                                onClick={(event) => onEditService(event, service._id)} />
                        </td>
                    </tr>
                )}
            </tbody>
        </table>

    </section>)
}