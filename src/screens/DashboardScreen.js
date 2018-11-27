import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import Dashboard from '../components/dashboard';
//Drawer

export default class DashboardContainer extends Component {
  render() {
    const { container } = styles;
    return (
      <View style={container}>
        <Dashboard />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EEEEEE',
  },
});
