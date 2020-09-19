import React from 'react';
import classes from './UserAccount.module.css';

const UserAccount = (props) => {
    return (
        <div className={classes.useraccount}>
            <div className={classes.useraccount_avatar}>
                {/* <img src={} alt='' /> */}
                img goes here
            </div>
            <div className={classes.useraccount__info}>
                <span>Name: Berlin Smith</span>
                <span>User Since: 3rd April, 2020</span>
                <button>Logout</button>
            </div>
        </div>
    )
}

export default UserAccount
