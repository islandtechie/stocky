import React, { useState } from 'react';
import axios from 'axios';
import './Trading.css';
import UserInfo from '../../components/UserInfo/UserInfo';
import Stocks from '../../components/Stocks/Stocks';
import Stock from '../../components/Stock/Stock';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

const Trader = ( props ) => {
    const [stocks, setStocks] = useState('Start a Search to begin Trading.');
    const [keyword, setKeyword] = useState();
    const API_KEY = 'Tsk_0f2bb5a7c1d34a188b3e4a52059822e0';

    const searchInputHandler = (e) => {
        setKeyword(e.target.value)
    }

    const getStocks = (e) => {
        e.preventDefault();
        setStocks('Loading...');

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
            let stock = res.data;
            console.log(stock);
                setStocks(<Stock 
                    key={stock.symbol} 
                    stock={stock} 
                    buy={() => buyButtonHandler(stock.symbol, stock.latestPrice)} 
                />
                );

            // setStocks(data.map((stock) => (
            //     <Stock 
            //     key={stock.symbol} 
            //     stock={stock} 
            //     buy={() => buyButtonHandler(stock.id)} 
            //     sell={() => sellButtonHandler(stock.id)} 
            // />
            // )));
        })
        .catch(err => {
            setStocks('Stock not found, Please Try again');
        });

    }

    const buyButtonHandler = (symbol, price) => {
        console.log('symbol', symbol);
        console.log('price', price);
    }

    const sellButtonHandler = (id) => {
        console.log('sell button clicked', id);
    }
    return (
    <div className="trading">
        <UserInfo />
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
        <Stocks>
            {stocks}
        </Stocks>
            
    </div>
)
}

export default Trader;
