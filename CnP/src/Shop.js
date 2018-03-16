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
export default class Shop extends Component<{}> {

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
      <View style={styles.MainContainer}>
      <Navbar 
      navigator={this.props.navigator}
      route='Shop'/>
      <Text>
        Shop Page
        </Text>
      <ListView
        style={styles.NavContainer}
        // dataSource={this.state.dataSource}
        // renderSeparator= {this.ListViewItemSeparator}
        // renderRow={(rowData) => <Text style={styles.rowViewContainer} 
        // onPress={this.GetItem.bind(this, rowData.product_description)} >{rowData.product_description}</Text>}        
      />
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
