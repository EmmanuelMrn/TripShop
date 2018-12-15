import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ToastAndroid,
} from 'react-native';
import firebase from '@firebase/app';
import 'firebase/database';
import { CardItem, Right } from 'native-base';
import StarRating from 'react-native-star-rating';
import FAicon from 'react-native-vector-icons/FontAwesome';

const styles = StyleSheet.create({
    rightStyle: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'flex-start',
        height: 90,
        paddingHorizontal: 20,
      },
    imageStyle: {
        height: 90,
        width: 60,
    },
    textItemColor: {
        color: 'grey',
        fontSize: 11,
    },
    textItemPrice: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#c4402f',
    },
    textItemSize: {
        color: 'grey',
        fontWeight: '300',
        fontSize: 11,
    }
  });

class RecommendedCardItem extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          message: '',
          messages: [],
        };
    
        this.favorites = this.favorites.bind(this);
      }

favorites() {
    var title = 'Playera Vikingo';
    var price = 150;
    var col = 'Negra';
    var cart = true;
    var favorite = false;
    
      firebase.database().ref('playeras/').child('LT3ZtplbQvvhcRMc9PJ')
          .push({ title, price, col, cart, favorite });

    // firebase.database().ref('playeras/LT3_a8P5vCZtOvJbzQp').update({
    //     cart: true
    // });

    // firebase.database().ref('playeras/LTh3c9P4kbwOiE1LdUc').update({
    //     cart: true
    // });

    ToastAndroid.show('Añadido al carrito!', ToastAndroid.SHORT);
}
 render() {
  const { imageStyle, rightStyle, textItemColor, textItemPrice, textItemSize } = styles;
    return (
        <CardItem>
            <View>
                <Image style={imageStyle} source={this.props.imageUri} />
            </View>
            <Right style={rightStyle}>
                <View style={{ flex: 0 }}>
                <Text>{this.props.itemName}</Text>
                <Text style={textItemColor}>{this.props.itemColor}</Text>
                <Text style={textItemPrice}>{this.props.itemPrice}</Text>
                <Text><Text style={textItemSize}>
                    Size 
                </Text>{this.props.itemSize}</Text>

                <StarRating
                    disabled={true}
                    maxStars={5}
                    rating={this.props.rating}
                    starSize={12}
                    fullStarColor='orange'
                    emptyStarColor='orange'
                />

                <FAicon style={{ flex: 0 }} name="cart-plus" size={20} color="green" onPress={this.favorites} />
                </View>
            </Right>
        </CardItem>
    );
  }
}
export default RecommendedCardItem;
