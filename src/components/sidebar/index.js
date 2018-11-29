import React, { Component } from 'react';
import { ImageBackground } from 'react-native';
import { Container, Content, Text, List, ListItem } from 'native-base';
import FAIcon from 'react-native-vector-icons/FontAwesome';

const routes = ['Inicio', 'Mi cuenta', 'Mis pedidos', 'Favoritos', 'Ajustes', 'Administrador'];

export default class SideBar extends Component {
  render() {
    return (
      <Container>
        <Content>
          <ImageBackground
            source={require('../../images/backDrawer.jpg')} 
            style={{
              height: 120,
              alignSelf: 'stretch',
            }}>
            <FAIcon name="user-circle" style={{ fontSize: 52, color: 'white', padding: '5%' }} />
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
