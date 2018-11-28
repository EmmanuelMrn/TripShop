import { createStackNavigator, createAppContainer, createDrawerNavigator } from 'react-navigation';
import { Easing, Animated } from 'react-native';
import DashboardScreen from './screens/DashboardScreen';
import DrawerScreen from './screens/DrawerScreen';

const AppNavigator = createDrawerNavigator({
  Dashboard: { screen: DashboardScreen },
  Drawer: { screen: DrawerScreen },
},
{
  initialRouteName: 'Dashboard',
  headerMode: 'none',
});

export default createAppContainer(AppNavigator);
