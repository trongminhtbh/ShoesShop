import React from "react";
import { Edit } from "@material-ui/icons"
import styles from "./button.module.scss";


export default function EditButtonWithStyles(props) {
    return (
        <button className={styles["edit-button"]}
            onClick={props.onClick}
            style={props.style}
            id={props.id}
            name={props.name}>
            <Edit />
        </button>
    )
}