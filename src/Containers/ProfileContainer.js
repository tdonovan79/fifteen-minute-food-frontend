import React from 'react';

export default class Profile extends React.Component {

  state = {
    sales: []
  }

  componentDidMount() {
    fetch(`http://localhost:3000/userSales`, {
      method: "PUT",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({
        username: this.props.username
      })
    })
      .then(r => r.json())
      .then(purchases => this.setState({
        sales: purchases
      }))
  }



  render() {
    console.log(this.state.sales)
    return (
      <div className="container">
        <h1>Hello, {this.props.username}!</h1>
        <h3>Past Orders: </h3>
        <ul>
          {this.state.sales.map(sale => {
            return <li>
              {sale.restaurant.name}
               - 
              {sale.nice_timestamp_for_grandma}
              <ul>
                {sale.food_items.map(item => {
                  return <li className="past_order_list">
                    Item: {item.name}
                  </li>
                })}</ul></li>
          })}
        </ul>
      </div>
    )
  }
}

