import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router-dom';

import { HomePageContainer } from '../src/containers/home-page-container/homePageContainer';
import { LoginContainer } from '../src/containers/login-container/loginContainer';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route path='/home' component={HomePageContainer} />
          <Route path='/' component={LoginContainer} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
