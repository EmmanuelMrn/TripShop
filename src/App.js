import React from 'react';
import SplashScreen from 'react-native-splash-screen';
import Navigator from './Navigator';

export default class App extends React.Component {
  componentDidMount() {
    SplashScreen.hide();
  }

  render() {
    return (
      <Navigator />
    );
  }
}
