import React, { Children, useState } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';
import './Trading.css';
import Home from './Home';
import Stock from '../../components/Stock/Stock';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { useAuth } from '../../context/auth';
import { useStock, StockContext } from '../../context/stock';

const API_KEY = 'Tsk_0f2bb5a7c1d34a188b3e4a52059822e0';

const Trader = ( props ) => {
   const [userInfo, setUserInfo] = useState(
    {
        balance: 100000,
        stocks_owned: 100
    }
   );

   const [stocks, setStocks] = useState();
   const [isLoading, setIsLoading] = useState(false);
   const [isError, setIsError] = useState(false);
   const [errorMessage, setErrorMessage] = useState('');

   const getUserInfo = () => {
       setUserInfo(prevUserInfo => [
        ...prevUserInfo,
        {
          balance: 100000,
          stocks_owned: 100
        }
      ])
   }

    const getStocks = ( keyword ) => {
        console.log(keyword);
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
            setStocks(data)
            setIsLoading(false);
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
            setIsError('Stock not found, Please Try again');
        });

}

    return (
        <StockContext.Provider 
            value={
                {
                    userInfo, 
                    search: getStocks,
                    isLoading,
                    isError,
                    stocks
                }
            }
        >
            <div className="trading">
                {props.children}
            </div>
        </StockContext.Provider>
        
    )
}

export default Trader;
