import React from "react";
import styles from "./button.module.scss";

export default function BackButtonWithStyles(props) {
    return (
        <button
            className={`${styles["link-button"]} ${props.className}`}
            onClick={props.onClick}
            style={props.style}
            id={props.id}
            name={props.name}>
            {props.children}
        </button>
    )
}