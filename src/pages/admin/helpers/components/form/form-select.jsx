import React from "react";
import { useFormContext } from "react-hook-form";
import styles from "./form.module.scss";

export default function FormSelectWithStyles(props) {
    const { id, name, label, value, onChange, htmlFor,
        options } = props;

    const { register, errors } = useFormContext();


    return (
        <div className={styles["form-group"]}>
            <aside>
                <label htmlFor={htmlFor}
                    className={styles["form-label"]}>
                    {label}
                </label>
            </aside>

            <select id={id}
                {...register(name)}
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