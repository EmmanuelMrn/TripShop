import React, { Component } from 'react';
import { View, Text } from 'react-native';
import HeaderComponent from '../components/header';

export default class ItemContainer extends Component {
   render() {
    return (
        <View>
            <HeaderComponent navigation={this.props.navigation} />
            <Text> Item Screen</Text>
        </View>
        
    );
  }
}

// firebase.database().ref('playeras/LT3ZtplbQvvhcRMc9PJ').update({
//     cart: true
//   });