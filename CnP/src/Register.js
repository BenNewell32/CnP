import React from 'react';
import { Component } from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import {Icon, Button, Avatar} from 'react-native-elements'
import Navigation from './Navigation.js'
import App from '../App.js'
import YourBill from './YourBill.js'
import FoodDrinks from './FoodDrinks.js'
import Pickleball from './Pickleball.js'
import Events from './Events.js'
import AboutContact from './AboutContact.js'
import SetLocation from './SetLocation.js'
import LogOut from './LogOut.js'

export default class Register extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Icon
              name='user'
              type='evilicon'
              color='black'
              underlayColor='white'
              size={200}
            />
        <Text/>
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
      </View>
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
    marginTop: '90%',
  },
});

