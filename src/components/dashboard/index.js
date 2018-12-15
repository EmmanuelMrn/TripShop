import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { Card } from 'native-base';
import firebase from '@firebase/app';
import 'firebase/database';
import ItemComponent from '../common/ItemComponent';

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
    noItemsText: {
      fontSize: 18,
      fontWeight: 'bold',
      color: 'black'
    },
  });

  
class DashboardComponent extends Component {
  state = {
    tituloPlayera: '',
    precioPlayera: '',
    colorPlayera: '',
    items: []
  };

  componentDidMount() {
    firebase.database().ref('playeras').on('value', (snapshot) => {
      let data = snapshot.val();
      let items = Object.values(data);
      this.setState({ items });
      console.log(this.state.items);
    });
  }

  render() {
    const { cardStyle, cardItemStyle, textStyle, noItemsText } = styles;
    return (
      <Card style={cardStyle}>
        <View header style={cardItemStyle}>
            <Text style={textStyle}>Lo más vendido</Text>
        </View>
        {
          this.state.items.length > 0
          ? <ItemComponent items={this.state.items} />
          : <Text style={noItemsText}>No items</Text>
      }
      </Card>
    );
  }
}

export default DashboardComponent;

