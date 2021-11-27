import React from "react";
import styles from "./form.module.scss";

export default function FormSubmitWithStyles(props) {
    const { value, id, name, onClick, disabled } = props;

    return (
        <input type="submit"
            value={value}
            className={disabled ? `${styles["form-submit"]} ${styles["form-submit-disabled"]}`
                : styles["form-submit"]}
            id={id}
            name={name}
            onClick={onClick} />
    )
}