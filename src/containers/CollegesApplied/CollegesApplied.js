import React, { Component } from "react"
import Card from "../../components/UI/Card/Card"

class CollegesApplied extends Component {
    state = {
        colleges: [
            { id: 1, collegeName: "IIT Bombay" }
        ],
    }

    // componentDidMount() {
    //     axios.get("/orders.json")
    //         .then(response => {
    //             const fetchOrders = []
    //             for (let key in response.data) {
    //                 fetchOrders.push({
    //                     ...response.data[key],
    //                     id: key
    //                 })
    //             }
    //             this.setState({ loading: false, orders: fetchOrders })
    //         })
    //         .catch(error => {
    //             this.setState({ loading: false })
    //         })
    // }

    render() {
        return (
            <div>
                {this.state.colleges.map(college => {
                    return (
                        <Card
                            key={college.id}
                            colleges={college.collegeName} />
                    )
                })}
            </div>
        )
    }
}

export default CollegesApplied