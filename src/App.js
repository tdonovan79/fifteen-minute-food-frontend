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
class App extends React.Component {
    state = {
        user: {
            username: "",
            id: 0
        },
        token: "",
        selectedRest: "",
        itemsInCart: []
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

    handleCurrentUser = (newUsername) => {
        this.setState({
            username: newUsername
        })
    }
    
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
        return (
            <div className="App">
                <NavBar />
                <header className="App-header">
                    <Switch>
                        <Route path="/login" render={() => <FormContainer handleCurrentUser={this.handleCurrentUser} />} />
                        <Route path="/register" render={() => <RegisterFormContainer handleCurrentUser={this.handleCurrentUser} />} />
                        <Route path="/profile" render={() => <ProfileContainer username={localStorage.username} />} />
                        <Route path="/cart" render={() => <CartContainer onDeleteItem={this.onDeleteItem} itemsInCart={this.state.itemsInCart} />} />
                        <Route path="/checkout" render={() => <CheckOutContainer itemsInCart={this.state.itemsInCart} />} />
                        <Route path='/search' render={() => <SearchContainer selectRest={this.selectRest} />} />
                        <Route path='/restaurant' render={() => <RestaurantContainer restId={this.state.selectedRest} addItemToCart={this.addItemToCart} />} />
                    </Switch>
                </header>
            </div>
        );
    }
}
export default withRouter(App);



