import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useAuth } from '../../context/auth';

const PrivateRoute = ( {component: Component, ...props }) => {

    const { authToken } = useAuth();

    return (
        <Route {...props} render={( props ) => 
            authToken ? 
            (<Component {...props} />) :
            ( <Redirect to='/login' /> )
            }    
        />
    );
}

export default PrivateRoute;
