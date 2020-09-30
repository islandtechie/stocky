import React, {useEffect} from 'react';
import './Modal.css'

const Modal = ( props ) => {
    
    let totalPrice = 0.00;
    
    const hide = {
        display: 'none'
    }

    if (props.shares) {
        totalPrice = props.stock.price * props.shares;
    }
    
    return (
        <div className={props.active ? 'backdrop' : 'hide'}>
            <div className="modal">
                <p>Please Confirm Purchase</p>
                <form>
                    <label htmlFor="stock-amount">How many shares?</label>
                    <input 
                        id="stock-amount" 
                        type="number"
                        onChange={props.setShares}
                    />
                </form>
                <p>Are you sure you want to purchase {props.shares} of {props.stock.symbol}?</p>
                <p>Currnet Stock Price: {props.stock.price}</p>
                <p>Total: $ {totalPrice}</p>
                <button onClick={() => props.buy(props.stock.price, props.stock.symbol)}>Buy Now</button>
                <button onClick={props.cancel}>Cancel</button>
            </div>
        </div>
    )
}

export default Modal;
