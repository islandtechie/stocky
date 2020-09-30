import React, { useState, useEffect } from 'react';
import './Stocks.css';
import Stock from '../Stock/Stock';
import { useStock } from '../../context/stock';

const Stocks = ( {isLoading, stocks, showModal} ) => { 
    
    const [stock, setStock] = useState();
    
    const buyButtonHandler = (symbol, price) => {
        // console.log(symbol, price);
    }

    useEffect(() => {
        if (stocks) 
        {
            setStock(stocks.map((stock) => {
                 return <Stock key={stock.symbol} stock={stock} showModal={showModal}/>
            }))
        }
    }, [stocks, showModal]);
    
    return (
        <div className="stocks">
            {isLoading ? 'Loading...' : stock}
        </div>
    )
}

export default Stocks;
