'use strict';

import React, { Component } from 'react'
import {Icon, Button, Avatar} from 'react-native-elements'
import { StyleSheet, Image, View, TouchableHighlight, TouchableOpacity, FlatList, Text, ImageBackground, SectionList, AppRegistry,  ActivityIndicator, ListView, Alert, TabBarIOS, AlertIndicatorIOS, ActivityIndicatorIOS, AlertIOS,Br} from 'react-native';
import Navigation from "./Navigation.js"
import Home from '../App.js'
import FoodDrinks from './FoodDrinks.js'
import Pickleball from './Pickleball.js'
import Events from './Events.js'
import AboutContact from './AboutContact.js'
import SetLocation from './SetLocation.js'
import LogOut from './LogOut.js'
import WatchLocation from './WatchLocation.js'
// import Drinks from './Drinks.js'
import Register from './Register.js'
import LogIn from './LogIn.js'
import Navbar from './Navbar.js'
import YourOrders from './YourOrders.js'
import ItemContainer from './components/Cart/ItemContainer'
import BasketComponent from './components/Cart/BasketComponent'
import Header from './components/Cart/Header'
import Footer from './components/Cart/Footer.js'

export default class YourBill extends Component {
  constructor(props){
    super(props)

  }

  render() {
    return (
      <View style={{ flex: 1}}>
        <Navbar userState={this.props.userState} navigator={this.props.navigator} route='YourBill'/>
        <Header />
          <ItemContainer />
          <BasketComponent />
          <Footer />
          <TouchableOpacity
            style={{backgroundColor:'yellow'}}
            onPress={
              () =>
              this.props.navigator.push({
                title: 'YourOrders',
                component: YourOrders,
              })
            }
          >
            <Text style={{textAlign: 'center'}}>
              View Previous Orders
            </Text>
            <Icon
                name='clock'
                type='evilicon'
                color='black'
                underlayColor='white'
                size={40}
              />
          </TouchableOpacity>
      </View>

     );
  }
}

AppRegistry.registerComponent('YourBill', () => YourBill);