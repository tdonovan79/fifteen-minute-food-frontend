import React, {Component} from 'react';

export default class FormContainer extends Component {

    state = {
        username: "",
        password: ""
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
    handleSubmit = (e) => {
        e.preventDefault()
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
            this.setState(response, () => {
                this.props.history.push("/profile")
            })
        }
    }
    render() {
        // let { formName } = this.props
        let { username, password } = this.state

        return (
            <form onSubmit={this.handleSubmit}>
                <h1>Login</h1>
                <label htmlFor="username">Username:</label>
                <input type="text" name="username" value={username} onChange={this.handleChange} />
                <label htmlFor="password">Password:</label>
                <input type="password" name="password" value={password} onChange={this.handleChange} />
                <input type="submit" value="Submit" />
            </form>
        )
    }
}