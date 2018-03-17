'use strict';

import React, { Component } from 'react'
import { Button, Avatar, Icon} from 'react-native-elements'
import {Linking, StyleSheet, Image, View, TouchableHighlight, TouchableOpacity, FlatList, Text, ImageBackground,Br,TabBarIOS} from 'react-native';
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
// import Icon from 'react-native-vector-icons/Ionicons'

let pageName='About / Contact';
export default class AboutContact extends Component<{}> {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <View style={styles.MainContainer}>
         <Navbar userState={this.props.userState} navigator={this.props.navigator} route='AboutContact'/>


        <View style={{marginTop: 50, flexDirection: 'column', flex: 1}} >
        <Text style={{fontSize:25, textAlign: 'center'}}>VISIT US</Text>
        <MapView
            style={styles.mapContainer}
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

          <View style={{flexDirection: 'row'}}>

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
            flexDirection: 'row',
            margin: 2
          }}
          onPress={() =>
            Linking.openURL('https://maps.google.com?q=Chicken+N+Pickle+1761+Burlington+St.+North+Kansas+City,+MO+64116')
          }
          />

          <Button
            textStyle={{
              textAlign:'left',
              justifyContent:'left'
            }}
            title='Phone'
            buttonStyle={{
              backgroundColor: "#191919",
              borderColor: "transparent",
              borderWidth: 0,
              flexDirection: 'row',
              margin: 2
            }}
            onPress={() =>
              Linking.openURL('tel:8163929914')
            }
          />
          <Button
            textStyle={{
              textAlign:'left',
              justifyContent:'left'
            }}
            title='Contact Us'
            buttonStyle={{
              backgroundColor: "#191919",
              borderColor: "transparent",
              borderWidth: 0,
              margin: 2,

              flexDirection: 'row'
            }}
            onPress={() =>
              Linking.openURL('mailto:info@chickennpickle.com')
            }
          />
      </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  MainContainer :{
    justifyContent: 'center',
    position: 'relative',
    flex:1,
  },
  mapContainer: {
    position: 'absolute',
    height: 420,
    width: '100%',
    marginTop: 50
    // zindex: '-999',
    // flex: 3,
    // left: 0,
    // right: 0,
    // top: 10,
    // // bottom: 200,
    //  bottom: 0,
    //  height: 100,
    //  width: '100%'
  }
});