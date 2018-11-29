import React, { Component } from 'react';
import { View, Text } from 'react-native';
import HeaderComponent from '../components/header';

export default class AdminContainer extends Component {
   render() {
    return (
        <View>
            <HeaderComponent navigation={this.props.navigation} title={'Administrador'} />
            <Text> Admin Screen</Text>
        </View>
        
    );
  }
}
