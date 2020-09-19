import React, { useState } from 'react';
import axios from 'axios';
import classes from './Login.module.css'
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../../context/auth';

const Login = ( props ) => {

    const [email, setEmail] = useState('jane@doe.com');
    const [password, setPassword] = useState('password');
    const [isError, setIsError] = useState(false);
    const [errorMessage, setErrorMessage] = useState();
    const { setAuthTokens, authToken } = useAuth();
    let history = useHistory();

    if ( authToken ) history.push('/landing-page');

    const setEmailHandler = (event) => {
        setEmail(event.target.value)
    }

    const setPasswordHandler = (event) => {
        setPassword(event.target.value);
    }

    const login = (event) => {
        event.preventDefault();
        console.log('hello i hit')
        const formData = new FormData(event.target);

        axios.post('http://127.0.0.1:5000/login', formData)
        .then((res) => {
                setAuthTokens(res.data['token']);
        })
        .catch((err) => {
             if (err.response) {
                 console.log(err.response)
                // setIsError(true);
                // setErrorMessage(
                //     <p className={classes.login__formError}>{err.response.data}
                //         or <Link to="/register">Register Here</Link>
                //     </p>
                // )
             }
        })
    }


    return (
        <div className={classes.login}>
            <form className={classes.login__form} onSubmit={login}>
                <h1 className={classes.login__formTitle}>login</h1>
                {isError ? errorMessage : ''}
                <label htmlFor="email">
                    <input 
                        type="email" 
                        name="email" 
                        value={email}
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
                        value={password}
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
