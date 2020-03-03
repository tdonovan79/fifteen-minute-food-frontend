import React from 'react';
<<<<<<< HEAD
=======
import { Switch, Route} from 'react-router-dom'
>>>>>>> 1c641eb8a547545f1406cff8a0b439082720ed51
import './App.css';
import { Switch, Route} from 'react-router-dom'
import FormContainer from './Containers/FormContainer.js'
import NavBar from './Components/NavBar'
import { withRouter } from 'react-router-dom'
import CartContainer from './Containers/CartContainer.js'
import CheckOutContainer from './Containers/CheckOutContainer.js'
import RestaurantContainer from './Containers/RestaurantContainer.js'
// import { Router, Route } from 'react-router';
import SearchContainer from './Components/SearchFiles/SearchContainer.jsx'
<<<<<<< HEAD
import { NavLink } from 'react-router-dom';
=======
>>>>>>> 1c641eb8a547545f1406cff8a0b439082720ed51


class App extends React.Component {
    state = {
        user: {
            username: "",
            id: 0
        },
        token: "",
<<<<<<< HEAD
        itemsInCart: [{ id: 0, name: "burger", price: 12 }, { id: 1, name: "pizza", price: 45 }]
=======
        selectedRest: "",
        itemsInCart: []
>>>>>>> 1c641eb8a547545f1406cff8a0b439082720ed51
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

<<<<<<< HEAD
       
=======
        fetch(`http://localhost:3000/yelp_api_adapter/search?term=${this.state.searchTerm}`)
            .then(r => r.json())
            .then(data => {
                this.setState({
                    restaurants: data
                })
            });
>>>>>>> 1c641eb8a547545f1406cff8a0b439082720ed51
    }

    handleResponse = (response) => {
        if (response.user) {
            localStorage.token = response.token
            this.setState(response, () => {
                this.props.history.push("/profile")
            })
        }
    }

<<<<<<< HEAD
    handleRegisterSubmit = (newUser) => {
        console.log(newUser)
        fetch(`http://localhost:3000/users`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newUser)
        })
        // fetch("http://localhost:3000/yelp_api_adapter/search")
        //     .then(r => r.json())
        //     .then((data) => {
        //         this.setState({
        //             restaurants: data
        //         })
        //     });
    }
    
=======
    // handleLoginSubmit = (logUser) => {
    //     console.log(logUser)
    //     fetch(`http://localhost:3000/login`, {
    //         method: "POST",
    //         headers: {
    //             "content-type": "application/json"
    //         },
    //         body: JSON.stringify(logUser)
    //     })
    //         .then(r => r.json())
    //         .then(this.handleResponse)
    // }

    // handleRegisterSubmit = (newUser) => {
    //     console.log(newUser)
    //     fetch(`http://localhost:3000/users`, {
    //         method: "POST",
    //         headers: {
    //             "content-type": "application/json"
    //         },
    //         body: JSON.stringify(newUser)
    //     })
    //     fetch("http://localhost:3000/yelp_api_adapter/search")
    //         .then(r => r.json())
    //         .then((data) => {
    //             this.setState({
    //                 restaurants: data
    //             })
    //         });
    // }

>>>>>>> 1c641eb8a547545f1406cff8a0b439082720ed51

    // handleSearch = (string) => {
    //     this.setState({
    //         searchTerm: string
    //     })
    // }

    //change selected restaurant
    selectRest = newRestId => {
        this.setState({
            selectedRest: newRestId
        })
    }
    //adds item to cart
    addItemToCart = newItem => {
        this.setState({
            itemsInCart: [...this.state.itemsInCart, newItem]
        })
    }

    render() {
<<<<<<< HEAD
     
        // let filteredRestaurantList = this.state.restaurants.filter(restaurant => {
            // return restaurant.name.includes(this.state.searchTerm) || restaurant.categories.includes(this.state.searchTerm)
        // });
        return (
        <div className="App">
            <NavBar />
            <header className="App-header">
                <Switch>
                    <Route path="/login" render={() => <FormContainer />} />
                    {/* <Route path="/profile" render={this.renderProfile} /> */}
                    <Route path="/cart" render={() => <CartContainer onDeleteItem={this.onDeleteItem} itemsInCart={this.state.itemsInCart} />} />
                    <Route path="/checkout" render={() => <CheckOutContainer itemsInCart={this.state.itemsInCart} />} />
                    <Route path='/restaurants' render={() => <SearchContainer/>} />
                </Switch>
            </header>

        </div>
                
                       
                
                   

=======
        // let filteredRestaurantList = this.state.restaurants.filter(restaurant => {
        //     return restaurant.name.includes(this.state.searchTerm) || restaurant.categories.includes(this.state.searchTerm)
        // });
        return (
            <div className="App">
                <NavBar />
                <header className="App-header">
                    <Switch>
                        <Route path="/login" render={() => <FormContainer />} />
                        {/* <Route path="/profile" render={this.renderProfile} /> */}
                        <Route path="/cart" render={() => <CartContainer onDeleteItem={this.onDeleteItem} itemsInCart={this.state.itemsInCart} />} />
                        <Route path="/checkout" render={() => <CheckOutContainer itemsInCart={this.state.itemsInCart} />} />
                        <Route path='/search' render={() => <SearchContainer searchTerm={this.state.searchTerm} handleSearch={this.handleSearch} restaurants={this.state.restaurants} selectRest={this.selectRest}/>} />
                        <Route path='/restaurant' render={() => <RestaurantContainer restId={this.state.selectedRest} addItemToCart={this.addItemToCart}/>} />
                    </Switch>
                </header>

            </div>
>>>>>>> 1c641eb8a547545f1406cff8a0b439082720ed51
        );
    }
}

export default withRouter(App);
