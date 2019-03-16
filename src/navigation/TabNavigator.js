import React  from 'react';
import 'react-native-gesture-handler';

import { createBottomTabNavigator, createAppContainer, createMaterialTopTabNavigator } from 'react-navigation';

import HomeScreen from '../components/Home';
import MessagesScreen from '../components/Messages';
import NotificationScreen from '../components/Notifications';
import { Icon } from 'native-base';

const DashboardTabNavigator = createAppContainer(createBottomTabNavigator({
  Home: { screen: HomeScreen },
  Messages: { screen: MessagesScreen },
  Notification: { screen: NotificationScreen },
},
{
  tabBarOptions: {
    activeTintColor: '#000',
    inactiveTintColor: '#d1cece',
  }
}
));

export default DashboardTabNavigator;
