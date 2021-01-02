import React from "react"
import NavigationItems from "../NavigationItems/NavigationItems.js"
import Logo from "../../Logo/Logo"
import classes from "./Toolbar.module.css"

const toolbar = () => {
    return (
        <header className={classes.Toolbar}>
            <Logo />
            <nav>
                <NavigationItems />
            </nav>
        </header>

    )
}

export default toolbar