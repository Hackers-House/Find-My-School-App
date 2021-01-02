import React from "react"
import booksLogo from "../../assets/logo.png"
import classes from "./Logo.module.css"

const logo = () => {
    return (
        <div className={classes.Logo}>
            <img src={booksLogo} alt="logo" />
            <h2>Find My School</h2>
        </div>
    )
}

export default logo