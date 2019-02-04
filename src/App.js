import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { LoginContainer } from '../src/containers/login-container/loginContainer';

class App extends Component {
  render() {
    return (
      <LoginContainer />
    );
  }
}

export default App;
