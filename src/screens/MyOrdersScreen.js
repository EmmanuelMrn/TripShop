import React, { Component } from 'react';
import { View, Text } from 'react-native';
import HeaderComponent from '../components/header';

export default class OrderContainer extends Component {
   render() {
    return (
        <View>
            <HeaderComponent navigation={this.props.navigation} title={'Mis pedidos'} />
            <Text> Order Screen</Text>
        </View>
        
    );
  }
}
