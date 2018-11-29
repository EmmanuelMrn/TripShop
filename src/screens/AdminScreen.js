import React, { Component } from 'react';
import { View, Button } from 'react-native';
//import * as firebase from 'firebase';
import firebase from '@firebase/app';
import LoginForm from '../components/login';
import HeaderComponent from '../components/header';
import AdminComponent from '../components/admin';
import Spinner from '../components/common/Spinner';

class AdminContainer extends Component {
    state = {
        loggedIn: null
    };

    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyCcLmlNKTCehAYCqUtId5yPmh3w2MVSQaM',
            authDomain: 'authreactnative-75113.firebaseapp.com',
            databaseURL: 'https://authreactnative-75113.firebaseio.com',
            projectId: 'authreactnative-75113',
            storageBucket: 'authreactnative-75113.appspot.com',
            messagingSenderId: '93985325380'
        });

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ loggedIn: true });
            } else {
                this.setState({ loggedIn: false });
            }
        });
    }

    renderContent() {
        switch (this.state.loggedIn) {
          case true:
            return (
                <View>
                    <AdminComponent />
                    <Button title="Log out" onPress={() => firebase.auth().signOut()} />
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
