import React from "react";
import styles from "./form.module.scss";

export default function FormSelectWithStyles(props) {
    return (
        <select name={props.name}
            id={props.id}
            value={props.value}
            onChange={props.onChange}
            className={`${props.className} ${styles["form-select"]}`}
            style={props.style}>
            {props.children}
        </select>
    )
}