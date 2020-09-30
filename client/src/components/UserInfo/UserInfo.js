import React from 'react';
import classes from './UserInfo.module.css';

const UserInfo = ( { user } ) => {
    const {balance, owned } = user;
    return (
        <div className={classes.userInfo}>
            <span className={classes.userInfo__currentBalance}>Current Balance: ${balance}</span>
            <span className={classes.userInfo__stocksOwned}>Stocks Owned: {owned}</span> 
        </div>
    )
}

export default UserInfo;
