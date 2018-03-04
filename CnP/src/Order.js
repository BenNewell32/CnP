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
        <TouchableOpacity
          style={styles.container}
          onPress={
            () =>
              this.props.navigator.push({
                title: 'Your Bill',
                component: YourBill,
              })}>
          <ImageBackground source={require('../public/images/chicken.jpg')} style={styles.image} resizeMode='cover'>
            <View style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              alignSelf: 'stretch',
              backgroundColor: 'rgba(0,0,0,0.5)'
            }}>
              <Text style={[styles.textStyle, { backgroundColor: 'transparent' }]}>Your Orders</Text>
            </View>
          </ImageBackground>
        </TouchableOpacity>
        <TouchableHighlight
          style={styles.container}
          onPress={
            () =>
              this.props.navigator.push({
                title: 'Your Bill',
                component: YourBill,
              })}>
          <ImageBackground source={require('../public/images/court.jpg')} style={styles.image} resizeMode='cover'>
            <View style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              alignSelf: 'stretch',
              backgroundColor: 'rgba(0,0,0,0.5)'
            }}>
              <Text style={[styles.textStyle, { backgroundColor: 'transparent' }]}>Pickleball</Text>
            </View>
          </ImageBackground>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.container}
          onPress={
            () =>
              this.props.navigator.push({
                title: 'Your Bill',
                component: YourBill,
              })}>
          <ImageBackground source={require('../public/images/beer.jpg')} style={styles.image} resizeMode='cover'>
            <View style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              alignSelf: 'stretch',
              backgroundColor: 'rgba(0,0,0,0.5)'
            }}>
              <Text style={[styles.textStyle, { backgroundColor: 'transparent' }]}>Drinks</Text>
            </View>
          </ImageBackground>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.container}
          onPress={
            () =>
              this.props.navigator.push({
                title: 'Your Bill',
                component: YourBill,
              })}>
          <ImageBackground source={require('../public/images/food.jpg')} style={styles.image} resizeMode='cover'>
            <View style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              alignSelf: 'stretch',
              backgroundColor: 'rgba(0,0,0,0.5)'
            }}>
              <Text style={[styles.textStyle, { backgroundColor: 'transparent' }]}>Food</Text>
            </View>
          </ImageBackground>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.container}
          onPress={
            () =>
              this.props.navigator.push({
                title: 'Your Bill',
                component: YourBill,
              })}>
          <ImageBackground source={require('../public/images/events.jpg')} style={styles.image} resizeMode='cover'>
            <View style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              alignSelf: 'stretch',
              backgroundColor: 'rgba(0,0,0,0.5)'
            }}>
              <Text style={[styles.textStyle, { backgroundColor: 'transparent' }]}>Events</Text>
            </View>
          </ImageBackground>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.container}
          onPress={
            () =>
              this.props.navigator.push({
                title: 'MapPage',
                component: MapPage,
              })}>
          <ImageBackground source={require('../public/images/contactus.jpg')} style={styles.image} resizeMode='cover'>
            <View style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              alignSelf: 'stretch',
              backgroundColor: 'rgba(0,0,0,0.5)'
            }}>
              <Text style={[styles.textStyle, { backgroundColor: 'transparent' }]}>Contact Us</Text>
            </View>
          </ImageBackground>
        </TouchableHighlight>
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
      height: 100
    },
    textStyle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#ffffff'
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
