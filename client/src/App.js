import React, { useState } from 'react';
import {Switch, Route, Redirect} from 'react-router-dom'; 
import './App.css';
import Layout from './containers/Layout/Layout';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import LandingPage from './components/LandingPage/LandingPage';
import Trader from './containers/Trader/Trader';
import TraderStockInfo from './components/TraderStockInfo/TraderStockInfo';
import Portfolio from './components/Portfolio/Portfolio';
import { AuthContext } from "./context/auth";
import { StockContext } from "./context/stock";

const App = () => {
  const existingTokens = JSON.parse(localStorage.getItem("tokens"));
  
  const [authToken, setAuthTokens] = useState(existingTokens);
  const [stockInfo, setStockInfo] = useState();
  
  const setTokens = (data) => {
    localStorage.setItem("tokens", JSON.stringify(data));
    setAuthTokens(data);
  }

  const clearTokens = (data) => {
    localStorage.clear();
    setAuthTokens(data);
  }
  
  return (
    <AuthContext.Provider value={{ authToken, setAuthTokens: setTokens }}>
      <Layout>
        <Switch>
          <StockContext.Provider
            value={{stockInfo, setStockInfo: setStockInfo}}>
          <PrivateRoute path='/landing-page' component={LandingPage} />
          <PrivateRoute exact path='/trader' component={Trader} />
          <PrivateRoute path='/trader/stock-info' component={TraderStockInfo} />
          <PrivateRoute path='/portfolio' component={Portfolio} />
          </StockContext.Provider>
          <Route path="/register" component={Register}/>
          <Route path="/login">
             <Login />
          </Route>
          <Route path="/logout" render={() => {
            setAuthTokens();
            clearTokens();
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
