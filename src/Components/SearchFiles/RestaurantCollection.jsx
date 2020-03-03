import React from 'react'
import RestaurantCard from './RestaurantCard'

export default class RestaurantCollection extends React.Component {

    render() {
        console.log(this.props.restaurant)
        let arrayOfRestaurants = this.props.restaurants.map(restaurant => {
            return <RestaurantCard key={restaurant.id} restaurant={restaurant} selectRest={this.props.selectRest} />
        })
        
        return (
            <div className="restaurantColl">
                {arrayOfRestaurants}
            </div>
        )
    }
}