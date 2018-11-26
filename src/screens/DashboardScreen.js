import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';

export default class DashboardContainer extends Component {
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
