import React, { Component } from 'react';
import { Route, Switch } from 'react-router' // react-router v4
import Header from './components/Header';
import HomePage from './components/HomePage';
import UserPage from './components/UserPage';

import './App.css';

class App extends Component {
  render() {
    return (
      <div id='App'>
        <Header/>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route path='/user' component={UserPage}/> 
        </Switch>
      </div>
    );
  }
}

export default App;
