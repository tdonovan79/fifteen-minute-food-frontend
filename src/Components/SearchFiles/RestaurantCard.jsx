import React from 'react'

export default class RestaurantCard extends React.Component {
    render() {
        //fill out with the rest of the restaurant info
        let restObj = this.props.restaurant
        console.log(restObj)
        return (
            <div className="card-container" >
                
                <div className="image">
                    <img src={restObj.image_url} alt={restObj.name} />
                </div>
                <div className="restaurant-name">
                    <p>{restObj.name}</p>
                </div>
                <div className="restaurant-category">
                    <p>{restObj.categories.title} </p>
                </div> 
                <div className="restaurant-price">
                    <p>{restObj.price}</p>
                </div>
                <div className="restaurant-location">
                    <p>{restObj.location.address1}</p>
                </div>
                <div className="restaurant-rating">
                    <p>{restObj.rating}</p>
                </div>
                <div className="restaurant-review-count">
                    <p>{restObj.review_count}</p>
                </div>
                <div className="restaurant-phone">
                    <p>{restObj.display_phone}</p>
                </div>
                <div className="restaurant-transactions">
                    <p>{restObj.transactions}</p>
                </div>
                <div className="restaurant-boolean">
                    <p>{restObj.is_closed ? <h2>HAHA WE CLOSED</h2> : <h2>OPEN</h2> }</p>
                </div>
            </div>
        )
    }
}