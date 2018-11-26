import { createStackNavigator, createAppContainer } from 'react-navigation';
import { Easing, Animated } from 'react-native';
import DashboardScreen from './screens/DashboardScreen';

const AppNavigator = createStackNavigator({
  Dashboard: { screen: DashboardScreen },
},
{
  initialRouteName: 'Dashboard',
  headerMode: 'none',
  navigationOptions: {
    gesturesEnabled: false,
  },
  transitionConfig: () => ({
    transitionSpec: {
      duration: 300,
      easing: Easing.out(Easing.poly(4)),
      timing: Animated.timing,
    },
    screenInterpolator: sceneProps => {
      const { layout, position, scene } = sceneProps;
      const { index } = scene;

      const thisSceneIndex = scene.index;
      const width = layout.initWidth;

      const opacity = position.interpolate({
        inputRange: [index - 1, index - 0.99, index],
        outputRange: [0, 1, 1],
      });

      const translateX = position.interpolate({
        inputRange: [thisSceneIndex - 1, thisSceneIndex],
        outputRange: [width, 0],
      });

      return { opacity, transform: [{ translateX }] };
    },
  }),
});

export default createAppContainer(AppNavigator);
