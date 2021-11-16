import React from "react";
import styles from "./form.module.scss";

export default function FormSubmitWithStyles(props) {
    return (
        <input type="submit"
            value={props.value}
            className={`${props.className} ${styles["form-submit"]}`}
            style={props.style}
            id={props.id}
            name={props.name}
            onClick={props.onClick} />
    )
}