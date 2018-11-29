import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

export default class SettingsContainer extends Component {
   render() {
    return (
        <View>
            <Text> Settings Screen</Text>
            <Button onPress={() => this.props.navigation.goBack()} title="Go back home" />
        </View>
        
    );
  }
}
