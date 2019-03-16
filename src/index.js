import React, { Component, Fragment } from 'react';
import { AsyncStorage } from 'react-native';
import 'react-native-gesture-handler';

import createNavigator from '../src/navigation/MainNavigation';

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
      <Fragment>
        <Navigation />
      </Fragment>
    );
  }
}

export default App;
