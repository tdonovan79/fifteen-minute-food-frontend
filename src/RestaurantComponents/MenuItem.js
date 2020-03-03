import React, { Component } from 'react'

export default class MenuItem extends Component {

    handleClick = () => {
        this.props.addItemToCart(this.props)
    }
    render() {
        return (
            <div>
                <h6>{this.props.name}</h6>
                <p>{this.props.price}</p>
                <button onClick={this.handleClick}>Add to Cart</button>
            </div>
        )
    }
}
