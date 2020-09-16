import React, { useState } from 'react';
import './Register.css'
import { Link } from 'react-router-dom';

const Register = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [password2, setPassword2] = useState();
    const [isError, setIsError] = useState(false);
    const [errorMessage, setErrorMessage] = useState();

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

        let formData = '';

        if ( password === password2) {
            formData = new FormData({
                email: email,
                password: password
            })

            console.log('formdata', formData);
        } else {
            setIsError(true);
            setErrorMessage(
                <p className="register__form--error">Passwords do not match</p>
            )
        }
        // const formData = new FormData(event.target);

        // axios.post('http://127.0.0.1:7000/login', formData)
        // .then((res) => {
        //     if ( res.status === 200) {
        //         console.log(res.data);
        //     }
        // })
        // .catch((err) => {
        //      if (err.response) {
        //         setIsError(true);
        //         setErrorMessage(
        //             <p className={classes.login__formError}>{err.response.data}
        //                 or <Link to="/register">Register Here</Link>
        //             </p>
        //         )
        //      }
        // })
    }


    return (
        <div className="register">
            <form className="register__form" onSubmit={register}>
                <h1 className="register__formTitle">register</h1>
                {isError ? errorMessage : ''}
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
