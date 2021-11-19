import React from "react";
import { useFormContext } from "react-hook-form";
import styles from "./form.module.scss";

export default function TextAreaWithStyles(props) {
    const { register, errors } = useFormContext();
    const {htmlFor, id, name, label} = props;

    return (
        <div className={styles["form-group"]}>
            <aside>
                <label htmlFor={htmlFor}
                    className={styles["form-label"]}>
                    {label}
                </label>
            </aside>

            <textarea id={id} {...register(name)} className={styles["text-area"]}
                rows="5" cols="60" >
            </textarea>
        </div>
    )
}