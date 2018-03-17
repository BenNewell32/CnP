'use strict';

import React, { Component } from 'react'
import {Icon, Button, Avatar} from 'react-native-elements'
import { StyleSheet, Image, View, TouchableHighlight, TouchableOpacity, FlatList, Text, ImageBackground,Linking} from 'react-native';
import Navigation from "./Navigation.js"
import Home from '../App.js'
import YourBill from './YourBill.js'
import FoodDrinks from './FoodDrinks.js'
import Events from './Events.js'
import AboutContact from './AboutContact.js'
import SetLocation from './SetLocation.js'
import LogOut from './LogOut.js'
import WatchLocation from './WatchLocation.js'
import Register from './Register.js'
import LogIn from './LogIn.js'
import MapPage from './MapPage.js'
import Navbar from './Navbar.js'

// var test='test';
export default class Pickleball extends Component<{}> {

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
      <Navbar userState={this.props.userState} navigator={this.props.navigator } route='Pickleball'/>
        <View style={styles.containterStyle}>
        {/* <Text style={styles.Header}>Pickleball</Text> */}
        <Text style={styles.headerTwo}>Open Play</Text>
        <View style={styles.rates}>

        <Text>$5 per person</Text>
        <Text> $3 for a paddle</Text>
        <Text>$3 for a pickleball</Text>
        <Text>Open Play is on Outdoor Courts 1 {'&'} 2. To purchase Open Play, please go to the Pickleball Counter at the Main Bar.</Text>
        <Text></Text>
        </View>
        <Text style={styles.headerTwo}>Book A Court</Text>
        <View style={styles.rates}>
        <Text>RATES:</Text>
        <Text>Mon-Fri: 8-5pm-$20/hr</Text>
        <Text>     5pm-close- $40/hr</Text>
        <Text>Weekends 8am-close- $40/hr</Text>
        </View>
        <Button
              textStyle={{
                alignContent:'center',
                justifyContent:'center'
              }}
              title={'Indoor Court'}
              buttonStyle={{
                backgroundColor: "#191919",
                borderColor: "transparent",
                borderWidth: 0,
                borderRadius: 5,
                margin: 5
              }}
              onPress={() =>
                Linking.openURL('https://www.planyo.com/booking.php?mode=reserve&calendar=34774&resource_id=106374')
              }
              />
               <Button
              textStyle={{
                alignContent:'center',
                justifyContent:'center'
              }}
              title={'Outdoor Court'}
              buttonStyle={{
                backgroundColor: "#191919",
                borderColor: "transparent",
                borderWidth: 0,
                borderRadius: 5,
                margin: 5
              }}
              onPress={() =>
                Linking.openURL('https://www.planyo.com/booking.php?mode=reserve&calendar=34774&resource_id=106374')
              }
              />
        </View>
    </View>
    );
  }
}


const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    backgroundColor: '#9EBA48',
    justifyContent: 'center'
    },
    containterStyle: {
      marginTop: 35,
      flex: 2,
      backgroundColor: 'white',
      justifyContent: 'center'
    },
    // Header: {
    // fontSize: 22,
    // flex: 2,
    //  elevation: 2,
    //  marginTop: 25,
    // //  flexDirection: 'row',
    //  justifyContent: 'space-between',
    //  alignItems: 'center',
    //  paddingLeft: 10,
    //  paddingRight: 10,
    // },
    headerTwo: {
      fontSize: 25,
      alignContent: 'center',
      margin: 5,
      alignItems: 'center',
      justifyContent: 'space-between'
    },
    rates: {
      alignContent: 'center',
      alignItems: 'center',
      margin: 2,
    }
});







// const styles2 = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#9EBA48',
//     alignItems: 'center',
//     justifyContent: 'center',
//     fontSize: 25,
//     marginTop: '90%',
//   },
// });