
import { React } from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import 'react-native-gesture-handler';

import LoginScreen from '../pages/Login';
import DrawerNavigation from './DrawerNavigation';

const MainNavigation = (userLogged = false) =>  createAppContainer(createSwitchNavigator(
  {
    Login: { screen: LoginScreen },
    Home: { screen: DrawerNavigation },
  },
  {
    initialRouteName: userLogged ? 'Home' : 'Login',
  }
));

export default MainNavigation;
