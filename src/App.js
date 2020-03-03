import React from 'react';
import { Switch, Route } from 'react-router-dom'
import './App.css';
import FormContainer from './Containers/FormContainer.js'
import NavBar from './Components/NavBar'
import { withRouter } from 'react-router-dom'
import CartContainer from './Containers/CartContainer.js'
import CheckOutContainer from './Containers/CheckOutContainer.js'
// import { Router, Route } from 'react-router';
import RestaurantCollection from './Components/RestaurantCollection'
import Search from './Components/Search'


class App extends React.Component {
    state = {
        user: {
            username: "",
            id: 0
        },
        token: "",
        searchTerm: "",
        restaurants: [],
        itemsInCart: [{ id: 0, name: "burger", price: 12 }, { id: 1, name: "pizza", price: 45 }]
    }


    //delete item by id passed up from CartItem
    onDeleteItem = (itemId) => {
        let newItemList = this.state.itemsInCart.filter(item => {
            return item.id != itemId
        })
        this.setState({
            itemsInCart: newItemList
        })
    }



    componentDidMount() {
        if (localStorage.token) {
            fetch(`http://localhost:3000/persist`, {
                headers: {
                    'Authorization': `Bearer ${localStorage.token}`
                }
            })
                .then(r => r.json())
                .then(this.handleResponse)
        }

        fetch("http://localhost:3000/yelp_api_adapter/search")
            .then(r => r.json())
            .then((data) => {
                this.setState({
                    restaurants: data
                })
            });
    }
    

    handleSearch = (string) => {
        this.setState({
            searchTerm: string
        })
    }

    render() {
        console.log(this.state.restaurants)
        let filteredRestaurantList = this.state.restaurants.filter(restaurant => {
            return restaurant.name.includes(this.state.searchTerm) || restaurant.categories.includes(this.state.searchTerm)
        });

        return (
            <div className="App">
                <NavBar />
                <header className="App-header">
                    <Switch>
                        <Route path="/login" render={() => <FormContainer/>} />
                        {/* <Route path="/profile" render={this.renderProfile} /> */}
                        <Route path="/cart" render={() => <CartContainer onDeleteItem={this.onDeleteItem} itemsInCart={this.state.itemsInCart}/>} />
                        <Route path="/checkout" render={() => <CheckOutContainer itemsInCart={this.state.itemsInCart}/>}/>
                    </Switch>
                    {/* <Search searchTerm={this.state.searchTerm} handleSearch={this.handleSearch} />
                    <RestaurantCollection restaurants={filteredRestaurantList} /> */}
                </header>

            </div>
        );
    }
}

export default withRouter(App);
