import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

export default class OrderContainer extends Component {
   render() {
    return (
        <View>
            <Text> Order Screen</Text>
            <Button onPress={() => this.props.navigation.goBack()} title="Go back home" />
        </View>
        
    );
  }
}
