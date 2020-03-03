import React from 'react'

export default class RestaurantCard extends React.Component {
    render() {
        //fill out with the rest of the restaurant info
        let restObj = this.props.restaurant
        return (
            <div className="card-container" >
                <div className="image">
                    <img src={restObj.image_url} alt={restObj.name} />
                </div>
                <div className="restaurant-name">
                    {restObj.name}
                </div>
                <div className="restaurant-category">
                    {restObj.category} 
                </div> 
            </div>
        )
    }
}