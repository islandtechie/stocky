import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Trading.css';

import UserInfo from '../../components/UserInfo/UserInfo';
import Search from '../../components/Search/Search';
import Stocks from '../../components/Stocks/Stocks';
import Modal from '../../components/Modal/Modal';



const Trader = ( props ) => {

    const [userInfo, setUserInfo] = useState({ balance: 100000, owned: 100 });
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
     const [errorMessage, setErrorMessage] = useState('');
    const [stocks, setStocks] = useState();
    const [stockInfo, setStockInfo] = useState({
        price: 0, 
        symbol: ''
    });
    const [isModalActive, setIsModalActive] = useState(false);

    const buyNowButtonHandler = (price, symbol) => {
        console.log(price, symbol);
        let data = new FormData();
        data.append('price', price);
        data.append('symbol', symbol);

        axios.post('http://127.0.0.1:5000/buy-stock', data)
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });

    }

    const showModal = (price, symbol) => {
        setIsModalActive(true);
        setStockInfo({
            price: price, 
            symbol: symbol
        });
    }

    const cancelButtonHandler = () => {
        setIsModalActive(false)
    }

    return (
            <div className="trading">
                <Modal
                    stock={stockInfo}
                    active={isModalActive} 
                    cancel={cancelButtonHandler} 
                    buy={buyNowButtonHandler}
                />
                <UserInfo user={userInfo}/>
                <Search 
                    setStocks={setStocks} 
                    setIsLoading={setIsLoading} 
                    setIsError={setIsError}
                />
                <Stocks 
                    stocks={stocks}
                    isLoading={isLoading}
                    showModal={showModal}
                />
            </div>
    )
}

export default Trader;
