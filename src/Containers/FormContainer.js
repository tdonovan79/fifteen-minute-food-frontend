import React, {Component} from 'react';
import { Redirect } from 'react-router-dom'

export default class FormContainer extends Component {

    state = {
        username: "",
        password: "",
        redirect: false,
        token: ""
    }
    //controlled form
    handleChange = (e) => {
        console.log(this.state)
        let { name, value } = e.target
        this.setState({
            [name]: value
        })
    }
    //on submit auth user in backend

    handleLoginSubmit = (logUser) => {
        logUser.preventDefault()
        console.log(this.state)
        fetch(`http://localhost:3000/login`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(this.state)
        })
            .then(r => r.json())
            .then(this.handleResponse)
    }


    handleRegisterSubmit = (newUser) => {
        newUser.preventDefault()
        console.log(this.state)
        fetch(`http://localhost:3000/users`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(this.state)
        })
        .then(r => r.json())
        .then(this.handleResponse)
    }



    //on response set page to profile page
    handleResponse = (response) => {
        if (response.user) {
            localStorage.token = response.token
            localStorage.username = response.user.username
            this.props.handleCurrentUser(localStorage.username)
            this.setState({
                username: this.state.username,
                password: this.state.password,
                token: response.token,
                redirect: true
            })
        }
        else {
            alert(response.error)
          }
    }

    render() {
        // let { formName } = this.props
        let { username, password } = this.state
    
        return (
            <div>
            <form onSubmit={this.handleLoginSubmit} >
                <h1>Login</h1>
                <label htmlFor="username">Username:</label>
                <input type="text" name="username" value={username} onChange={this.handleChange} />
                <label htmlFor="password">Password:</label>
                <input type="password" name="password" value={password} onChange={this.handleChange} />
                <input type="submit" value="Submit" />
            </form>
            <form onSubmit={this.handleRegisterSubmit} >
              <h1>Register</h1>
              <label htmlFor="username">Username:</label>
              <input type="text" name="username" value={username} onChange={this.handleChange} />
              <label htmlFor="password">Password:</label>
              <input type="password" name="password" value={password} onChange={this.handleChange} />
              <input type="submit" value="Submit" />
            </form>
            {
                this.state.redirect ? 
                <Redirect push to="/profile" />
                :
                <p></p>
            }
            </div>
        )
    }
}