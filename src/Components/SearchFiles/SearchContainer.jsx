import React from 'react';
import Search from './Search'
import RestaurantCollection from './RestaurantCollection'



export default class SearchContainer extends React.Component {
    state = {
        searchTerm: "",
        restaurants: [],
    }


    handleSearch = (string) => {
        this.setState({
        searchTerm: string
        })

        fetch(`http://localhost:3000/yelp_api_adapter/search?term=${string}`)
        .then(r => r.json())
        .then(data => {
            this.setState({
                restaurants: data
            })
        });
    }


    
    render() {
        return (
            <div className="search-container">
                <Search handleSearch={this.handleSearch} searchTerm={this.state.searchTerm} />
                <RestaurantCollection restaurants={this.props.restaurants} selectRest={this.props.selectRest}/>
                {/* <RestaurantCard restaurants={this.props.restaurants}/> */}
            </div>
               
        )
    }
}

