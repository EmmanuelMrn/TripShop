import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { Card } from 'native-base';
import firebase from '@firebase/app';
import 'firebase/database';
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
  state = {
    tituloPlayera: '',
    precioPlayera: '',
    colorPlayera: '',
  };

  componentDidMount() {
    firebase.database().ref('playeras/').on('child_added', function(snapshot) {
      var data = snapshot.val();
      this.state.tituloPlayera = data.title;
      this.state.precioPlayera = data.price;
      this.state.colorPlayera = data.col;
    });
  }

  render() {
    const { cardStyle, cardItemStyle, textStyle } = styles;
    return (
      <Card style={cardStyle}>
        <View header style={cardItemStyle}>
            <Text style={textStyle}>Lo más vendido</Text>
        </View>
        <RecommendedCardItem
          itemName={this.state.tituloPlayera}
          itemColor={this.state.colorPlayera}
          itemPrice={this.state.precioPlayera}
          itemSize='M'
          imageUri={require('../../images/axeblack.png')}
          rating={5}
        />
      </Card>
    );
  }
}

export default DashboardComponent;

