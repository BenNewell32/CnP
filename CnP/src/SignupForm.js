import React, { Component }from 'react';
import { StyleSheet, Image, Text, TextInput, View, ImageBackground, TouchableOpacity, ScrollView, TouchableHighlight } from 'react-native';
import {Icon, Button, Avatar} from 'react-native-elements';

const t = require('tcomb-form-native');

const Form = t.form.Form;

const newUser = t.struct({
    username: t.String,
    email: t.String,
    password: t.String
})

export default class SignupForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: {
                username: '',
                email: '',
                password: ''
            }
      }
    }
    componentWillUnmount(){
        this.setState = {
            value: {
                username: '',
                email: '',
                password: ''
            }
        }
    }
    _onChange = (value) => {
        this.setState({
            value
        })
    }
    _handleAdd = () => {
        const value = this.refs.form.getValue();
        if(value) {
            const data = {
                username: value.username,
                email: value.email,
                password: value.password
            }
            const json = JSON.stringify(data);
            fetch('http://localhost:3000/users/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json'
                },
                body: json
                })
                .then((response) => response.json())
                .then(() => {
                    alert('Success! You may now log in.');
        // Redirect to home screen
                    this.props.navigator.pop();
                    })
                    .catch((error) => {
                        alert('There was an error creating your account.');
                    })
                    .done()
                    } else {
      // Form validation error
                        alert('Please fix the errors listed and try again.')
                    }
                }
    

    render(){
        return(
            <View style={styles.container}>
                <Form
                ref='form'
                type={newUser}
                value={this.state.value}
                onChange={this._onChange}
                />
            <TouchableHighlight onPress={this._handleAdd}>
                <Text style={[styles.button, styles.greenButton]}>Create account</Text>
            </TouchableHighlight>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 40,
      color: '#ffffff'
    },
    button: {
      borderRadius: 4,
      padding: 10,
      textAlign: 'center',
      marginBottom: 10,
      color: '#fff'
    },
    greenButton: {
      backgroundColor: '#4CD964'
    },
    centering: {
      alignItems: 'center',
      justifyContent: 'center'
    }
  })
