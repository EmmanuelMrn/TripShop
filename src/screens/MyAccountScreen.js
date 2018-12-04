import React, { Component } from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import HeaderComponent from '../components/header';

export default class AccountContainer extends Component {
   render() {
       const { container, imageStyle, textStyle } = styles;
    return (
        <View>
            <HeaderComponent navigation={this.props.navigation} title={'Mi cuenta'} />
            <View style={container}>
                <Image style={imageStyle} source={require('../images/reparacion.jpg')} />
                <Text style={textStyle}>Estamos en mantenimiento</Text>
            </View>
        </View>
        
    );
  }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        paddingTop: '30%',
    },
    imageStyle: {
      height: 150,
      width: 150,
    },
    textStyle: {
        fontWeight: 'bold',
        fontSize: 22,
    },
  });
