import React, { Component } from 'react';
import { View, Text } from 'react-native';
import HeaderComponent from '../components/header';

export default class SettingsContainer extends Component {
   render() {
    return (
        <View>
            <HeaderComponent navigation={this.props.navigation} title={'Ajustes'} />
            <Text>Settings Screen</Text>
        </View>
        
    );
  }
}
