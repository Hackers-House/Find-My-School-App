import React, { Component } from "react"
import classes from "./FindSchools.module.css"
import SchoolIcon from '@material-ui/icons/School';
import Button from "../../components/UI/Button/Button"

class FindSchools extends Component {
    render() {
        return (
            <div className={classes.FindSchools}>
                <h1>Predicted Colleges</h1>
                <div className={classes.Colleges}>
                    <div className={classes.College}>
                        <SchoolIcon style={{ "fontSize": "8rem", "color": "#6155a6" }} />
                        <div className={classes.Content}>
                            <p className={classes.CollegeName}>IIIT DELHI</p>
                            <p>Fees: </p>
                            <p>Rating: </p>
                            <Button color="primary" variant="contained">Apply Now</Button>
                        </div>
                    </div>
                    <div className={classes.College}>
                        <SchoolIcon style={{ "fontSize": "8rem", "color": "#6155a6" }} />
                        <div className={classes.Content}>
                            <p className={classes.CollegeName}>NIT TRICHY</p>
                            <p>Fees: </p>
                            <p>Rating: </p>
                            <Button color="primary" variant="contained">Apply Now</Button>
                        </div>
                    </div>
                    <div className={classes.College}>
                        <SchoolIcon style={{ "fontSize": "8rem", "color": "#6155a6" }} />
                        <div className={classes.Content}>
                            <p className={classes.CollegeName}>JADAVPUR UNIVERSITY DELHI</p>
                            <p>Fees: </p>
                            <p>Rating: </p>
                            <Button color="primary" variant="contained">Apply Now</Button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default FindSchools