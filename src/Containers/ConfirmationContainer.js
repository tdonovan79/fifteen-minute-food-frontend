import React, { Component } from 'react'

export default class ConfirmationContainer extends Component {

    state = {
        restaurant: "",
        food: []
    }



    componentDidMount() {
        fetch("http://localhost:3000/confirm")
            .then(r => r.json())
            .then(order => {
                this.setState({
                    restaurant: order.restaurant.name,
                    food: order.food_items
                })
            })
    }

    render() {
        // console.log(this.state.restaurant)
        let foodOrder = this.state.food
        return (
            <div>
                <h1>Thank you {localStorage.username}!</h1>
                <h2>for your order of</h2>
                <ul>{foodOrder.map(food => {
                    return <li>{food.name}</li>
                })}</ul>
                <h2>from</h2>
                <h1>{this.state.restaurant}</h1>
            </div>
        )
    }
}