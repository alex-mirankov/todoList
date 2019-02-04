import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Store } from './store';

import { HomePageContainer } from '../src/containers/home-page-container/homePageContainer';
import { LoginContainer } from '../src/containers/login-container/loginContainer';

class App extends Component {
  constructor(props) {
    super(props);
  }

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
