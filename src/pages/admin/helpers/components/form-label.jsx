import React from "react";
import styles from "./form.module.scss";

export default function FormLabelWithStyles(props) {
    return (
        <aside>
            <label htmlFor={props.htmlFor || ""} className={styles["form__label"]}>
                {props.children}
            </label>
        </aside>
    )
}