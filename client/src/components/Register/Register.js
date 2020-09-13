import React, { useState } from 'react';
import './Register.css'
import { Link } from 'react-router-dom';

const Register = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [password2, setPassword2] = useState();

    const formHandler = ( event ) => {
        let {name, value} = event.target;

        switch (name) {
            case 'email':
                setEmail(value);
                break;
            case 'password':
                setPassword(value);
                break;
            case 'password2':
                setPassword2(value);
                break;
            default:
                //
        }
    }

    const register = (event) => {
        event.preventDefault();
        console.log('registering...');
    }


    return (
        <div className="register">
            <form className="register__form" onSubmit={register}>
                <h1 className="register__formTitle">register</h1>
                <p className="register__formError">Please enter your Email and/or Password and retry.</p>
                <label htmlFor="email">
                    <input 
                        type="email" 
                        name="email" 
                        id="email" 
                        className="register__formEmail" 
                        placeholder="Jane@Doe.com" 
                        aria-placeholder="email"
                        onChange={formHandler}
                    />
                </label>
                <label htmlFor="password">
                    <input 
                        type="password" 
                        name="password" 
                        id="password" 
                        className="register__formPassword" 
                        placeholder="Password"
                        aria-placeholder="password" 
                        onChange={formHandler}
                    />
                </label>
                <label htmlFor="password2">
                    <input 
                        type="password" 
                        name="password2" 
                        id="password2" 
                        className="register__formPassword" 
                        placeholder="Password2" 
                        aria-placeholder="password2"
                        onChange={formHandler}
                    />
                </label>
                <button type="submit" className="register__formButton">register</button>
                <p className="register__formLink"><Link to="/login">Login</Link></p>
            </form>
            
        </div>
    )
    }
export default Register;
