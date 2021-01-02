import React from "react"
import NavigationItem from "./NavigationItem/NavigationItem"
import classes from "./NavigationItems.module.css"

const navigationItems = () => {
    return (
        <ul className={classes.NavigationItems}>
            <NavigationItem exact link="/">Home</NavigationItem>
            <NavigationItem link="/find-schools">Find Schools</NavigationItem>
            <NavigationItem link="/apply">Apply</NavigationItem>
            <NavigationItem link="/dashboard">Dashboard</NavigationItem>
        </ul>
    )
}

export default navigationItems