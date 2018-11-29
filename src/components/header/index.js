import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Header, Left, Right, Icon } from 'native-base';
  import FAIcon from 'react-native-vector-icons/FontAwesome';

const styles = StyleSheet.create({
    headerStyle: {
        backgroundColor: '#3a455c',
        height: 70,
        borderBottomColor: '#757575',
        borderBottomWidth: 0.5,
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
  });

  
class HeaderComponent extends Component<Props> {
  render() {
    const { headerStyle, iconMenu, iconAmazon, iconCart, direction } = styles;
    return (
        <Header style={headerStyle}>
            <Left style={direction}>
                <Icon name="md-menu" style={iconMenu} onPress={() => this.props.navigation.openDrawer()} />
                <FAIcon name="amazon" style={iconAmazon} />
            </Left>
            <Right>
                <Icon name="md-cart" style={iconCart} />
            </Right>
        </Header>
    );
  }
}

export default HeaderComponent;

