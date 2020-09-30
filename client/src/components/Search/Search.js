import React, { useState } from 'react';
import { useStock } from '../../context/stock';
import axios from 'axios';
const API_KEY = 'Tsk_0f2bb5a7c1d34a188b3e4a52059822e0';

const Search = ({ setStocks, setIsLoading, setIsError }) => {
    const [keyword, setKeyword] = useState();

    const searchInputHandler = (e) => {
        setKeyword(e.target.value);
        console.log(keyword);
    }

    const getStocks = (e) => {
        e.preventDefault();

        setIsLoading(true);

        let options ={
            method: 'get',
            baseURL: 'https://sandbox.iexapis.com/stable',
            url: `/stock/${keyword}/quote`,
            params: new URLSearchParams({
                token: API_KEY,
            })
        }

        axios(options)
        .then(res => {
            let data = res.data;
            console.log(data);
            setStocks([data]);
            setIsLoading(false);
        })
        .catch(err => {
            setIsError('Stock not found, Please Try again');
        });

    }


    return (
        <form className="trading__stockSearchForm" onSubmit={getStocks}>
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
