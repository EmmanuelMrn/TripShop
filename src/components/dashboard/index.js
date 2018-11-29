import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';
import { Card, CardItem } from 'native-base';
import RecommendedCardItem from '../../components/cardItem';

const styles = StyleSheet.create({
    cardStyle: {
      marginLeft: 5,
      marginRight: 5,
      },
    cardItemStyle: {
      borderBottomWidth: 1,
      borderBottomColor: '#dee0e2',
    },
  });

  
class DashboardComponent extends Component {
  render() {
    const { cardStyle, cardItemStyle } = styles;
    return (
      <Card style={cardStyle}>
        <CardItem header style={cardItemStyle}>
            <Text>Recomendaciones</Text>
        </CardItem>
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

