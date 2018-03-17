'use strict';

import React, { Component } from 'react'
import {Icon, Button, Avatar} from 'react-native-elements'
import {Linking, StyleSheet, Image, View, TouchableHighlight, TouchableOpacity, FlatList, Text, ImageBackground,Br} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from "react-native-maps"
import Navigation from "./Navigation.js"
import Home from '../App.js'
import YourBill from './YourBill.js'
import FoodDrinks from './FoodDrinks.js'
import Pickleball from './Pickleball.js'
import Events from './Events.js'
import SetLocation from './SetLocation.js'
import LogOut from './LogOut.js'
import WatchLocation from './WatchLocation.js'
import Register from './Register.js'
import LogIn from './LogIn.js'
import MapPage from './MapPage.js'
import Navbar from './Navbar.js'

let pageName='About / Contact';
export default class AboutContact extends Component<{}> {
  constructor(props){
    super(props)

  }

  render() {
    return (
      <View>
        <View>
          <Navbar
            userState={this.props.userState}
            pageName={pageName}
            navigator={this.props.navigator}
            route='AboutContact'
          />
        </View>
        <View>
        <Text style={{marginTop: 50}} >
          Contact Us
        </Text>
        </View>
        <View style={{marginTop: 50, flexDirection: 'row'}} >
        <MapView
            style={styles.map}
            showsUserLocation={ true }
            initialRegion={{
              latitude: 39.140117,
              longitude: -94.579951,
              latitudeDelta: 0.00422,
              longitudeDelta: 0.00421,
            }}

          >
          </MapView>
          </View>
          <View style={{marginTop: 50}} >
            <Text>
            </Text>
            <Button
              textStyle={{
                textAlign:'center',
                justifyContent:'center'
              }}
              title={'Directions'}
              buttonStyle={{
                backgroundColor: "#191919",
                borderColor: "transparent",
                borderWidth: 0,
                borderRadius: 5
              }}
              onPress={() =>
                Linking.openURL('https://maps.google.com?q=Chicken+N+Pickle+1761+Burlington+St.+North+Kansas+City,+MO+64116')
              }
              />
              <Text>
              </Text>
              <Button
                textStyle={{
                  textAlign:'left',
                  justifyContent:'left'
                }}
                title='phone'
                buttonStyle={{
                  backgroundColor: "#191919",
                  borderColor: "transparent",
                  borderWidth: 0,
                  borderRadius: 5
                }}
                onPress={() =>
                  Linking.openURL('tel:7856335715')
                }
              />
          </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({

  map: {
    position: 'relative',
    // zindex: '-999',
    left: 0,
    right: 0,
    top: 50,
    bottom: 200,
     bottom: 0,
     height: 300,
     width: '100%'
  }
});