import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Item, Icon, Input } from 'native-base';

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 70,
        height: 70,
        backgroundColor: '#607D8B',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 5,
      },
    barStyle: {
        flex: 1,
        height: '100%',
        marginLeft: 5,
        justifyContent: 'center',
    },
    itemStyle: {
        backgroundColor: 'white',
        paddingHorizontal: 10,
        borderRadius: 4,
    },
    iconStyle: {
        fontSize: 20,
        paddingTop: 5,
    },
  });

  
class SearchComponent extends Component {
  render() {
    const { container, barStyle, itemStyle, iconStyle } = styles;
    return (
        <View style={container}>
          <View style={barStyle}>
            <Item style={itemStyle}>
              <Icon name="search" style={iconStyle} />
              <Input placeholder="¿Qué buscas?" />
            </Item>
          </View>
        </View>
    );
  }
}

export default SearchComponent;

