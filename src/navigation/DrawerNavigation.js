import React  from 'react';
import 'react-native-gesture-handler';
import { Dimensions } from 'react-native';

import { createAppContainer, createDrawerNavigator } from 'react-navigation';

import SideBar from '../components/SideBar';
import DashboardTabNavigator from './TabNavigator';

const DrawerNavigation = createAppContainer(createDrawerNavigator(
  {
    Dashboard: { screen: DashboardTabNavigator }
  }, {
    contentComponent: SideBar,
    drawerWidth: Dimensions.get('window').width - 120,
  }
));

export default DrawerNavigation;


