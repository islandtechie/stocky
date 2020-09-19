import React from 'react';
import './Stocks.css';

const stocks = ( props ) => {

    return (
        <div className="stocks">
            {props.children}        
        </div>
    )
}

export default stocks;
