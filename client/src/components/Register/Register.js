import React from 'react';
import './Register.css'
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="register">
            <form className="register__form" method="POST" action="#">
                <h1 className="register__formTitle">register</h1>
                <p className="register__formError">Please enter your Email and/or Password and retry.</p>
                <label htmlFor="email">
                    <input type="email" name="email" id="email" className="register__formEmail" placeholder="Jane@Doe.com" aria-placeholder="email" />
                </label>
                <label htmlFor="password">
                    <input type="password" name="password" id="password" className="register__formPassword" placeholder="Password" aria-placeholder="password" />
                </label>
                <label htmlFor="password2">
                    <input type="password" name="password2" id="password2" className="register__formPassword" placeholder="Password2" aria-placeholder="password2" />
                </label>
                <button type="button" className="register__formButton">register</button>
                <p className="register__formLink"><Link to="/login">Login</Link></p>
            </form>
            
        </div>
    )
    }
export default Register;
