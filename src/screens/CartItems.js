import React, { Component } from 'react';
import axios from 'axios';
import { StyleSheet, StatusBar, Image, View, Text } from 'react-native';
import { Header, Left, Icon, Right } from 'native-base';

const styles = StyleSheet.create({
    headerStyle: {
        backgroundColor: '#607D8B',
        height: 70,
        borderBottomColor: '#fff',
        borderBottomWidth: 0.3,
      },
    iconMenu: {
        color: 'white',
        marginRight: 15,
    },
    direction: {
        flexDirection: 'row',
    },
    iconAmazon: {
        fontSize: 32,
        color: 'white',
    },
    iconCart: {
        color: 'white',
    },
    vikingLogo: {
        height: 30,
        width: 30,
    },
    textTitle: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },
  });

export default class CartContainer extends Component {
    state = {
        playeras: []
    }

    componentWillMount() {
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
        .then(response => this.setState({ playeras: response.data }));
    }

   render() {
    const { headerStyle, iconMenu, vikingLogo, direction, textTitle } = styles;
    return (
        <View>
            <Header style={headerStyle}>
                <StatusBar
                    translucen
                    backgroundColor='#607D8B'
                    barStyle="light-content"
                />
                <Left style={direction}>
                    <Icon name="md-menu" style={iconMenu} onPress={() => this.props.navigation.openDrawer()} />
                    <Image style={vikingLogo} source={require('../images/vikinglogo.png')} />
                </Left>
                <View style={{ alignItems: 'center', paddingLeft: '25%', flexDirection: 'row' }}>
                    <Text style={textTitle}>Mi carrito</Text>
                </View>
                <Right></Right>
            </Header>
            <Text>Cart Screen</Text>
        </View>
        
    );
  }
}
