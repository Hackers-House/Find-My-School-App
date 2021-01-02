import React, { Component } from "react"
import Wrapper from "../../hoc/Wrapper"
import classes from "./Homepage.module.css"
import Button from "../../components/UI/Button/Button"
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import SchoolIcon from '@material-ui/icons/School';
import PostAddIcon from '@material-ui/icons/PostAdd';
import { FormatBold } from "@material-ui/icons";

class Homepage extends Component {
    continueApplyHandler = () => {
        this.props.history.push("/apply")
    }
    render() {
        return (
            <Wrapper>
                <div className={classes.Hero}>
                    <div className={classes.Content}>
                        <h1>Hello $NameOfTheUser</h1>
                        <h2>Let us find your perfect school</h2>
                        <div className={classes.Button}>
                            <Button color="primary" variant="outlined" clicked={this.continueApplyHandler}>Get Started</Button>
                        </div>
                    </div>
                </div>
                <section className="site-section-1">
                    <div className={classes.CompanyFeaturesSection}>
                        <h1>
                            How it Works?
                        </h1>
                        <p className={classes.Text}>With just few clicks, students can send their applications to academic programs at multiple institutions. <span>No need to apply by standing for hours in a queue.</span></p>
                        <div className={classes.Features}>
                            <div className={classes.CompanyFeature}>
                                <AccountCircleIcon className={classes.Icon} />
                                <h3>1:PROFILE</h3>
                                <p>Complete sign up process to make your Find My School Account.</p>
                            </div>
                            <div className={classes.CompanyFeature}>
                                <PostAddIcon className={classes.Icon} />
                                <h3>2:FILL APPLICATION</h3>
                                <p>Fill the application form with all the details. This will make a generic profile of you which you can use to apply to multiple institutions</p>
                            </div>
                            <div className={classes.CompanyFeature}>
                                <SchoolIcon className={classes.Icon} />
                                <h3>3:PREDICT</h3>
                                <p>Our Machine Learning Model will predict the best college for you.</p>
                            </div>
                        </div>
                    </div>
                </section>

            </Wrapper>
        )
    }
}

export default Homepage