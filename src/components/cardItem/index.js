import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image
} from 'react-native';
import { CardItem, Right } from 'native-base';
import StarRating from 'react-native-star-rating';

const styles = StyleSheet.create({
    rightStyle: {
        flex: 1,
        alignItems: 'flex-start',
        height: 90,
        paddingHorizontal: 20,
      },
    imageStyle: {
        height: 90,
        width: 60,
    },
    textItemCreator: {
        color: 'grey',
        fontSize: 11,
    },
    textItemPrice: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#c4402f',
    },
    textYouSaveStyle: {
        color: 'grey',
        fontWeight: '300',
        fontSize: 11,
    }
  });

class RecommendedCardItem extends Component {
 render() {
  const { imageStyle, rightStyle, textItemCreator, textItemPrice, textYouSaveStyle } = styles;
    return (
        <CardItem>
            <View>
                <Image style={imageStyle} source={this.props.imageUri} />
            </View>
            <Right style={rightStyle}>
                <Text>{this.props.itemName}</Text>
                <Text style={textItemCreator}>{this.props.itemCreator}</Text>
                <Text style={textItemPrice}>{this.props.itemPrice}</Text>
                <Text><Text style={textYouSaveStyle}>
                    You save
                </Text> ${this.props.savings}</Text>

                <StarRating
                    disabled={true}
                    maxStars={5}
                    rating={this.props.rating}
                    starSize={12}
                    fullStarColor='orange'
                    emptyStarColor='orange'
                />
            </Right>
        </CardItem>
    );
  }
}
export default RecommendedCardItem;
