import React, { Component } from 'react';
import './App.css';
import './adaptive.css';
import { Provider } from 'react-redux';
import { Store } from './store';

import { Main } from '../src/containers/main-container/Main';

class App extends Component {
  render() {
    return (
      <Provider store={Store}>
        <Main />
      </Provider>
    );
  }
}

export default App;
