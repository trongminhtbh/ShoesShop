import React from "react";
import styles from "./form-select";

export default function FormOptionWithStyles(props) {
    return (
        <option value={props.value} selected={props.selected}>
            {props.children}
        </option>
    )
}