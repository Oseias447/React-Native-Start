import React, { Component } from 'react';

import { Provider } from 'react-redux';

import 'react-native-gesture-handler';

import store from './store';

import Navigation from '../src/navigation/MainNavigation';

import { setNavigator } from './services/navigation'


class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <Navigation ref={setNavigator} />
      </Provider>
    );
  }
}

export default App;
