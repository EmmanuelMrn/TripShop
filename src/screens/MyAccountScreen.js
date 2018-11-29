import React, { Component } from 'react';
import { View, Text } from 'react-native';
import HeaderComponent from '../components/header';

export default class AccountContainer extends Component {
   render() {
    return (
        <View>
            <HeaderComponent navigation={this.props.navigation} title={'Mi cuenta'} />
            <Text> Account Screen</Text>
        </View>
        
    );
  }
}
