import React from 'react';
import './Modal.css'

const Modal = ( props ) => {
    console.log(props);

    const hide = {
        display: 'none'
    }

    return (
        <div className={props.active ? 'backdrop' : 'hide'}>
            <div className="modal">
                <h2>Please Confirm</h2>
                <p>Are you sure you want to Purchase CompanyNameHere?</p>
                <p>{props.stock.symbol}</p>
                <p>Apple Inc</p>
                <p>Currnet Price: {props.stock.price}</p>
                <button onClick={() => props.buy(props.stock.price, props.stock.symbol)}>Buy Now</button>
                <button onClick={props.cancel}>Cancel</button>
            </div>
        </div>
    )
}

export default Modal;
