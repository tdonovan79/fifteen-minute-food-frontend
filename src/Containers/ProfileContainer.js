import React from 'react';

export default class Profile extends React.Component{

  render(){
    return (
      <h1>Hello, {this.props.username}!</h1>
    )
  }
}