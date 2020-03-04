import React, { Component } from 'react'

export default class CartItem extends Component {
    onDeleteClick = () => {
        this.props.onDeleteItem(this.props.id)
    }


    render() {
        return (
            <div className="cartItemContainer">
                <p>{this.props.name}: {this.props.price}</p>
                <button onClick={this.onDeleteClick}>Remove</button>
            </div>
        )
    }
}
