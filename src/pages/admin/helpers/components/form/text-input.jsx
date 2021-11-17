import React from "react"
import styles from "./form.module.scss";

export default function TextInputWithStyles(props) {
    const { label, id, type,
        value, name, onChange, readOnly } = props;

    return (
        <div className={styles["form-group"]}>
            <aside>
                <label htmlFor={id}
                    className={styles["form-label"]}>
                    {label}
                </label>
            </aside>

            <input type={type} value={value} id={id} name={name} onChange={onChange}
                className={styles["form-control"]} readOnly={readOnly} />
        </div>
    )
}