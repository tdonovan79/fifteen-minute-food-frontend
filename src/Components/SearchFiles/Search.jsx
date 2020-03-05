import React, { Component } from 'react'

export default class Search extends Component {

    helpWithChange = (event) => {
        this.props.handleSearchTerm(event.target.value)
    }

    helpWithSearch = (event) => {
        event.preventDefault()
        this.props.handleSearch()
    }
    render() {
        return (
            <div className="searchBar">
                <form onSubmit={this.helpWithSearch}>
                    <input type="text" onChange={this.helpWithChange} value={this.props.searchTerm} />
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        )
    }
}

