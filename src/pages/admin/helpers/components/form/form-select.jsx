import React from "react";
import styles from "./form.module.scss";

export default function FormSelectWithStyles(props) {
    const { id, name, label, value, onChange, htmlFor,
        options } = props;

    return (
        <div className={styles["form-group"]}>
            <aside>
                <label htmlFor={htmlFor}
                    className={styles["form-label"]}>
                    {label}
                </label>
            </aside>

            <select name={name}
                id={id}
                value={value}
                onChange={onChange}
                className={styles["form-select"]}>
                {
                    options.map((option) =>
                        <option key={option.value} value={option.value}>
                            {option.text}
                        </option>)
                }
            </select>
        </div>
    )
}