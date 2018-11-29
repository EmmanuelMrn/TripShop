import React, { Component } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import Swiper from 'react-native-swiper';

const styles = StyleSheet.create({
    swiperStyle: {
        height: 120,
      },
    flexStyle: {
        flex: 1,
        paddingHorizontal: '3%',
        paddingVertical: '2%',
    },
    imageStyle: {
        flex: 1,
        height: null,
        width: null,
        borderRadius: 6,
    },
  });

  
class SwiperComponent extends Component {
  render() {
    const { swiperStyle, flexStyle, imageStyle } = styles;
    return (
        <Swiper autoplay={true} style={swiperStyle}>
            <View style={flexStyle}>
              <Image
                style={imageStyle}
                source={require('../../images/swiper_1.png')} 
              />
            </View>
            <View style={flexStyle}>
              <Image
                style={imageStyle}
                source={require('../../images/swiper_2.jpg')}
              />
            </View>
            <View style={flexStyle}>
              <Image
                style={imageStyle}
                source={require('../../images/swiper_3.jpg')}
              />
            </View>
          </Swiper>
    );
  }
}

export default SwiperComponent;

