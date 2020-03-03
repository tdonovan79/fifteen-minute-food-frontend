import React from 'react'
import RestaurantCard from './RestaurantCard'

export default class RestaurantCollection extends React.Component {

    render() {

        let arrayOfRestaurants = this.props.restaurants.map(restaurant => {
            return <RestaurantCard key={restaurant.id} restaurant={restaurant} />
        })
        
        return (
            <div className="restaurantColl">
                <h1>restaurant names will appear here</h1>
                {arrayOfRestaurants}
            </div>
        )
    }
}