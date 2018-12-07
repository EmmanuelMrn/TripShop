import React, { Component } from 'react';
import { Text, Button, View, TextInput, Keyboard, TouchableWithoutFeedback, ToastAndroid } from 'react-native';
import firebase from '@firebase/app';
import 'firebase/database';

const DismissKeyboard = ({ children }) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      {children}
    </TouchableWithoutFeedback>
  );
  
class AdminComponent extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            titulo: '',
            color: '',
            precio: '',
        };
      }

    onButtonPress() {
        const { email, password } = this.state;

        this.setState({ error: '', loading: true });

        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(this.onLoginSuccess.bind(this))
        .catch(this.onLoginFail.bind(this));
    }

    addItem() {
        if (!this.state.titulo) return;
        if (!this.state.precio) return;
        if (!this.state.color) return;
        
        var title = this.state.titulo;
        var price = this.state.precio;
        var col = this.state.color;
        var cart = false;
        var favorite = false;

        firebase.database().ref('playeras/')
          .push({ title, price, col, cart, favorite });

        ToastAndroid.show('Playera registrada', ToastAndroid.SHORT);
    }

    render() {
        const { container, containerInputs, input, buttonContainer } = styles;
        return (
            <DismissKeyboard>
            <View style={container}>
                <View style={containerInputs}>
                    <TextInput
                        style={input}
                        placeholder='Titulo'
                        value={this.state.titulo}
                        onChangeText={(text) => this.setState({ titulo: text })}
                    />
                    <TextInput
                        style={input}
                        placeholder='Color'
                        value={this.state.color}
                        onChangeText={(color) => this.setState({ color })}
                    />

                    <TextInput
                        style={input}
                        placeholder='Precio'
                        value={this.state.precio}
                        onChangeText={(precio) => this.setState({ precio })}
                    />
                </View>
                <View style={buttonContainer}>
                    <Button style={styles.buttonText} title='Registrar playera' onPress={this.addItem.bind(this)} />
                </View>
            </View>
            </DismissKeyboard>
        );
    }
}

const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    },
    container: {
        justifyContent: 'center',
    },
    containerInputs: {
        backgroundColor: '#fff',
      },
      input: {
        color: '#000',
        fontSize: 16,
        marginHorizontal: 35,
        marginVertical: 10,
        borderBottomColor: '#000',
        borderBottomWidth: 0.2,
      },
      buttonContainer: {
        marginHorizontal: 35,
      },
      buttonText: {
        color: '#fff',
        fontWeight: '900',
        fontSize: 14,
        padding: 8,
        alignText: 'center',
        backgroundColor: '#607D8B',
      },
};

export default AdminComponent;
