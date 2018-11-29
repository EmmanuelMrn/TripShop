import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import HeaderComponent from '../components/header';

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#d5d5d6',
      marginTop: '19%',
    },
  });

export default class FavoriteContainer extends Component {
   render() {
    const { container } = styles;
    return (
        <View>
            <HeaderComponent navigation={this.props.navigation} title={'Favoritos'} />
            <Text> Favorite Screen</Text>
        </View>
        
    );
  }
}
