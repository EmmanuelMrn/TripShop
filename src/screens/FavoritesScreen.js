import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Button, FlatList } from 'react-native';
import firebase from '@firebase/app';
import 'firebase/database';
import HeaderComponent from '../components/header';
import ItemComponent from '../components/common/ItemComponent';

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
  itemsList: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  itemtext: {
      fontSize: 24,
      fontWeight: 'bold',
      textAlign: 'center',
  }
  });

export default class FavoriteContainer extends Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     message: '',
  //     messages: [],
  //   };

  //   this.addItem = this.addItem.bind(this);
  // }

  state = {
    tituloPlayera: '',
    precioPlayera: '',
    colorPlayera: '',
    items: []
  };

  // componentDidMount() {
  //   firebase.database().ref('playeras').on('value', (snapshot) => {
  //     let data = snapshot.val();
  //     let items = Object.values(data);
  //     this.setState({ items });
  //     console.log(this.state.items);
  //   });
  // }
  
  // addItem() {
  //   if (!this.state.message) return;

  //   firebase.database().ref('playeras/')
  //     .child('messages')
  //     .push(this.state.message, () => this.setState({ message: '' }));
  // }

  // render() {
  //   const { container } = styles;
  //   return (
  //       <View style={container}>
  //           <HeaderComponent navigation={this.props.navigation} title={'Favoritos'} />
  //           <Text> Favorite Screen</Text>
  //           <View style={styles.msgBox}>
  //             <TextInput 
  //               placeholder='Enter your message'
  //               value={this.state.message}
  //               onChangeText={(text) => this.setState({ message: text })}
  //               style={styles.txtInput} 
  //             />
  //             <Button title='Send' onPress={this.addItem} />
  //           </View>
  //           <FlatList 
  //             data={this.state.messages}
  //             renderItem={
  //               ({ item }) => 
  //               <View style={styles.listItemContainer}>
  //                 <Text style={styles.listItem}>
  //                   {item}
  //                 </Text>
  //               </View>
  //             }
  //           />
  //       </View>
  //   );
  // }
  render() {
    return (
      <View style={styles.container}>
                {
                    this.state.items.length > 0
                    ? <ItemComponent items={this.state.items} />
                    : <Text>No items</Text>
                }
            </View>
    );
  }
}

