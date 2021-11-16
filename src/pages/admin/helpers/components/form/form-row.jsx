import React from "react"
import styles from "./form.module.scss";

export default function FormRowWithStyles(props) {
    return (
        <div className={styles["form-container"]}>
            {props.children}
        </div>
    )
}