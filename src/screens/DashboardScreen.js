import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { 
  Container,
  Content,
} from 'native-base';
import HeaderComponent from '../components/header';
import SearchComponent from '../components/searchBar';
import SwiperComponent from '../components/swiper';
import DashboardComponent from '../components/dashboard';

const styles = StyleSheet.create({
  contentStyles: {
    backgroundColor: '#d5d5d6',
    marginTop: '19%',
  },
});


export default class DashboardContainer extends Component {
  render() {
    const { contentStyles } = styles;
    return (
      <Container>
        <HeaderComponent navigation={this.props.navigation} />
        <SearchComponent />

        <Content style={contentStyles}>
          <SwiperComponent />

          <DashboardComponent />
        </Content>
      </Container>
    );
  }
}
