import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Button, FlatList } from 'react-native';
import firebase from '@firebase/app';
import 'firebase/database';
import HeaderComponent from '../components/header';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
    marginTop: 10,
  },
  msgBox: {
    flexDirection: 'row',
    padding: 20,
    backgroundColor: '#fff',
  },
  txtInput: {
    flex: 1,
  },
  listItemContainer: {
    backgroundColor: '#fff',
    margin: 5,
    borderRadius: 5,
  },
  listItem: {
    fontSize: 20,
    padding: 10,
  },
  });

export default class FavoriteContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: '',
      messages: [],
    };

    this.addItem = this.addItem.bind(this);
  }

  addItem() {
    if (!this.state.message) return;

    firebase.database().ref('playeras/')
      .child('messages')
      .set(this.state.message, () => this.setState({ message: '' }));
  }

  render() {
    const { container } = styles;
    return (
        <View style={container}>
            <HeaderComponent navigation={this.props.navigation} title={'Favoritos'} />
            <Text> Favorite Screen</Text>
            <View style={styles.msgBox}>
              <TextInput 
                placeholder='Enter your message'
                value={this.state.message}
                onChangeText={(text) => this.setState({ message: text })}
                style={styles.txtInput} 
              />
              <Button title='Send' onPress={this.addItem} />
            </View>
            <FlatList 
              data={this.state.messages}
              renderItem={
                ({ item }) => 
                <View style={styles.listItemContainer}>
                  <Text style={styles.listItem}>
                    {item}
                  </Text>
                </View>
              }
            />
        </View>
    );
  }
}
