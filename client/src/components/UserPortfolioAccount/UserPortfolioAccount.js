import React from 'react';
import classes from './UserPortfolioAccount.module.css'

const UserPortfolioAccount = (props) => {
    return (
        <div className={classes.accountInfo}>
            <div className={classes.accountInfo_amounts}>
                <div className={classes.accountInfo__balance}>
                    <span className={classes.accountInfo__balanceTag}>balance</span>
                    <span className={classes.accountInfo__balanceAmount}>$100,000.00</span>
                </div>
                <div className={classes.accountInfo__asset}>
                    <span className={classes.accountInfo__assetTag}>assets</span>
                    <span className={classes.accountInfo__assetAmount}>$100,000.00</span>
                </div>
                <div className={classes.accountInfo__holding}>
                    <span className={classes.accountInfo__holdingTag}>holdings</span>
                    <span className={classes.accountInfo__holdingAmount}>$100,000.00</span>
                </div>
            </div>
            {/* <div className={classes.accountInfo__stats}>

            </div> */}
        </div>
    )
}
export default UserPortfolioAccount;

