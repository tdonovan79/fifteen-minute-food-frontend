import React from 'react';
import { Switch, Route } from 'react-router-dom'
import './App.css';
import Form from './Components/Form'
import NavBar from './Components/NavBar'
import { withRouter } from 'react-router-dom'

class App extends React.Component {
  state = {
    user: {
      username: "",
      id: 0
    },
    token: ""
  }


  componentDidMount() {
    if (localStorage.token) {
      fetch("http://localhost:3000/persist", {
        headers: {
          'Authorization': `Bearer ${localStorage.token}`
        }
      })
        .then(r => r.json())
        .then(this.handleResponse)
    }
  }


  handleLoginSubmit = (logUser) => {
    console.log(logUser)
    fetch("http://localhost:3000/login", {
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
    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(newUser)
    })
      .then(r => r.json())
      .then(this.handleResponse)
  }


  handleResponse = (response) => {
    console.log(response.user)
    if (response.user) {
      localStorage.token = response.token
      this.setState(response, () => {
        this.props.history.push("/profile")
      })
    }
  }

  renderForm = (route) => {
    if (route.location.pathname === "/login") {
      return <Form formName="Login Form" handleSubmit={this.handleLoginSubmit} />
    } else if (route.location.pathname === "/register") {
      return <Form formName="Register Form" handleSubmit={this.handleRegisterSubmit} />
    }
  }


  render() {
    console.log(this.props)
    return (
      <div className="App">
        <header className="App-header">
          <NavBar/>
          <Switch>
            <Route path="/login" render={this.renderForm} />
            <Route path="/register" render={this.renderForm} />
            <Route path="/profile" render={this.renderProfile} />
            <Route path="/cart" render={this.renderCart} />
            {/* <Route render={ () => <p>Page not Found</p> } /> */}
          </Switch>
        </header>
      </div>
    );
  }
}

export default withRouter(App);
