
import { React } from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import 'react-native-gesture-handler';

import LoginScreen from '../pages/Login';
import DrawerNavigation from './DrawerNavigation';

const MainNavigation = createAppContainer(createSwitchNavigator(
  {
    Login: { screen: LoginScreen },
    Drawer: { screen: DrawerNavigation },
  },
  {
    initialRouteName: 'Drawer',
  }
));

export default MainNavigation;
