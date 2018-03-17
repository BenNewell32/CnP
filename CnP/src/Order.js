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
import Navbar from './Navbar.js'
import Drinks from './Drinks.js'


let width = Dimensions.get('window').width;

var test='test';
export default class Order extends Component<{}> {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    console.log(`${JSON.stringify(this.props)} \n^^^^^^^^^^^^^^^^^\nthis is zee props for zee orderz`);
  }
  render() {
    return (
      <View backgroundColor='white'>
        <Navbar userState={this.props.userState} navigator={this.props.navigator}/>
        <ScrollView
          marginTop={40}
        >
          <TouchableOpacity
            style={styles.container}
            onPress={
              () =>
                this.props.navigator.push({
                  title: 'FoodDrinks',
                  component: FoodDrinks,
                  passProps: {userState: this.props.userState}
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
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.container}
            onPress={
              () =>
                this.props.navigator.push({
                  title: 'Drinks',
                  component: Drinks,
                  passProps: {userState: this.props.userState}
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
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.container}
            onPress={
              () =>
                this.props.navigator.push({
                  title: 'Pickleball',
                  component: Pickleball,
                  passProps: {userState: this.props.userState}
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
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.container}
            onPress={
              () =>
                this.props.navigator.push({
                  title: 'Events',
                  component: Events,
                  passProps: {userState: this.props.userState}
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
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.container}
            onPress={
              () =>
                this.props.navigator.push({
                  title: 'MapPage',
                  component: MapPage,
                  passProps: {userState: this.props.userState}
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
      height: 200
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
    // marginTop: '90%',
  },
});
