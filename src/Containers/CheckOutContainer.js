import React, { Component } from 'react'
import Payment from '../CheckoutComponents/Payment.js'


export default class CheckOutContainer extends Component {
    //return sum of prices all items in cart
    findSubtotal = () => {
        return this.props.itemsInCart.reduce((a, b) => a + (b['price'] || 0), 0).toFixed(2)
    }
    //apply 8.875% tax to subtotal
    findTotal = () => {
        return (this.findSubtotal() * 1.08875).toFixed(2)
    }
    render() {
        return (
            <div>
                <h1>Checkout</h1>
                <div className="totals">
                    <p>Subtotal: ${this.findSubtotal()}</p>
                    <p>Tax: 8.875%</p>
                    <p>Total: ${this.findTotal()}</p>
                </div>
                <Payment total={this.findTotal()}/>
            </div>
        )
    }
}
