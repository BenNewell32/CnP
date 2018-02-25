import React from 'react';
import { Component } from 'react';
import { StyleSheet, Image, Text, View, ImageBackground, TouchableOpacity } from 'react-native';
import {Icon, Button, Avatar} from 'react-native-elements'
// import {GoogleSignin, GoogleSigninButton} from 'react-native-google-signin';
import WatchLocation from './WatchLocation.js'
import Home from '../App.js'
import YourBill from './YourBill.js'
import FoodDrinks from './FoodDrinks.js'
import Pickleball from './Pickleball.js'
import Events from './Events.js'
import AboutContact from './AboutContact.js'
import SetLocation from './SetLocation.js'
import LogOut from './LogOut.js'

export default class LogIn extends React.Component {
  render() {
    return (
        
      <View style={bar.container}>
        <View  style={menu.container}>
        <Text></Text>
        <TouchableOpacity onPress={this._onPressButton}>
            <Icon
                name='navicon'
                type='evilicon'
                color='white'
                underlayColor='white'
                size={40}
            />
        </TouchableOpacity>
        <Text></Text>
        <TouchableOpacity onPress={this._onPressButton}>
        
            <Icon
                name='credit-card'
                type='evilicon'
                color='#9EBA48'
                underlayColor='white'
                size={20}
            />
            <Text
                style={menufont.container}
            >
            
                Your Bill
            </Text>
        </TouchableOpacity>
        <Text></Text>

        <TouchableOpacity  onPress={this._onPressButton}>
            <Icon 
                name='local-dining'
                color='#9EBA48'
                underlayColor='white'
                size={20}
            />
            <Icon
                name='local-bar'
                color='#9EBA48'
                underlayColor='white'
                size={20}
            />
            <Text
                style={menufont.container}
            >
                Food/Drinks
            </Text>
        </TouchableOpacity>
        <Text></Text>

        <TouchableOpacity onPress={this._onPressButton}>
            <Icon
                name='location'
                type='evilicon'
                color='#9EBA48'
                underlayColor='white'
                size={20}
            />
            <Text
                style={menufont.container}
            >
                Set Location
            </Text>
        </TouchableOpacity>
        <Text></Text>

        <TouchableOpacity onPress={this._onPressButton}>
            <Icon
                name='calendar'
                type='evilicon'
                color='#9EBA48'
                underlayColor='white'
                size={20}
            />
            <Text
                style={menufont.container}
            >
                Reservations
            </Text>
        </TouchableOpacity>
        <Text></Text>

        <TouchableOpacity onPress={this._onPressButton}>
            <Icon
                name='clock'
                type='evilicon'
                color='#9EBA48'
                underlayColor='white'
                size={20}
            />
            <Text
                style={menufont.container}
            >
                History
            </Text>
        </TouchableOpacity>
        <Text></Text>

        <TouchableOpacity onPress={this._onPressButton}>
            <Icon
                name='sc-telegram'
                type='evilicon'
                color='#9EBA48'
                underlayColor='white'
                size={20}
            />
            <Text
                style={menufont.container}
            >
                Contact Us
            </Text>
        </TouchableOpacity>
        <Text></Text>

        <TouchableOpacity onPress={this._onPressButton}>
            <Icon
                name='user'
                type='evilicon'
                color='#9EBA48'
                underlayColor='white'
                size={20}
            />
            <Text
                style={menufont.container}
            >
                Log In
            </Text>
        </TouchableOpacity>
        </View>       
        <WatchLocation>
        </WatchLocation>
      </View>
    );
  }
}

const bar = StyleSheet.create({
    container: {
      height: "100%",
      width: 200,
      marginRight: '60%',
      marginTop: '30%',
      backgroundColor: '#191919',
      alignItems: 'center',
      justifyContent: 'center',
      },
  });

const menu = StyleSheet.create({
container: {
    marginBottom: '-10%',
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

