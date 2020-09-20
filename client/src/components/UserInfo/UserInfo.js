import React from 'react';
import classes from './UserInfo.module.css'
import { useStock } from '../../context/stock';

const UserInfo = () => {
    const { userInfo } = useStock();
    return (
        <div className={classes.userInfo}>
            <span className={classes.userInfo__currentBalance}>Current Balance: ${userInfo.balance}</span>
            <span className={classes.userInfo__stocksOwned}>Stocks Owned: {userInfo.stocks_owned}</span>
        </div>
    )
}

export default UserInfo;
