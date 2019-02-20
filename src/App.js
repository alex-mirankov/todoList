import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './adaptive.css';
import { Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Store } from './store';

import { Main } from '../src/containers/main-container/Main';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Provider store={Store}>
        <Main />
      </Provider>
    );
  }
}

export default App;
