import React, { Component } from 'react';
import Payment from './Payment.js';


const API = "http://localhost:3000/sushis"

class App extends Component {

    render(){
        return(<Payment/>)
    }
}


export default withRouter(App);
