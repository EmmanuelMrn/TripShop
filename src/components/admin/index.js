import React, { Component } from 'react';
import { Text, Button, View, TextInput, Keyboard, TouchableWithoutFeedback } from 'react-native';
import firebase from '@firebase/app';
import '@firebase/auth';

const DismissKeyboard = ({ children }) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      {children}
    </TouchableWithoutFeedback>
  );
  
class AdminComponent extends Component {
    state = { titulo: '', color: '', talla: '', precio: '', url: '' };

    onButtonPress() {
        const { email, password } = this.state;

        this.setState({ error: '', loading: true });

        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(this.onLoginSuccess.bind(this))
        .catch(this.onLoginFail.bind(this));
    }

    render() {
        const { container, containerInputs, errorTextStyle, input, buttonContainer } = styles;
        return (
            <DismissKeyboard>
            <View style={container}>
                <View style={containerInputs}>
                    <TextInput
                        style={input}
                        placeholder="Titulo"
                        value={this.state.titulo}
                        onChangeText={titulo => this.setState({ titulo })}
                    />
                    <TextInput
                        style={input}
                        placeholder="Color"
                        value={this.state.color}
                        onChangeText={color => this.setState({ color })}
                    />
                    <TextInput
                        style={input}
                        placeholder="Talla"
                        value={this.state.talla}
                        onChangeText={talla => this.setState({ talla })}
                    />

                    <TextInput
                        style={input}
                        placeholder="Precio"
                        value={this.state.precio}
                        onChangeText={precio => this.setState({ precio })}
                    />
                    <TextInput
                        style={input}
                        placeholder="url"
                        value={this.state.url}
                        onChangeText={url => this.setState({ url })}
                    />
                </View>

                <View style={buttonContainer}>
                    <Button style={styles.buttonText} title='Log in' onPress={this.onButtonPress.bind(this)} />
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
        paddingTop: '30%',
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
