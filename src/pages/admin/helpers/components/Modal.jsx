import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import { BackButtonWithStyles } from ".";

const useStyles = makeStyles({
    modal: {
        position: "absolute",
        left: "50%", top: "50%",
        transform: "translate(-50%, -50%)",
        backgroundColor: "white",
        width: "400px",
        height: "300px",
        borderRadius: "4px",
        boxShadow: "0 0 20px 2px rgba(0, 0, 0, 0.115)",
        padding: "8px",
        fontSize: "17pt",
        color: "black",
        display: "flex",
        justifyContent: "center",
    },
});

export function Modal({ isOpen, children }) {
    const classes = useStyles();


    return (
        <>
            <div className={classes.modal}>
                {children}
                <BackButtonWithStyles />
            </div>
        </>)
}