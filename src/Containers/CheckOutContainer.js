import React, { Component } from 'react'
import Payment from '../CheckoutComponents/Payment.js'
import { Redirect } from 'react-router-dom'


export default class CheckOutContainer extends Component {
    state = {
        redirect: false
    }
    //return sum of prices all items in cart
    findSubtotal = () => {
        return this.props.itemsInCart.reduce((a, b) => a + (b['price'] || 0), 0).toFixed(2)
    }
    //apply 8.875% tax to subtotal
    findTotal = () => {
        return (this.findSubtotal() * 1.08875).toFixed(2)
    }
    //after payment processed save data to backend and redirect to confirmation
    afterPayment = () => {
        let saleData = {
            rest: this.props.selectRest,
            items: this.props.itemsInCart
        }
        //fetches
        fetch('localhost:3000/sales', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(saleData)
        })
            .then(r => r.json())
            .then(() =>
            {
                //clear cart
                this.props.clearCart()
                //redirect to confirmation page
                this.setState({
                    redirect: true
                })
            })

    }
    render() {
        console.log(this.props.selectRest)
        return (
            <div>
                <h1>Checkout</h1>
                <h2>{this.props.selectRest.name}</h2>
                <div className="totals">
                    <p>Subtotal: ${this.findSubtotal()}</p>
                    <p>Tax: 8.875%</p>
                    <p>Total: ${this.findTotal()}</p>
                </div>
                <Payment total={this.findTotal()} afterPayment={this.afterPayment} />
                {
                    this.state.redirect ?
                        <Redirect push to='/confirmation' />
                        :
                        <p></p>
                }
            </div>
        )
    }
}
