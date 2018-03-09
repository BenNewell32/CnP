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


  render() {
    return (
      <View backgroundColor='white'>
      <WatchLocation/>
        <View style={{ flexDirection: 'row', backgroundColor: '#9EBA48'}}>
          <View style={{width: '100%', height: 25, backgroundColor: '#9EBA48'}} />
        </View>
        <View style={{flex: 1, justifyContent: 'center', flexDirection: 'row', backgroundColor: '#9EBA48'}}>
          <View style={{width: 20, height: 40, backgroundColor: '#9EBA48'}}>
          </View>
          <View style={{width: 50, height: 40, backgroundColor: '#9EBA48'}}>
            <Icon
              name='user'
              type='evilicon'
              color='black'
              underlayColor='white'
              size={40}
              onPress={
                () => 
                this.props.navigator.push({
                  title: 'LogIn',
                  component: LogIn,
                })
              }
            />
          </View>
          <View style={{width: 50, height: 40, backgroundColor: '#9EBA48'}}>
            <Icon
              name='credit-card'
              type='evilicon'
              color='black'
              underlayColor='white'
              size={40}
              onPress={
                () => 
                this.props.navigator.push({
                  title: 'Your Bill',
                  component: YourBill,
                })
              }
            />
          </View>
          <View style={{width: 50, height: 40, backgroundColor: '#9EBA48'}}>
            <Icon 
              name='local-dining'
              color='black'
              underlayColor='white'
              size={30}
              onPress={
                () => 
                this.props.navigator.push({
                  title: 'Food and Drinks',
                  component: FoodDrinks,
                })
              }
            />
          </View>
          <View style={{width: 50, height: 40, backgroundColor: '#9EBA48'}}>
            <Icon
              name='local-bar'
              color='black'
              underlayColor='white'
              size={30}
              onPress={
                () => 
                this.props.navigator.push({
                  title: 'Food and Drinks',
                  component: FoodDrinks,
                })
              }
            />
          </View>
          <View style={{width: 50, height: 40, backgroundColor: '#9EBA48'}}>
            <Icon
              name='trophy'
              type='evilicon'
              color='black'
              underlayColor='white'
              size={40}
              onPress={
                () => 
                this.props.navigator.push({
                  title: 'Your Bill',
                  component: YourBill,
                })
              }
            />
          </View>
          <View style={{width: 50, height: 40, backgroundColor: '#9EBA48'}}>
            <Icon
              name='calendar'
              type='evilicon'
              color='black'
              underlayColor='white'
              size={40}
              onPress={
                () => 
                this.props.navigator.push({
                  title: 'Food and Drinks',
                  component: FoodDrinks,
                })
              }
            />
          </View>
          <View style={{width: 50, height: 40, backgroundColor: '#9EBA48'}}>
            <Icon
              name='sc-telegram'
              type='evilicon'
              color='black'
              underlayColor='white'
              size={40}
              onPress={
                () => 
                this.props.navigator.push({
                  title: 'Food and Drinks',
                  component: FoodDrinks,
                })
              }
            />
          </View>
          <View style={{width: 50, height: 40, backgroundColor: '#9EBA48'}}>
            <Icon
              name='location'
              type='evilicon'
              color='black'
              underlayColor='white'
              size={40}
              onPress={
                () => 
                this.props.navigator.push({
                  title: 'MapPage',
                  component: MapPage,
                })
              }
            />
          </View>
          <View style={{width: 20, height: 40, backgroundColor: '#9EBA48'}}>
          </View>
        </View>
        <ScrollView>
          <TouchableOpacity
            style={styles.container}
            onPress={
              () =>
                this.props.navigator.push({
                  title: 'FoodDrinks',
                  component: FoodDrinks,
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
                  title: 'FoodDrinks',
                  component: FoodDrinks,
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
