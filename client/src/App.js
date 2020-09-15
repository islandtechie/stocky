import React, { useState } from 'react';
import {Switch, Route} from 'react-router-dom'; 
import './App.css';
import Layout from './containers/Layout/Layout';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import LandingPage from './components/LandingPage/LandingPage';
import { AuthContext } from "./context/auth";

const App = () => {
  const existingTokens = JSON.parse(localStorage.getItem("tokens"));
  
  const [authTokens, setAuthTokens] = useState(existingTokens);
  
  const setTokens = (data) => {
    localStorage.setItem("tokens", JSON.stringify(data));
    setAuthTokens(data);
  }
  return (
    <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }}>
      <Layout>
        <Switch>
          <PrivateRoute path='/private' component={LandingPage} />
          <Route path="/register" component={Register}/>
          <Route path="/login"><Login /></Route>
          <Route exact path="/" component={Home}/>
        </Switch>
      </Layout>
    </AuthContext.Provider>
  );
}

export default App;
