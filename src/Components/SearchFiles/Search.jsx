import React from 'react'

const Search = (props) => {
    
    const helpWithChange = (event) => {
        props.handleSearch(event.target.value)
    }

    return (
        <div className="searchBar">
            <input onChange={helpWithChange} value={props.searchTerm} />
        </div>
    )

}

export default Search;