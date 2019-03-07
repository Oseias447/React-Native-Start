import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Login from './pages/Login/index';
import Home from './pages/home/MainDrawer';
import Messages from './components/Messages';
import Notification from './components/Notification';
import SideBar from './components/SideBar';

const Routes = (userLogged = false) => createAppContainer(createSwitchNavigator({
  Login: Login,
  Home: Home,
  SideBar: SideBar,
  Messages: Messages,
  Notification: Notification,
  }, {
    initialRouteName: userLogged ? 'Home' : 'Login',
  }),
);

export default Routes;
