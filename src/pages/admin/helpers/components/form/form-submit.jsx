import React from "react";
import styles from "./form.module.scss";

export default function FormSubmitWithStyles(props) {
    const { value, id, name, onClick } = props;

    return (
        <input type="submit"
            value={value}
            className={styles["form-submit"]}
            id={id}
            name={name}
            onClick={onClick} />
    )
}