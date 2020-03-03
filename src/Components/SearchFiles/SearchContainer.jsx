import React from 'react';
import Search from './Search'
import RestaurantCollection from './RestaurantCollection'
import RestaurantCard from './RestaurantCard';

export default class SearchContainer extends React.Component {
    

    render() {
        return (
            <div className="search-container">
                <Search />
                <RestaurantCollection restaurants={this.props.restaurants} selectRest={this.props.selectRest}/>
                {/* <RestaurantCard restaurants={this.props.restaurants}/> */}
            </div>
        )
    }
}

