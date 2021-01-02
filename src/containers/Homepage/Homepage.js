import React, { Component } from "react"
import Wrapper from "../../hoc/Wrapper"
import classes from "./Homepage.module.css"
import Button from "../../components/UI/Button/Button"
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import SchoolIcon from '@material-ui/icons/School';
import PostAddIcon from '@material-ui/icons/PostAdd';

class Homepage extends Component {
    render() {
        return (
            <Wrapper>
                <div className={classes.Hero}>
                    <div className={classes.Content}>
                        <h1>Hello $NameOfTheUser</h1>
                        <h2>Let us find your perfect school</h2>
                        <div className={classes.Button}>
                            <Button color="primary" variant="outlined">Get Started</Button>
                        </div>
                    </div>
                </div>
                <section className="site-section-1">
                    <div className={classes.CompanyFeaturesSection}>
                        <h1>
                            How it Works?
                        </h1>
                        <p className={classes.Text}>With just few clicks, students can send their applications to academic programs at multiple universities. No need to apply through university websites.</p>
                        <div className={classes.Features}>
                            <div className={classes.CompanyFeature}>
                                <AccountCircleIcon className={classes.Icon} />
                                <h3>1:Profile</h3>
                                <p>Complete sign up process to apply. This will make a generic profile of you which you can use to apply to multiple institutions</p>
                            </div>
                            <div className={classes.CompanyFeature}>
                                <SchoolIcon className={classes.Icon} />
                                <h3>2:SEARCH AND SELECT COLLEGES</h3>
                                <p>Choose programs and Universities to apply and add them to your dashboard.</p>
                            </div>
                            <div className={classes.CompanyFeature}>
                                <PostAddIcon className={classes.Icon} />
                                <h3>3:SUBMIT APPLICATIONS</h3>
                                <p>Upload university specific documents, pay fee and submit your application. We will send directly to university admissions committee***.</p>
                            </div>
                        </div>
                    </div>
                </section>

            </Wrapper>
        )
    }
}

export default Homepage