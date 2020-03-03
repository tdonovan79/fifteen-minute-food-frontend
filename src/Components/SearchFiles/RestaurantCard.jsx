import React from 'react'

export default class RestaurantCard extends React.Component {


    state = {
        redirect: false
    }

    handleNav = () => {
        this.props.selectRest(this.props.restaurant.id)
        this.setState({
            redirect: true
        })
    }

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
                    {restObj.categories.title} 
                </div> 
                <div className="restaurant-price">
                    {restObj.price} 
                </div>
                <div className="restaurant-location">
                    {restObj.location.address1} 
                </div>
                <div className="restaurant-rating">
                    {restObj.rating}
                </div>
                <div className="restaurant-review-count">
                    {restObj.review_count}
                </div>
                <div className="restaurant-phone">
                    {restObj.display_phone}
                </div>
                <div className="restaurant-transactions">
                    {restObj.transactions}
                </div>
                <div className="restaurant-boolean">
                    {restObj.is_closed ? <h2>HAHA WE CLOSED</h2> : <h2>OPEN</h2> }
                </div>
            </div>
        )
    }
}