'use strict';

import React, { Component } from 'react'
import {Icon, Button, Avatar} from 'react-native-elements'
import { StyleSheet, Image, View, TouchableHighlight, TouchableOpacity, FlatList, Text, ImageBackground,} from 'react-native';
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

var test='test';
export default class Order extends Component<{}> {

  _keyExtractor = (item, index) => index;

  _renderItem = (test) => {
    return (
      <TouchableHighlight
        underlayColor='#dddddd'>
      </TouchableHighlight>
    );
    
  };

  render() {
    return (
      <View backgroundColor='white'>
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
                  title: 'Pickleball',
                  component: Pickleball,
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
                  title: 'Events',
                  component: Events,
                })
              }
            />
          </View>
          <View style={{width: 50, height: 40, backgroundColor: '#9EBA48'}}>
            <Icon
              name='sc-telegram'
              type='evilicon'
              color='#5CA155'
              underlayColor='white'
              size={40}
              onPress={
                () => 
                this.props.navigator.push({
                  title: 'AboutContact',
                  component: AboutContact,
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
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9EBA48',
    // alignItems: 'left',
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
