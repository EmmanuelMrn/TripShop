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
          itemName='You can heal your life'
          itemCreator='Louise Hay'
          itemPrice='$10'
          savings='2.5'
          imageUri={require('../../images/recommended_1.jpg')}
          rating={5}
        />
        <RecommendedCardItem
          itemName='Uncharted 4'
          itemCreator='Sony'
          itemPrice='$19.99'
          savings='17'
          imageUri={require('../../images/recommended_2.jpg')}
          rating={5}
        />
        <RecommendedCardItem
          itemName='Ea UFC 3'
          itemCreator='Ea Sports'
          itemPrice='$44'
          savings='6'
          imageUri={require('../../images/recommended_3.jpg')}
          rating={3}
        />
      </Card>
    );
  }
}

export default DashboardComponent;

