import React, { Component } from 'react';
import { Text, Button, View, TextInput } from 'react-native';
import firebase from '@firebase/app';
import '@firebase/auth';
import { Spinner, Input } from '../common/Spinner';

class LoginForm extends Component {
    state = { email: '', password: '', error: '', loading: false };

    onButtonPress() {
        const { email, password } = this.state;

        this.setState({ error: '', loading: true });

        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(this.onLoginSuccess.bind(this))
        .catch(() => {
            firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(this.onLoginSuccess.bind(this))
            .catch(this.onLoginFail.bind(this));
        });
    }

    onLoginFail() {
        this.setState({ error: 'Authentication failed', loading: false });
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
        if (this.state.loading) {
            return <Spinner size="small" />;
        }
        
        return (
            <Button title='Log in' onPress={this.onButtonPress.bind(this)} />
        );
    }

    render() {
        return (
            <View>
                <View>
                    <TextInput
                        placeholder="user@email.com"
                        label="Email" 
                        value={this.state.email}
                        onChangeText={email => this.setState({ email })}
                    />
                    <TextInput
                        secureTextEntry
                        label="Password"
                        placeholder="********"
                        value={this.state.password}
                        onChangeText={password => this.setState({ password })}
                    />
                </View>

                <Text style={styles.errorTextStyle}>
                    {this.state.error}
                </Text>

                <View>
                    {this.renderButton()}
                </View>
            </View>
        );
    }
}

const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
};

export default LoginForm;
