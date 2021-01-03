import React, { Component } from "react"
import classes from "./Dashboard.module.css"
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import CollegesApplied from "../CollegesApplied/CollegesApplied"
import axios from "axios"

class Dashboard extends Component {
    state = {
        name: null,
        city: null,
        course: null,
        country: null,
        rank: 25000,
        email: null

    }
    componentDidMount() {
        axios.get("https://find-my-school-4ca57-default-rtdb.firebaseio.com/submission.json")
            .then(response => {
                const fetchSubmission = []
                for (let key in response.data) {
                    fetchSubmission.push({
                        ...response.data[key],
                        id: key
                    })
                }
                this.setState({
                    name: fetchSubmission[0].applyForm.name,
                    city: fetchSubmission[0].applyForm.city,
                    course: fetchSubmission[0].applyForm.coursePreference,
                    country: fetchSubmission[0].applyForm.country,
                    email: fetchSubmission[0].applyForm.email
                })
            })
    }
    render() {
        return (
            <div className={classes.Dashboard}>
                <h1>Welcome to your Dashboard</h1>
                <div className={classes.Profile}>
                    <AccountBoxIcon className={classes.ProfileIcon} />
                    <div className={classes.Bio}>
                        <h3 className={classes.Name}>{this.state.name}</h3>
                        <h6>{this.state.email}</h6>
                        <p>Location: {this.state.city}, {this.state.country} </p>
                        <p>Course applied: {this.state.course}</p>
                        <p>Jee Main Rank: {this.state.rank} </p>
                    </div>
                </div>
                <div className={classes.CollegesApplied}>
                    <h1>Colleges Applied</h1>
                    <CollegesApplied />
                </div>
            </div>
        )
    }
}

export default Dashboard