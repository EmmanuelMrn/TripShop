import React, { Component } from 'react';
import { ImageBackground } from 'react-native';
import { Container, Content, Text, List, ListItem } from 'native-base';

const routes = ['Inicio', 'Mi cuenta', 'Mis pedidos', 'Favoritos', 'Ajustes', 'Administrador'];

export default class SideBar extends Component {
  render() {
    return (
      <Container>
        <Content>
          <ImageBackground
            source={require('../../images/swiper_2.jpg')} 
            style={{
              height: 120,
              alignSelf: 'stretch',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
            <ImageBackground
              square
              style={{ height: 80, width: 70 }}
              source={require('../../images/recommended_1.jpg')} 
            />
          </ImageBackground>
          <List
            dataArray={routes}
            renderRow={data => {
              return (
                <ListItem button onPress={() => this.props.navigation.navigate(data)}>
                  <Text>{data}</Text>
                </ListItem>
              );
            }}
          />
        </Content>
      </Container>
    );
  }
}
