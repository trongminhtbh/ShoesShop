import React from "react";
import styles from "./form.module.scss";

export default function FormControlWithStyles(props) {
    return (
        <input type={props.type || "text"}
            id={props.id || ""}
            name={props.name || ""}
            value={props.value}
            readOnly={props.readOnly || false}
            className={styles["form__control"]} />
    )
}