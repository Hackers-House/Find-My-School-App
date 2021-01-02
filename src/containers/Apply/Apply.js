import React, { Component } from "react"
import classes from "./Apply.module.css"
import Input from "../../components/UI/Input/Input"
import Button from "../../components/UI/Button/Button"
import { updateObject, checkValidity } from '../../shared/utility';
import axios from "axios";

class Apply extends Component {
    state = {
        applyForm: {
            name: {
                elementType: "input",
                elementConfig: {
                    type: "text",
                    placeholder: "Your Name"
                },
                value: "",
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            city: {
                elementType: "input",
                elementConfig: {
                    type: "text",
                    placeholder: "City"
                },
                value: "",
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            zipCode: {
                elementType: "input",
                elementConfig: {
                    type: "text",
                    placeholder: "ZIP Code"
                },
                value: "",
                validation: {
                    required: true,
                    minLength: 6,
                    maxLength: 6
                },
                valid: false,
                touched: false
            },
            country: {
                elementType: "input",
                elementConfig: {
                    type: "text",
                    placeholder: "Country"
                },
                value: "",
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            email: {
                elementType: "input",
                elementConfig: {
                    type: "email",
                    placeholder: "Your E-Mail"
                },
                value: "",
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            gpa: {
                elementType: "input",
                elementConfig: {
                    type: "number",
                    placeholder: "Your 12th GPA"
                },
                value: "",
                validation: {
                    required: true,
                    minLimit: 0,
                    maxLimit: 10
                },
                valid: false,
                touched: false
            },
            "coursePreference": {
                elementType: "select",
                "elementConfig": {
                    options: [
                        { value: "computerScience", displayValue: "Computer Science" },
                        { value: "electronics", displayValue: "Electronics and Communications" },
                        { value: "electrical", displayValue: "Electrical" },
                        { value: "Mechanical", displayValue: "Mechanical" }
                    ]
                },
                value: "computerScience",
                validation: {},
                valid: true,
            }
        },
        formIsValid: false,
        displayHeading: "Fill the School Predicting form"
    }

    inputChangedHandler = (event, inputIdentifier) => {
        const updatedFormElement = updateObject(this.state.applyForm[inputIdentifier], {
            value: event.target.value,
            valid: checkValidity(event.target.value, this.state.applyForm[inputIdentifier].validation),
            touched: true
        });
        const updatedApplyForm = updateObject(this.state.applyForm, {
            [inputIdentifier]: updatedFormElement
        });
        let formIsValid = true
        for (let inputIdentifier in updatedApplyForm) {
            formIsValid = updatedApplyForm[inputIdentifier].valid && formIsValid
        }
        this.setState({ applyForm: updatedApplyForm, formIsValid: formIsValid })
    }

    submissionHandler = () => {
        this.setState({ displayHeading: "Submission in progress..." })
        const formData = {}
        for (let formElementIdentifier in this.state.applyForm) {
            formData[formElementIdentifier] = this.state.applyForm[formElementIdentifier].value
        }
        const data = {
            applyForm: formData
        }
        console.log(formData)
        axios.post("https://find-my-school-4ca57-default-rtdb.firebaseio.com/submission.json", data)
            .then(response => {
                this.setState({ displayHeading: "Form Submitted Successfully ✅" })
            })
            .catch(error => {
                this.setState({ displayHeading: error.message })
            })
    }

    render() {
        const formElementsArray = []
        for (let key in this.state.applyForm) {
            formElementsArray.push({
                id: key,
                config: this.state.applyForm[key]
            })
        }

        let form = (
            <form>
                {formElementsArray.map(formElement => {
                    return (
                        <Input
                            key={formElement.id}
                            label={formElement.id}
                            elementType={formElement.config.elementType}
                            elementConfig={formElement.config.elementConfig}
                            value={formElement.config.value}
                            inValid={!formElement.config.valid}
                            shouldValidate={formElement.config.validation}
                            touched={formElement.config.touched}
                            changed={(event) => this.inputChangedHandler(event, formElement.id)} />
                    )
                })}
                <Button
                    disabled={!this.state.formIsValid}
                    color="primary"
                    variant="contained"
                    clicked={this.submissionHandler} >
                    SUBMIT AND PREDICT</Button>
            </form>
        )
        return (
            <div className={classes.ApplyForm}>
                <div className={classes.Heading}>
                    <h1>{this.state.displayHeading}</h1>
                    {form}
                </div>
            </div>

        )
    }
}

export default Apply