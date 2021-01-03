import React from "react"
import classes from "./Card.module.css"

const card = (props) => {
    const colleges = []
    console.log(colleges)
    for (let name in props.colleges) {
        colleges.push(
            {
                id: name.id,
                name: name.collegeName,
            }
        )
    }
    console.log(colleges)
    const collegeOutput = colleges.map(clg => {
        return <div
            style={{
                textTransform: "capitalize",
                display: "inline-block",
                margin: "0 8px",
                border: "1px solid #ccc",
                padding: "5px"
            }}
            key={clg.id}>{clg.name}</div>
    })
    return (
        <div className={classes.Card}>
            <div>{collegeOutput}</div>
        </div>
    )
}

export default card