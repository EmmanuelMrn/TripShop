import React, { Component } from 'react';
import { StyleSheet, Button } from 'react-native';
import { 
  Container,
  Header,
  Left,
  Right,
  Icon,
} from 'native-base';
import FAIcon from 'react-native-vector-icons/FontAwesome';

export default class DrawerContainer extends Component {
    static navigationOptions = {
        drawerLabel: 'Drawer',
        drawerIcon: () => (
            <FAIcon name="amazon" style={{ fontSize: 32, color: 'black' }} onPress={() => this.props.navigation.closeDrawer()} />
        ),
      };

  render() {
    return (
        <Button
        onPress={() => this.props.navigation.goBack()}
        title="Go back home"
        />
    );
  }
}
