import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from './pages/Main';
import Profile from './pages/Profile';

const Routes = createAppContainer(
  createStackNavigator({
    Main: {
      screen: Main,
      navigationOptions: {
        title: 'DevRadar',
      }
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        title: 'Perfil no Github'
      }
    }
  }, {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#EF476F'
      },
      headerBackTitleVisible: false,
      headerTintColor: '#FFF',
      headerTitleAlign: 'center',
      headerTitleStyle: {
        fontWeight: 'bold'
      },
    }
  })
);

export default Routes;
