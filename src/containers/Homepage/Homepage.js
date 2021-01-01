import React, { useState, useEffect } from "react"
import axios from "axios"

const Homepage = () => {
    const [initialData, setInitialData] = useState([{}])

    useEffect(() => {
        axios.get("/api")
            .then(response => {
                setInitialData(response.data)
            })
    }, [])

    return (
        <div>
            <h1>
                Team Name : {initialData.teamName}
            </h1>
            <p>
                Project Name: {initialData.projectName}
            </p>
        </div>
    )
}

export default Homepage