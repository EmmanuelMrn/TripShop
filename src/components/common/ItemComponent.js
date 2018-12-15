import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import RecommendedCardItem from '../cardItem';

const styles = StyleSheet.create({
    itemsList: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
    },
});

export default class ItemComponent extends Component {
  render() {
    return (
      <View style={styles.itemsList}>
        {this.props.items.map((item, index) => {
            return (
                <View key={index}>
                    <RecommendedCardItem
                        itemName={item.title}
                        itemColor={item.col}
                        itemPrice={item.price}
                        itemSize='M'
                        imageUri={require('../../images/axeblack.png')}
                        rating={5}
                    />
                </View>
            );
        })}
      </View>
    );
  }
}
