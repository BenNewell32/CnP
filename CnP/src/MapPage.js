'use strict';

import React, { Component } from 'react'
import {Icon, Button, Avatar, Header} from 'react-native-elements'
import { StyleSheet, Image, View, TouchableHighlight, TouchableOpacity, FlatList, Text, ImageBackground, ScrollView, Dimensions, Br} from 'react-native';
import Navigation from "./Navigation.js"
import Home from '../App.js'
import YourBill from './YourBill.js'
import FoodDrinks from './FoodDrinks.js'
import Pickleball from './Pickleball.js'
import Events from './Events.js'
import AboutContact from './AboutContact.js'
import SetLocation from './SetLocation.js'
import LogOut from './LogOut.js'
import WatchLocation from './WatchLocation.js'
import Register from './Register.js'
import LogIn from './LogIn.js'
import MapPage from './MapPage.js'


let width = Dimensions.get('window').width;

var test='test';
export default class Order extends Component<{}> {

  _keyExtractor = (item, index) => index;

  _renderItem = (test) => {
    return (
      <TouchableHighlight
        underlayColor='white'>
      </TouchableHighlight>
    );
    
  };

  render() {
    return (
      <View backgroundColor='white'>
          <Header
            backgroundColor='white'
            flexDirection='row'>
            <TouchableOpacity
              onPress={alert}>
              <Icon
                paddingTop={30}
                name='menu'
                color='#9EBA48'
                underlayColor='white'
                size={30}/>
            </TouchableOpacity>
            <Image
          style={{marginRight: '20%', width: 200, height: 60}}
          source={{uri: 'http://cdn.cybergolf.com/images/1844/Chicken-n-Pickle-2.jpg'}}
        />          
        </Header>
      <ScrollView>
      <Button
          style={styles.table1}
        >
            Table 1
        </Button>
        <TouchableOpacity
          style={styles.container}
          // onPress={
          //   () =>
          //     this.props.navigator.push({
          //       title: 'Your Bill',
          //       component: YourBill,
          //     })}
          >
          <Image source={require('../public/images/floorplan.png')} style={styles.image} resizeMode='cover'>
          </Image>
          
        </TouchableOpacity>
        
        
      </ScrollView>
      </View>
    );
  }
} 


const styles = StyleSheet.create({
  container: {
      width: width,
      paddingTop: 2.5,
      paddingBottom: 2.5,
      flex: 1,
      backgroundColor: '#9EBA48',
      alignItems: 'center',
      justifyContent: 'center',
    },
  image: {
      alignSelf: 'stretch',
      justifyContent: 'center',
      alignItems: 'center',
      height: 400
    },
  textStyle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#ffffff'
  },
  table1: {
    position: 'absolute',
    zindex: '-999',
    fontSize:30
  }
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
