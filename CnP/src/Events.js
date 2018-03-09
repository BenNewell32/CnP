'use strict';

import React, { Component } from 'react'
import {Avatar} from 'react-native-elements'
import { StyleSheet, ScrollView, Image, View, TouchableHighlight, Dimensions, TouchableOpacity, FlatList, Text, ImageBackground,} from 'react-native';
import Navigation from "./Navigation.js"
import Navbar from "./Navbar.js"
import Home from '../App.js'
import YourBill from './YourBill.js'
import FoodDrinks from './FoodDrinks.js'
import Pickleball from './Pickleball.js'
import AboutContact from './AboutContact.js'
import SetLocation from './SetLocation.js'
import LogOut from './LogOut.js'
import WatchLocation from './WatchLocation.js'
import Register from './Register.js'
import LogIn from './LogIn.js'
import EventsComponent from './EventsComponent.js'
import { Container, Header, Left, Body, Right, Button, Icon, Title, Content, Card, CardItem, Thumbnail  } from 'native-base'
let width = Dimensions.get('window').width;

export default class Events extends Component<{}>{

 render()  {
   return (
     <View>
    <Navbar navigator={this.props.navigator}/>
       <ScrollView 
       marginTop={50}>
         <EventsComponent
         eventName={'Comedy Show'}
         date={'March 9, 2018\n8:00 PM - 11:00 PM CST'}
         thumbnailImage={require('../public/images/comedyShow.png')}
         bigImage={require('../public/images/comedyShow.png')}
         description={`Kick off the weekend with a night full of laughter from some of Kansas City's best comedians! 
Three of our local comedians featured in the KC Comedy Festival will be performing some of their best stand-up! 
Space is limited so don't wait to secure your seat! 
The show starts at 8 pm on the rooftop.
This event is indoors with food and drinks available from the rooftop. 
Must be 21(+).Tickets are $5 each, we will have walk-in space as well.
Drink Specials:
$4 wells
$3 MillerHigh Life
$4 KC Pils
$5 Tank 7`}/>
       <EventsComponent
         eventName={'Snake Saturday'}
         date={'Mar 10, 2018\n8:00am - 3:00pm'}
         thumbnailImage={require('../public/images/snakesaturday.png')}
         bigImage={require('../public/images/snakesaturday.png')}
         description={`We will be open 8am-3pm for Snake Saturday. No Pickleball until 7pm.
General Admission- $10
VIP- $25`}/>
       <EventsComponent
         eventName={'March Basketball Tournament'}
         date={'Mar 11 - Apr 2, 2018\n5:00pm - 7:00pm'}
         thumbnailImage={require('../public/images/marchbasketball.png')}
         bigImage={require('../public/images/marchbasketball.png')}
         description={``} />
       <EventsComponent
         eventName={'Open Mic Night-Comedy'}
         date={'Mar 11, 2018\n5:00pm - 10:00pm'}
         thumbnailImage={require('../public/images/openMic.png')}
         bigImage={require('../public/images/openMic.png')}
         description={``} />
       <EventsComponent
         eventName={'Three Drink Minimum Concert'}
         date={'Mar 24, 2018\n7:30pm'}
         thumbnailImage={require('../public/images/snakesaturday.png')}
         bigImage={require('../public/images/snakesaturday.png')}
         description={``} />
       <EventsComponent
         eventName={'Pickleball Tournament'}
         date={''}
         thumbnailImage={require('../public/images/snakesaturday.png')}
         bigImage={require('../public/images/snakesaturday.png')}
         description={``} />
       </ScrollView>
       </View>
   );
 }
}

const styles = StyleSheet.create({
 container: {
   flex: 0,
   backgroundColor: 'tomato'
 }
})