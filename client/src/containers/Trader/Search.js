import React, { useState } from 'react';
import { useStock } from '../../context/stock';

const Search = () => {
    const [keyword, setKeyword] = useState();
    const { search } = useStock();

    const searchInputHandler = (e) => {
        setKeyword(e.target.value)
    }

    const searchStocks = (e) => {
        e.preventDefault();

        search(keyword);
    }

    return (
        <form className="trading__stockSearchForm" onSubmit={searchStocks}>
             <input 
                type="text" 
                className="trading__stockSearchInput" 
                name="stock-search" 
                id="stock-search" 
                placeholder="Search Stocks here" 
                aria-placeholder="Search Stocks here"
                onChange={searchInputHandler}
            />
            <button type="submit" className="trading__stockSearchButton">Search</button> 
        </form>
    )
}

export default Search;
