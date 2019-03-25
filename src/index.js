import React, { Component } from 'react';

import { AsyncStorage } from 'react-native';

import { Provider } from 'react-redux';

import 'react-native-gesture-handler';

import store from './store';

import createNavigator from '../src/navigation/MainNavigation';

import { setNavigator } from './services/navigation'


class App extends Component {

  state = {
    userChecked: false,
    userLogged: false,
  };

  async componentDidMount() {

   const username = await AsyncStorage.getItem('@ReactStart:username');

   this.setState({
       userChecked: true,
       userLogged: !!username,
     })
   }

  render() {
    const { userChecked, userLogged } = this.state;

    if (!userChecked) return null;

    const Navigation = createNavigator(userLogged);

    return (
      <Provider store={store}>
        <Navigation ref={setNavigator} />
      </Provider>
    );
  }
}

export default App;
