import React from "react"
import booksLogo from "../../assets/logo.png"
import classes from "./Logo.module.css"

const logo = () => {
    return (
        <div className={classes.Logo}>
            <img src={booksLogo} alt="logo" />
            <h1>Find My School</h1>
        </div>
    )
}

export default logo