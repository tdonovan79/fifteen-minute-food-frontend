import React, { Component } from 'react'
import RestaurantCard from '../Components/SearchFiles/RestaurantCard.jsx'

export default class RestaurantContainer extends Component {
    state = {
        restObj: {
            id: null,
            image_url: "",
            name: "",
            categories: {
                title: ""
            },
            price: "",
            location: {
                address1: ""
            },
            rating: "",
            review_count: 0,
            display_phone: "",
            transactions: "",
            isclosed: false
        }
    }


    componentDidMount() {
        fetch(`http://localhost:3000/yelp_api_adapter/info?business_id=${this.props.restId}`)
            .then(r => r.json())
            .then(data => {
                this.setState({
                    restObj: data
                })
            });
    }
    render() {
        console.log(this.state)
        return (
            <div>
                <div className="card-container" >

                    <div className="image">
                        <img src={this.state.restObj.image_url} alt={this.state.restObj.name} />
                    </div>
                    <div className="restaurant-name">
                        <p>{this.state.restObj.name}</p>
                    </div>
                    <div className="restaurant-category">
                        <p>{this.state.restObj.categories.title} </p>
                    </div>
                    <div className="restaurant-price">
                        <p>{this.state.restObj.price}</p>
                    </div>
                    <div className="restaurant-location">
                        <p>{this.state.restObj.location.address1}</p>
                    </div>
                    <div className="restaurant-rating">
                        <p>{this.state.restObj.rating}</p>
                    </div>
                    <div className="restaurant-review-count">
                        <p>{this.state.restObj.review_count}</p>
                    </div>
                    <div className="restaurant-phone">
                        <p>{this.state.restObj.display_phone}</p>
                    </div>
                    <div className="restaurant-transactions">
                        <p>{this.state.restObj.transactions}</p>
                    </div>
                    <div className="restaurant-boolean">
                        <p>{this.state.restObj.is_closed ? <h2>HAHA WE CLOSED</h2> : <h2>OPEN</h2>}</p>
                    </div>
                </div>
            </div>
        )
    }
}
