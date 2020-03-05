import React from 'react'
import { Redirect } from 'react-router-dom'

export default class RestaurantCard extends React.Component {
    state = {
        redirect: false
    }

    handleNav = () => {
        if (!this.props.cartIsEmpty && this.props.restaurant.name !== this.props.selectRestName) {
            alert("Please place your order or empty your cart!")
        }
        else {
            this.props.selectNewRest(this.props.restaurant.id,
                this.props.restaurant.name,
                this.props.restaurant.location.city,
                this.props.restaurant.categories[0].title,
                this.props.restaurant.phone,
                this.props.restaurant.location.address1,
                this.props.restaurant.image_url)
            this.setState({
                redirect: true
            })
        }

    }


    render() {
        //fill out with the rest of the restaurant info
        let restObj = this.props.restaurant
        return (
            <div className="card-container" >
                <div className="top-card">
                    <div>
                        <img src={restObj.image_url} alt={restObj.name} />
                    </div>

                    <div>
                        <p>{restObj.name}</p><br />
                    </div>
                    <div>
                        <p>{restObj.categories[0].title} </p>
                    </div>
                    <div>
                        <p>{restObj.price}</p><br />
                    </div>
                </div>
                <div className="bottom-card">
                    <div>
                        <p>{restObj.location.address1}</p><br />
                    </div>
                    <div>
                        <p>Rating: {restObj.rating}</p><br />
                    </div>
                    <div>
                        <p>{restObj.display_phone}</p><br />
                    </div>
                    <div>
                        {restObj.is_closed ? <h2>HAHA WE CLOSED</h2> : <button onClick={this.handleNav}>Go to Restaurant</button>}
                    </div>
                </div>
                {
                    this.state.redirect ?
                        <Redirect push to='/restaurant' />
                        :
                        <p></p>
                }

            </div>
        )
    }
}