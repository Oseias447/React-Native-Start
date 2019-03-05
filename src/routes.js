import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Login from './pages/Login/index';
import Home from './pages/home/MainDrawer';

const Routes = (userLogged = false) => createAppContainer(createSwitchNavigator({
  Login,
  Home,
  }, {
    initialRouteName: userLogged ? 'Home' : 'Login',
  }),
);

export default Routes;
