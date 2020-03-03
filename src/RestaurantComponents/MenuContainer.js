import React, { Component } from 'react'
import MenuItem from './MenuItem.js'

export default class MenuContainer extends Component {
    render() {
        return (
            <div>
                {
                this.props.menu.map(menuItem => {
                    return <MenuItem name={menuItem.name} price={menuItem.price} addItemToCart={this.props.addItemToCart}/>
                })
                }
            </div>
        )
    }
}
