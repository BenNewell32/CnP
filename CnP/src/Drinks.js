'use strict';

import React, { Component } from 'react'
import {Icon, Button, Avatar} from 'react-native-elements'
import { StyleSheet, Image, View, TouchableHighlight, TouchableOpacity, FlatList, Text, ImageBackground, SectionList, AppRegistry,  ActivityIndicator, ListView, Alert, TabBarIOS, AlertIndicatorIOS, ActivityIndicatorIOS, AlertIOS,Br, SegmentedControlIOS} from 'react-native';
import Navigation from "./Navigation.js"
// import ProductContainer from './components/Order/ProductContainer' 
import BasketComponent from './components/Order/BasketComponent' 
import Header from './components/Order/Header' 
import Footer from './components/Order/Footer.js' 
import Products from './components/Order/Products.js' 
import ModalExample from './components/Order/Modal.js'
import Home from '../App.js'
import YourBill from './YourBill.js'
import Pickleball from './Pickleball.js'
import Events from './Events.js'
import AboutContact from './AboutContact.js'
import SetLocation from './SetLocation.js'
import LogOut from './LogOut.js'
import WatchLocation from './WatchLocation.js'
import FoodDrinks from './FoodDrinks.js'
import Register from './Register.js'
import LogIn from './LogIn.js'
import Navbar from './Navbar.js'



// let products = [];
// let prodID;
// let prodImg;
// let prodPrice;
// let sides=[];

export default class Drinks extends Component {

  render(){
    return(
      <View style={{flex: 1}}>
        <Navbar navigator={this.props.navigator} route='Drinks'/>
        <Header />
          <View style={styles.containterStyleP}>
            <Products />
          </View>
          <BasketComponent />
          <Footer />
          <TouchableOpacity 
            style={{backgroundColor:'yellow'}}
            onPress={
              () => 
              this.props.navigator.push({
                title: 'Drinks',
                component: Drinks,
              })
            }  
          >
           </TouchableOpacity>
           </View>
    );
  }
}
const styles = {
  containterStyleP: {
    flex: 4,
    backgroundColor: '#DCDCDC'
  }
};




AppRegistry.registerComponent('Drinks', () => Drinks);