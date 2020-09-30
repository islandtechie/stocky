import React, { useState } from 'react';
import {Switch, Route, Redirect} from 'react-router-dom'; 
import './App.css';
import Layout from './containers/Layout/Layout';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Logout from './components/Logout/Logout';
import Register from './components/Register/Register';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import LandingPage from './components/LandingPage/LandingPage';
import TraderStockInfo from './components/TraderStockInfo/TraderStockInfo';
import Trader from './containers/Trader/Trader';
import { AuthContext } from "./context/auth";

const App = (props) => {
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
          <PrivateRoute path="/trader/stock-info/:stock" component={TraderStockInfo} />
          <PrivateRoute excat path="/trader" component={Trader} />
          <PrivateRoute path='/landing-page' component={LandingPage} />
          <Route path="/register" component={Register}/>
          <Route path="/login" component={Login} />
          <Route path="/logout" component={Logout} />
          <Route exact path="/" component={Home}/>
        </Switch>
      </Layout>
    </AuthContext.Provider>
  );
}

export default App;