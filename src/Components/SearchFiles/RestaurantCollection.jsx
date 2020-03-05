import React from 'react'
import RestaurantCard from './RestaurantCard'

export default class RestaurantCollection extends React.Component {

    render() {
        let arrayOfRestaurants = this.props.restaurants.map(restaurant => {
            return <RestaurantCard key={restaurant.id} restaurant={restaurant} selectNewRest={this.props.selectNewRest} cartIsEmpty={this.props.cartIsEmpty} selectRestName={this.props.selectRestName}/>
        })
        
        return (
            <div  className="container">
                {arrayOfRestaurants}
            </div>
        )
    }
}