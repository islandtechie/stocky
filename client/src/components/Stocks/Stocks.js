import React, { useState, useEffect } from 'react';
import './Stocks.css';
import Stock from '../Stock/Stock';
import { useStock } from '../../context/stock';

const Stocks = ( props ) => {
    const [content, setContent] = useState();
    const { stocks, isLoading, isError, errorMessage } = useStock();

    useEffect(() => {
        if (isLoading) {
            setContent(<p>Loading...</p>);
        }

        if (stocks) {
            setContent(() => (
                <Stock 
                    key={stocks.symbol} 
                    stock={stocks} 
                    buy={() => buyButtonHandler(stocks.symbol, stocks.latestPrice)} 
                />
            ))
        }
    }, [isLoading])

    
    const buyButtonHandler = (symbol, price) => {
        console.log(symbol, price);
    }
    return (
        <div className="stocks">
            {content}
        </div>
    )
}

export default Stocks;
