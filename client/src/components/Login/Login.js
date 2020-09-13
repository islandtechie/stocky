import React, { useState } from 'react';
import classes from './Login.module.css'
import { Link } from 'react-router-dom';

const Login = ( props ) => {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [error, setError] = useState();
    const [errorMessage, setErrorMessage] = useState();

    const setEmailHandler = (event) => {
        setEmail(event.target.value)
    }

    const setPasswordHandler = (event) => {
        setPassword(event.target.value);
    }

    const login = (event) => {
        event.preventDefault();

        console.log(email);
        console.log(password);

        setTimeout(() => {
            setError(true);
            setErrorMessage(
                <p className={classes.login__formError}>Please enter your Email and/or Password and retry.</p>
            )
        }, 3000)
    }

    return (
        <div className={classes.login}>
            <form className={classes.login__form} onSubmit={login}>
                <h1 className={!error ? classes.login__formTitle : ''}>login</h1>
                {errorMessage}
                <label htmlFor="email">
                    <input 
                        type="email" 
                        name="email" 
                        id="email"
                        className={classes.login__formEmail} 
                        placeholder="Jane@Doe.com" 
                        aria-placeholder="email" 
                        onChange={setEmailHandler}
                    />
                </label>
                <label htmlFor="password">
                    <input 
                        type="password" 
                        name="password" 
                        id="password" 
                        className={classes.login__formPassword} 
                        placeholder="Password" 
                        aria-placeholder="password" 
                        onChange={setPasswordHandler}
                    />
                </label>
                <button type="submit" className={classes.login__formButton}>Login</button>
                <p className={classes.login__formLink}><Link to="/register">Register</Link></p>
            </form>
            
        </div>
    )
}

export default Login;
