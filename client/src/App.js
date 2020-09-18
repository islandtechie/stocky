import React, { useState } from 'react';
import {Switch, Route, Redirect} from 'react-router-dom'; 
import './App.css';
import Layout from './containers/Layout/Layout';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import LandingPage from './components/LandingPage/LandingPage';
import Trader from './components/Trader/Trader';
import Portfolio from './components/Portfolio/Portfolio';
import { AuthContext } from "./context/auth";

const App = () => {
  const existingTokens = JSON.parse(localStorage.getItem("tokens"));
  
  const [authToken, setAuthTokens] = useState(existingTokens);
  
  const setTokens = (data) => {
    localStorage.setItem("tokens", JSON.stringify(data));
    setAuthTokens(data);
  }

  
  return (
    <AuthContext.Provider value={{ authToken, setAuthTokens: setTokens }}>
      <Layout>
        <Switch>
          <PrivateRoute path='/landing-page' component={LandingPage} />
          <PrivateRoute path='/trader' component={Trader} />
          <PrivateRoute path='/portfolio' component={Portfolio} />
          <Route path="/register" component={Register}/>
          <Route path="/login">
             <Login />
          </Route>
          <Route path="/logout" render={() => {
            setAuthTokens();
            return <Redirect to='/' />
      
          }}
          />
          <Route exact path="/" component={Home}/>
        </Switch>
      </Layout>
    </AuthContext.Provider>
  );
}

export default App;
