import React  from 'react';
import 'react-native-gesture-handler';

import { createBottomTabNavigator, createAppContainer, createMaterialTopTabNavigator } from 'react-navigation';

import RepositoriesScreen from '../pages/Repositories';
import MessagesScreen from '../components/Messages';
import NotificationScreen from '../components/Notifications';
import { Icon } from 'native-base';

const DashboardTabNavigator = createAppContainer(createBottomTabNavigator({
  Repositories: { screen: RepositoriesScreen },
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
