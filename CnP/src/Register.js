import React from 'react';
import { Component } from 'react';
import { StyleSheet,KeyboardAvoidingView, Text, View, TextInput, ImageBackground } from 'react-native';
import { Button, Avatar} from 'react-native-elements'
import Navigation from './Navigation.js'
import App from '../App.js'
import YourBill from './YourBill.js'
import FoodDrinks from './FoodDrinks.js'
import Pickleball from './Pickleball.js'
import Events from './Events.js'
import AboutContact from './AboutContact.js'
import SetLocation from './SetLocation.js'
import LogOut from './LogOut.js'
import SignupForm from './SignupForm.js'
import Welcome from './Welcome.js'

export default class Register extends React.Component {
  render() {
    return (
      <KeyboardAvoidingView style={styles.container}>
        <Avatar
          large
          rounded
          // https://www.facebook.com/chickennpickle/photos/a.851614384894316.1073741825.851613691561052/1074970642558688/?type=1&theater
          source={{uri: "https://scontent.fmkc1-1.fna.fbcdn.net/v/t1.0-9/14212227_1074970642558688_7772776059154917138_n.jpg?oh=fb78a6d04d6c34b160f52b5e630d1a4c&oe=5B200FC6"}}
        />
        <SignupForm/>
        <Button
          textStyle={{textAlign:'center'}}
          title={'Return Home'}
          buttonStyle={{
            backgroundColor: "#191919",
            width: 300,
            height: 45,
            borderColor: "transparent",
            borderWidth: 0,
            borderRadius: 5
          }}
          onPress={ 
            () => 
            this.props.navigator.popToTop()
          }
        />
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9EBA48',
    alignItems: 'center',
    justifyContent: 'center',
    },
});


const styles2 = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9EBA48',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 25,
    marginTop: '70%',
  },
});

