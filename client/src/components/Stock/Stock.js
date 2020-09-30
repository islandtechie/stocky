import React from 'react';

import { faDollarSign, faArrowAltCircleUp, faArrowAltCircleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Stock.css'
import { Link } from 'react-router-dom';


const stock = ({ stock, showModal }) => {    
    return (
        <div className="stock">
            <div className="stock__symbol">
                <Link className="stock__symbolLink" to={`/trader/stock-info/${stock.symbol}`}>
                    {stock.symbol}
                </Link>
            </div>
            <div className="stock__name">{stock.companyName}</div>
            <div className="stock__symbol_lastUpdated">last updated:{new Date(stock.latestUpdate).toLocaleTimeString()}</div>
            <div className="stock__info">
                <div className="stock__info_currentPrice">
                    <FontAwesomeIcon icon={faDollarSign} />
                    <span>{stock.latestPrice}</span>
                </div>
                <div className="stock__info_percentChange">
                    <FontAwesomeIcon icon={faArrowAltCircleUp} />
                    <span>{stock.changePercent}%</span>
                </div>
                <div className="stock__info_priceChange">
                    <FontAwesomeIcon icon={faArrowAltCircleDown} />
                    <span>{stock.change}</span>
                </div>
            </div>
            <div className="stock__buttons">
                <button  
                    type="button"
                    className="stock__button"
                    onClick={() => showModal(stock.latestPrice, stock.symbol)}
                >buy</button>
            </div>
        </div>
    )
}

export default stock;
