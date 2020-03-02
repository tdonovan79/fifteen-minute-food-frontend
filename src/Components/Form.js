import React from 'react';

export default class Form extends React.Component {

  state = {
    username: "",
    password: ""
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.handleSubmit(this.state)
    .then(() => {
      this.setState({
        username: "",
        password: ""
      })
      // 14/16 let us clear out our username/password if someone is logged in. Better user experience
    })
  }

  handleChange = (e) => {
    let {name, value} = e.target
    this.setState({
      [name]: value
    })
  }

  render() {
    let {formName} = this.props
    let {username, password} = this.state

    return(
      <form onSubmit={this.handleSubmit}>
        <h1>{formName}</h1>
        <label htmlFor="username">Username:</label>
        <input type="text" name="username" value={username} onChange={this.handleChange}/>
        <label htmlFor="password">Password:</label>
        <input type="password" name="password" value={password} onChange={this.handleChange}/>
        <input type="submit" value="Submit"/>
      </form>
    )

  }

}
