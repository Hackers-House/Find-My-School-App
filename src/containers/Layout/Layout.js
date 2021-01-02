import React, { Component } from "react"
import Toolbar from "../../components/Navigation/Toolbar/Toolbar"
import classes from "./Layout.module.css"
import Wrapper from "../../hoc/Wrapper"

class Layout extends Component {
    render() {
        return (
            <Wrapper>
                <Toolbar />
                <main className={classes.Content} >
                    {this.props.children}
                </main>
            </Wrapper>
        )
    }

}

export default Layout