import React from "react"
import { useFormContext } from "react-hook-form";
import styles from "./form.module.scss";

export default function TextInputWithStyles(props) {
    const { label, id, type,
        value, name, onChange, readOnly, ...rest } = props;


    const { register, errors } = useFormContext();

    return (
        <div className={styles["form-group"]}>
            <aside>
                <label htmlFor={id}
                    className={styles["form-label"]}>
                    {label}
                </label>
            </aside>

            <input type={type} id={id}  {...register(name, {
                valueAsNumber: type === "number",
            })}
                className={styles["form-control"]} readOnly={readOnly} />
        </div>
    )
}