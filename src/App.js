import React, { Component } from 'react';
import SplashScreen from 'react-native-splash-screen';
import { StyleSheet, Text, View, StatusBar } from 'react-native';

export default class App extends Component {
  componentDidMount() {
    SplashScreen.hide();
  }
  
  render() {
    const { container, welcome } = styles;
    return (
      <View style={container}>
        <StatusBar
          backgroundColor="#4f6d7a"
          barStyle="light-content"
        />
        <Text style={welcome}>Welcome to React Native!!!!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4f6d7a',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: 'white',
  },
});
