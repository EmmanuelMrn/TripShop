import React, { Component } from 'react';
import { StyleSheet, StatusBar, Image } from 'react-native';
import { Header, Left, Right, Icon } from 'native-base';

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
  });

  
class HeaderComponent extends Component<Props> {
  render() {
    const { headerStyle, iconMenu, vikingLogo, iconCart, direction } = styles;
    return (
        <Header style={headerStyle}>
            <StatusBar
                translucen
                backgroundColor='#607D8B'
                barStyle="light-content"
            />
            <Left style={direction}>
                <Icon name="md-menu" style={iconMenu} onPress={() => this.props.navigation.openDrawer()} />
                <Image style={vikingLogo} source={require('../../images/vikinglogo.png')} />
            </Left>
            <Right>
                <Icon name="md-cart" style={iconCart} />
            </Right>
        </Header>
    );
  }
}

export default HeaderComponent;

