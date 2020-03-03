import React from 'react';
import { Switch, Route } from 'react-router-dom'
import './App.css';
import Form from './Components/Form'
import { withRouter } from 'react-router-dom'
import Search from './Components/Search'
import RestaurantCollection from './Components/RestaurantCollection'

class App extends React.Component {
    state = {
        user: {
            username: "",
            id: 0
        },
        token: "",
        searchTerm: "",
        restaurants: []
    }

   

    componentDidMount() {
        if (localStorage.token) {
            fetch(`http://localhost:4000/persist`, {
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
        fetch(`http://localhost:4000/login`, {
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
        fetch(`http://localhost:4000/users`, {
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
    render() {
        console.log(this.state.restaurants)
        let filteredRestaurantList = this.state.restaurants.filter(restaurant => {
            return restaurant.name.includes(this.state.searchTerm) || restaurant.categories.includes(this.state.searchTerm)
        }) ;
        
        return (
            <div className="App">
                <header className="App-header">
                    <Switch>
                        <Route path="/login" render={this.renderForm} />
                        <Route path="/register" render={this.renderForm} />
                        <Route path="/profile" render={this.renderProfile} />
                    </Switch>
                    <Search searchTerm={this.state.searchTerm} handleSearch={this.handleSearch} />
                    <RestaurantCollection restaurants={filteredRestaurantList} />
                </header>
            </div>
        );
    }
}
export default withRouter(App);
