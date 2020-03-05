import React from 'react';
import Search from './Search'
import RestaurantCollection from './RestaurantCollection'



export default class SearchContainer extends React.Component {
    state = {
        searchTerm: "",
        restaurants: [],
    }

    //set state when search input changes
    handleSearchTerm = (string) => {
        this.setState({
            searchTerm: string
        })
    }
    //perform search through yelp api
    handleSearch = () => {
        const search = this.state.searchTerm
        fetch(`http://localhost:3000/yelp_api_adapter/search?term=${search}`)
            .then(r => r.json())
            .then(data => {
                this.setState({
                    restaurants: data
                })
            });
            console.log(this.state)
    }


    render() {
        return (
            <div className="container">
                <Search searchTerm={this.state.searchTerm} handleSearchTerm={this.handleSearchTerm} handleSearch={this.handleSearch}/>
                <RestaurantCollection restaurants={this.state.restaurants} selectNewRest={this.props.selectNewRest} cartIsEmpty={this.props.cartIsEmpty} selectRestName={this.props.selectRestName} />
            </div>

        )
    }
}

