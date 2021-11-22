import React from "react";
import { Delete } from "@material-ui/icons"
import styles from "./button.module.scss";


export default function DeleteButtonWithStyles(props) {
    return (
        <button className={styles["edit-button"]}
            onClick={props.onClick}
            style={props.style}
            id={props.id}
            name={props.name}>
            <Delete />
        </button>
    )
}