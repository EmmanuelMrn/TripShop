import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

export default class DrawerContainer extends Component {
   render() {
    return (
        <View>
            <Text> Drawer Screen</Text>
            <Button onPress={() => this.props.navigation.goBack()} title="Go back home" />
        </View>
        
    );
  }
}

