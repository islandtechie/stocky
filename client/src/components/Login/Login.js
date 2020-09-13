import React from 'react';
import classes from './Login.module.css'
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className={classes.login}>
            <form className={classes.login__form} method="POST" action="#">
                <h1 className={classes.login__formTitle}>login</h1>
                <p className={classes.login__formError}>Please enter your Email and/or Password and retry.</p>
                <label htmlFor="email">
                    <input type="email" name="email" id="email" className={classes.login__formEmail} placeholder="Jane@Doe.com" aria-placeholder="email" />
                </label>
                <label htmlFor="password">
                    <input type="password" name="password" id="password" className={classes.login__formPassword} placeholder="Password" aria-placeholder="password" />
                </label>
                <button type="button" className={classes.login__formButton}>Login</button>
                <p className={classes.login__formLink}><Link to="/register">Register</Link></p>
            </form>
            
        </div>
    )
}

export default Login;
