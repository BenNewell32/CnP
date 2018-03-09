'use strict';

import React, { Component } from 'react'
import {Icon, Button, Avatar, Header} from 'react-native-elements'
import {Linking, StyleSheet, Image, View, TouchableHighlight, TouchableOpacity, FlatList, Text, ImageBackground, ScrollView, Dimensions, Br} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from "react-native-maps"
 
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
// import MapPage from './MapPage.js'
import Navbar from './Navbar.js'


let width = Dimensions.get('window').width;

export default class MapPage extends Component<{}> {


  render()  {
    return (
      <View>
     <Navbar navigator={this.props.navigator}/>
     <MapView
            style={styles.map}
            showsUserLocation={ true }
            initialRegion={{
              latitude: 39.1400216,
              longitude: -94.5799362,
              latitudeDelta: 0.00522,
              longitudeDelta: 0.00521,
            }}
  
          >
          
            <Button
              textStyle={{textAlign:'center'}}
              title={ 'Home'}
              buttonStyle={{
                marginTop:'90%',
                backgroundColor: "#191919",
                width: 50,
                height: 45,
                borderColor: "transparent",
                borderWidth: 0,
                borderRadius: 5
              }}
              onPress={ 
                () => 
                this.props.navigator.popToTop()
              }
            />
            <Button
              textStyle={{
                textAlign:'center',
                justifyContent:'center'
              }}
              title={'Directions'}
              buttonStyle={{
                marginTop:'90%',
                backgroundColor: "#191919",
                width: 50,
                height: 45,
                borderColor: "transparent",
                borderWidth: 0,
                borderRadius: 5
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
                title='phone'
                buttonStyle={{
                  marginTop:'50%',
                  backgroundColor: "#191919",
                  width: 50,
                  height:45,
                  borderColor: "transparent",
                  borderWidth: 0,
                  borderRadius: 5
                }}
                onPress={() => 
                  Linking.openURL('tel:7856335715')
                }
              />
          </MapView>      
        </View>
    );
  }
} 


const styles = StyleSheet.create({

  map: {
    position: 'relative',
    // zindex: '-999',
    // left: 0,
    // right: 0,
    top: 50,
     bottom: 0
  }
});


