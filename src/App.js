import React from 'react';
import { Switch, Route } from 'react-router-dom'
import './App.css';
import Form from './Components/Form'
import NavBar from './Components/NavBar'
import { withRouter } from 'react-router-dom'
import CartPage from './Orders/CartPage.js'
import CheckOut from './Orders/CheckOut.js'
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
            return item.id !== itemId
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


    handleResponse = (response) => {
        if (response.user) {
            localStorage.token = response.token
            this.setState(response, () => {
                this.props.history.push("/profile")
            })
        }
      }


    handleLoginSubmit = (logUser) => {
        console.log(logUser)
        fetch(`http://localhost:3000/login`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(logUser)
        })
            .then(r => r.json())
            .then(this.handleResponse)
    }


    handleRegisterSubmit = (newUser) => {
        console.log(newUser)
        fetch(`http://localhost:3000/users`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newUser)
        })
            .then(r => r.json())
            .then(this.handleResponse)
    }

    handleSearch = (string) => {
        this.setState({
            searchTerm: string
        })
    }
    renderForm = (route) => {
        if (route.location.pathname === "/login") {
            return <Form formName="Login Form" handleSubmit={this.handleLoginSubmit} />
        } else if (route.location.pathname === "/register") {
            return <Form formName="Register Form" handleSubmit={this.handleRegisterSubmit} />
        }
    }
    //render cart
    renderCartPage = () => {
        return <CartPage onDeleteItem={this.onDeleteItem} itemsInCart={this.state.itemsInCart}/>
    }
    //render checkout
    renderCheckout = () => {
        return <CheckOut itemsInCart={this.state.itemsInCart}/>
    }
    render() {
        console.log(this.state.restaurants)
        let filteredRestaurantList = this.state.restaurants.filter(restaurant => {
            return restaurant.name.includes(this.state.searchTerm) || restaurant.categories.includes(this.state.searchTerm)
        }) ;
        
        return (
            <div className="App">
                <header className="App-header">
                    <Switch>
                        <NavBar/>
                        <Route path="/login" render={this.renderForm} />
                        <Route path="/register" render={this.renderForm} />
                        <Route path="/profile" render={this.renderProfile} />
                        <Route path="/cart" render={this.renderCartPage}/>
                        <Route path="/checkout" render={this.renderCheckout}/>
                    </Switch>
                    <Search searchTerm={this.state.searchTerm} handleSearch={this.handleSearch} />
                    <RestaurantCollection restaurants={filteredRestaurantList} />
                </header>
                
            </div>
        );
    }
  }

export default withRouter(App);




