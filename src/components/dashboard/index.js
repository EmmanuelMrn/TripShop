import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';

class Dashboard extends Component {
  render() {
    const { container, welcome } = styles;
    return (
      <View style={container}>
        <StatusBar
          backgroundColor="#EEE"
          barStyle="dark-content"
        />
        <Text style={welcome}>Welcome to React Native!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EEE',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: 'black',
  },
});

export default Dashboard;
