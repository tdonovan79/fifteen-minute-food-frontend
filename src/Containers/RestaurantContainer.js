import React, { Component } from 'react'
import MenuContainer from '../RestaurantComponents/MenuContainer.js'
import menu from '../menuItems.json'

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

    //fetch restaurant info from yelp api
    componentDidMount() {
        fetch(`http://localhost:3000/yelp_api_adapter/info?business_id=${this.props.selectRest.id}`)
            .then(r => r.json())
            .then(data => {
                this.setState({
                    restObj: data
                })
            });
    }
    
    render() {
        console.log("menu", menu)
        return (
            <div className="container">
                <div className="image">
                    <img src={this.state.restObj.image_url} alt={this.state.restObj.name} />
                </div>
                <div className="restaurant-name">
                    <p>{this.state.restObj.name}</p>
                </div>

                <MenuContainer menu={menu} addItemToCart={this.props.addItemToCart}/>
            </div>
        )
    }
}
