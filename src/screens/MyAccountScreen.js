import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

export default class AccountContainer extends Component {
   render() {
    return (
        <View>
            <Text> Account Screen</Text>
            <Button onPress={() => this.props.navigation.goBack()} title="Go back home" />
        </View>
        
    );
  }
}
