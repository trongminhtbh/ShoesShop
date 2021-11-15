import React from "react";
import styles from "./form.module.scss";

export default function FormGroupWithStyles(props) {
    return (
        <div className={styles["form__group"]}>
            {props.children}
        </div>
    );
}