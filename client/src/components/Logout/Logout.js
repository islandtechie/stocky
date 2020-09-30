import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { useAuth } from '../../context/auth';

const Logout = ( props ) => {

 const { authToken, setAuthTokens } = useAuth();

 useEffect(() => {
    localStorage.clear();
 }, [])

    
        return <Redirect to="/" />
}

export default Logout;
