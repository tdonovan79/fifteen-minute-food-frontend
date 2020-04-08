import React from 'react';
import { Switch, Route } from 'react-router-dom'
import './App.css';
import RegisterFormContainer from './Containers/RegisterFormContainer.js'
import FormContainer from './Containers/FormContainer.js'
import NavBar from './Components/NavBar'
import { withRouter } from 'react-router-dom'
import CartContainer from './Containers/CartContainer.js'
import CheckOutContainer from './Containers/CheckOutContainer.js'
import RestaurantContainer from './Containers/RestaurantContainer.js'
import ProfileContainer from './Containers/ProfileContainer.js'
import SearchContainer from './Components/SearchFiles/SearchContainer.jsx'
import ConfirmationContainer from './Containers/ConfirmationContainer.js'
class App extends React.Component {
    state = {
        user: {
            username: "",
            id: 0
        },
        token: "",
        selectRest: {
            id: "",
            name: "",
            location: "",
            category: "",
            phone_number: "",
            address: "",
            image_url: ""
        },
        itemsInCart: []
    }


    //delete item by id passed up from CartItem
    onDeleteItem = (itemName) => {
        let deleteIndex = this.state.itemsInCart.findIndex(item => item.name === itemName)
        let newItemList = this.state.itemsInCart.slice()
        newItemList.splice(deleteIndex, 1)
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
    }

    handleResponse = (response) => {
        if (response.user) {
            localStorage.username = response.user.username
            localStorage.token = response.token
            this.setState(response, () => {
                this.props.history.push("/profile")
            })
        }
    }
    //set username to current user
    handleCurrentUser = (newUsername) => {
        this.setState({
            username: newUsername
        })
    }

    //change selected restaurant
    selectNewRest = (newRestId, newRestName, newLocation, newCategory, newPhoneNumber, newAddress, newImageUrl) => {
        this.setState({
            selectRest: {
                id: newRestId,
                name: newRestName,
                location: newLocation,
                category: newCategory,
                phone_number: newPhoneNumber,
                address: newAddress,
                image_url: newImageUrl
            }
        })
    }
    //adds item to cart
    addItemToCart = newItem => {
        this.setState({
            itemsInCart: [...this.state.itemsInCart, newItem]
        })
    }
    //wipe cart and seleted restaurants
    clearCart = () => {
        this.setState({
            selectRest: {
                id: "",
                name: "",
                location: "",
            category: "",
            phone_number: "",
            address: "",
            image_url: ""
            },
            itemsInCart: []
        })
    }


    render() {
        return (
            <div className="App">
                <NavBar />
                <header className="App-header">
                    <Switch>
                        <Route path="/login" render={() => <FormContainer handleCurrentUser={this.handleCurrentUser} />} />
                        <Route path="/register" render={() => <RegisterFormContainer handleCurrentUser={this.handleCurrentUser} />} />
                        <Route path="/profile" render={() => <ProfileContainer username={localStorage.username} />} />
                        <Route path="/cart" render={() => <CartContainer onDeleteItem={this.onDeleteItem} itemsInCart={this.state.itemsInCart} selectRest={this.state.selectRest} />} />
                        <Route path="/checkout" render={() => <CheckOutContainer  username={localStorage.username} itemsInCart={this.state.itemsInCart} selectRest={this.state.selectRest} clearCart={this.clearCart} />} />
                        <Route path='/search' render={() => <SearchContainer selectNewRest={this.selectNewRest} cartIsEmpty={this.state.itemsInCart.length === 0} selectRestName={this.state.selectRest.name}/>} />
                        <Route path='/restaurant' render={() => <RestaurantContainer selectRest={this.state.selectRest} addItemToCart={this.addItemToCart} />} />
                        <Route path='/confirmation' render={() => <ConfirmationContainer selectRest={this.state.selectRest} selectRest={this.selectRest} itemsInCart={this.itemsInCart} />} />
                    </Switch>
                </header>
            </div>
        );
    }
}
export default withRouter(App);



