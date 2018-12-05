import React, { Component } from 'react';
import { View, Button, StyleSheet } from 'react-native';
//import * as firebase from 'firebase';
import firebase from '@firebase/app';
import LoginForm from '../components/login';
import HeaderComponent from '../components/header';
import AdminComponent from '../components/admin';
import Spinner from '../components/common/Spinner';

const styles = StyleSheet.create({
    buttonLogOut: {
        marginTop: 10,
    },
});

class AdminContainer extends Component {
    state = {
        loggedIn: null
    };

    componentWillMount() {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ loggedIn: true });
            } else {
                this.setState({ loggedIn: false });
            }
        });
    }

    renderContent() {
        const { buttonLogOut } = styles;
        switch (this.state.loggedIn) {
          case true:
            return (
                <View>
                    <AdminComponent />
                    <Button title="Log out" style={buttonLogOut} onPress={() => firebase.auth().signOut()} />
                </View>
            );
          case false:
            return <LoginForm />;
          default:
            return <Spinner size="large" />;
        }
      }
    
    render() {
        return (
          <View>
            <HeaderComponent navigation={this.props.navigation} title={'Administrador'} />
            {this.renderContent()}
          </View>
        );
    }
}

export default AdminContainer;
