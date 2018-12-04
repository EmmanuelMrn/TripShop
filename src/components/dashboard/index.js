import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { Card } from 'native-base';
import RecommendedCardItem from '../../components/cardItem';

const styles = StyleSheet.create({
    cardStyle: {
      marginLeft: 5,
      marginRight: 5,
      },
    cardItemStyle: {
      borderBottomWidth: 1,
      borderBottomColor: '#dee0e2',
      alignItems: 'center',
      flex: 1,
      height: 50,
      justifyContent: 'center',
    },
    textStyle: {
      fontSize: 18,
      fontWeight: 'bold',
    },
  });

  
class DashboardComponent extends Component {
  render() {
    const { cardStyle, cardItemStyle, textStyle } = styles;
    return (
      <Card style={cardStyle}>
        <View header style={cardItemStyle}>
            <Text style={textStyle}>Lo más vendido</Text>
        </View>
        <RecommendedCardItem
          itemName='Playera Hachas'
          itemColor='Negra'
          itemPrice='$150'
          itemSize='M'
          imageUri={require('../../images/axeblack.png')}
          rating={5}
        />
        <RecommendedCardItem
          itemName='Playera Medusa'
          itemColor='Blanca'
          itemPrice='$150'
          itemSize='M'
          imageUri={require('../../images/medusashirt.png')}
          rating={5}
        />
      </Card>
    );
  }
}

export default DashboardComponent;

