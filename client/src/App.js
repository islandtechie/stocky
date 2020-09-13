import React, {useState} from 'react';
import {Switch, Route} from 'react-router-dom'; 
import './App.css';
import Layout from './containers/Layout/Layout';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';

const App = () => {

  return (
    <Layout>
      <Switch>
        <Route path="/register" component={Register}/>
        <Route path="/login"><Login /></Route>
        <Route exact path="/" component={Home}/>
      </Switch>
    </Layout>
  );
}

export default App;
