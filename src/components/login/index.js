import React, { Component } from 'react';
import { Text, Button, View, TextInput, Keyboard, TouchableWithoutFeedback } from 'react-native';
import firebase from '@firebase/app';
import '@firebase/auth';
import { Spinner } from '../common/Spinner';

const DismissKeyboard = ({ children }) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      {children}
    </TouchableWithoutFeedback>
  );
  
class LoginForm extends Component {
    state = { email: '', password: '', error: '', loading: false };

    onButtonPress() {
        const { email, password } = this.state;

        this.setState({ error: '', loading: true });

        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(this.onLoginSuccess.bind(this))
        .catch(this.onLoginFail.bind(this));
    }

    onLoginFail() {
        this.setState({ error: 'Credenciales incorrectas', loading: false });
    }

    onLoginSuccess() {
        this.setState({ 
            email: '',
            password: '',
            loading: false,
            error: ''
        });
    }

    renderButton() {
        // if (this.state.loading) {
        //     return <Spinner size="small" />;
        // }
        
        return (
            <Button style={styles.buttonText} title='Log in' onPress={this.onButtonPress.bind(this)} />
        );
    }

    render() {
        const { container, containerInputs, errorTextStyle, input, buttonContainer } = styles;
        return (
            <DismissKeyboard>
            <View style={container}>
                <View style={containerInputs}>
                    <TextInput
                        style={input}
                        placeholder="user@email.com"
                        value={this.state.email}
                        onChangeText={email => this.setState({ email })}
                    />
                    <TextInput
                        secureTextEntry
                        style={input}
                        placeholder="********"
                        value={this.state.password}
                        onChangeText={password => this.setState({ password })}
                    />
                </View>

                <Text style={errorTextStyle}>
                    {this.state.error}
                </Text>

                <View style={buttonContainer}>
                    {this.renderButton()}
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

export default LoginForm;
