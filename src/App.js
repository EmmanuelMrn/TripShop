import React from 'react';
import firebase from '@firebase/app';
import SplashScreen from 'react-native-splash-screen';
import Navigator from './Navigator';

//console.disableYellowBox = true;

export default class App extends React.Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyCcLmlNKTCehAYCqUtId5yPmh3w2MVSQaM',
      authDomain: 'authreactnative-75113.firebaseapp.com',
      databaseURL: 'https://authreactnative-75113.firebaseio.com',
      projectId: 'authreactnative-75113',
      storageBucket: 'authreactnative-75113.appspot.com',
      messagingSenderId: '93985325380'
  });
  }

  componentDidMount() {
    SplashScreen.hide();
  }

  render() {
    return (
      <Navigator />
    );
  }
}

