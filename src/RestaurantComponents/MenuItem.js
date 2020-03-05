import React, { Component } from 'react'

export default class MenuItem extends Component {

    handleClick = () => {
        this.props.addItemToCart(this.props)
    }
    render() {
        return (
            <div className="restaurant_name">
                <h6 className="food_name">{this.props.name}</h6>
                <p className="price">${this.props.price}</p>
                <button onClick={this.handleClick}>Add to Cart</button>
            </div>
        )
    }
}
