import React, { useState, useEffect } from 'react';
import { useParams, Link, useHistory } from "react-router-dom";
import axios from 'axios';

import Modal from '../Modal/Modal';

import './TraderStockInfo.css';

const API_KEY = 'Tsk_0f2bb5a7c1d34a188b3e4a52059822e0';

const TraderStockInfo = ( props ) => {
    const [info, setInfo] = useState();
    const [isError, setIsError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [isModalActive, setIsModalActive] = useState(false);
    let history = useHistory();

    const cancelButtonHandler = () => {
        setIsModalActive(false)
    }
    
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

   let { stock } = useParams();

   useEffect(() => {
    let options ={
        method: 'get',
        baseURL: 'https://sandbox.iexapis.com/stable',
        url: `/stock/${stock}/company`,
        params: new URLSearchParams({
            token: API_KEY,
        })
    }

    axios(options)
    .then(res => {
        let data = res.data;
        setInfo([data].map((info) => {
        return (
            <div key="info.symbol" className="traderstockinfo">
                <Modal 
                    active={isModalActive} 
                    cancel={cancelButtonHandler} 
                    buy={buyNowButtonHandler} 
                />
                <h1>{info.symbol} - <span>{info.companyName}</span></h1>
                <h2>{info.sector}</h2>
                <div className='company-details'>
                    <div className="company-info">
                        <p>CEO: {info.CEO}</p>
                        <p>Number of Employees: {info.employees}</p>
                        <p>Industry: {info.industry}</p>
                        <p>Website: <Link to={info.website}>{info.website}</Link></p>
                        
                    </div>
                    <div className='address'>
                        <span>{info.address}</span>
                        <span>{info.address2}</span>
                        <span>{info.state}</span>
                        <span>{info.city}</span>
                        <span>{info.zip}</span>
                        <span>{info.country}</span>
                        <span>{info.phone}</span>
                    </div>
                    <p className="description">Description: {info.description}</p>
                </div>
                <button onClick={() => setIsModalActive(true)}>Buy This Stock</button>
                <button onClick={() => history.goBack()}>Go back to trader</button>
            </div>
        ) 
        }));
    })
    .catch(err => {
        setIsError(true);
        setErrorMessage(err);
    });
   }, [isModalActive])

    return (
        <div className="traderstockinfo">
               {info}
        </div>
    )
    
}

export default TraderStockInfo;
