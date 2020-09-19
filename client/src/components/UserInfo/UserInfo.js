import React from 'react';
import classes from './UserInfo.module.css'

const UserInfo = ( props ) => {
    return (
        <div className={classes.userInfo}>
                <span className={classes.userInfo__currentBalance}>Current Balance: $100,000.00</span>
                <span className={classes.userInfo__stocksOwned}>Stocks Owned: 100</span>
        </div>
    )
}

export default UserInfo;
