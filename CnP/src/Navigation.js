import React from 'react';
import { Component } from 'react';
import { StyleSheet, Image, Text, View, ImageBackground, TouchableOpacity } from 'react-native';
import { Button, Avatar} from 'react-native-elements'
// import {GoogleSignin, GoogleSigninButton} from 'react-native-google-signin';


export default class LogIn extends React.Component {
  render() {
    return (
      <View style={bar.container}>
        <View style={menu.container}>
        <Image
        style={img.container}
          source={require('./menu.svg')}
        />
        <Text></Text>
        <TouchableOpacity onPress={this._onPressButton}>

            <Text
                style={menufont.container}
            >
                <Image
                    style={img.container}
                    source={require('./menu.svg')}
                />
                &nbsp;Account
            </Text>
        </TouchableOpacity>
        <Text></Text>
        <TouchableOpacity onPress={this._onPressButton}>
            <Text
                style={menufont.container}
            >
                Your Bill
            </Text>
        </TouchableOpacity>
        <Text></Text>

        <TouchableOpacity onPress={this._onPressButton}>
            <Text
                style={menufont.container}
            >
                Food/Drinks
            </Text>
        </TouchableOpacity>
        <Text></Text>

        <TouchableOpacity onPress={this._onPressButton}>
            <Text
                style={menufont.container}
            >
                Reservations
            </Text>
        </TouchableOpacity>
        <Text></Text>

        <TouchableOpacity onPress={this._onPressButton}>
            <Text
                style={menufont.container}
            >
                History
            </Text>
        </TouchableOpacity>
        <Text></Text>

        <TouchableOpacity onPress={this._onPressButton}>
            <Text
                style={menufont.container}
            >
                Contact Us
            </Text>
        </TouchableOpacity>
        <Text></Text>

        <TouchableOpacity onPress={this._onPressButton}>
            <Text
                style={menufont.container}
            >
                Log In
            </Text>
        </TouchableOpacity>
        </View>        
      </View>
    );
  }
}

const bar = StyleSheet.create({
    container: {
      height: "100%",
      width: '20%',
      marginRight: '80%',
      backgroundColor: '#191919',
      alignItems: 'center',
      justifyContent: 'center',
      },
  });

const menu = StyleSheet.create({
container: {
    marginBottom: '350%',
    backgroundColor: '#191919',
    alignItems: 'center',
    justifyContent: 'center',
    },
});  

const img = StyleSheet.create({
    container: {
        height:20,
        width: 20,
        justifyContent: 'center',
        backgroundColor: 'white',
        },
    });  
    


const menufont = StyleSheet.create({
  container: {
    backgroundColor: '#191919',
    color: 'white',
    fontSize: 20,
    height:30,
  },
});

