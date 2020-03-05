import React, { Component } from 'react'
import CartItem from '../CartComponents/CartItem.js'
import { NavLink } from 'react-router-dom'

export default class CartContainer extends Component {
    state = {

    }

    //return sum of prices all items in cart
    findSubtotal = () => {
        return this.props.itemsInCart.reduce((a, b) => a + (b['price'] || 0), 0).toFixed(2)
    }
    //apply 8.875% tax to subtotal
    findTotal = () => {
        return (this.findSubtotal() * 1.08875).toFixed(2)
    }


    render() {
        console.log(this.props.itemsInCart)
        return (
            <div className="container">
                <h1>My Cart</h1>
                {
                    this.props.itemsInCart.length !== 0 ?
                        <div>
                            <h2>{this.props.selectRest.name}</h2>
                            <div className="cart">
                                {this.props.itemsInCart.map(item => {
                                    return <CartItem id={item.id} name={item.name} price={item.price} onDeleteItem={this.props.onDeleteItem} />
                                })}
                            </div>
                            <div className="totals">
                                <p>Subtotal: ${this.findSubtotal()}</p>
                                <p>Tax: 8.875%</p>
                                <p>Total: ${this.findTotal()}</p>
                            </div>

                            <NavLink to="/checkout">Checkout</NavLink>
                        </div>
                        :
                        <p>Cart is empty.</p>
                }
            </div>
        )
    }
}
