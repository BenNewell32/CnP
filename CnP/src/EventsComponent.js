'use strict';

import React, { Component } from 'react'
import { Avatar } from 'react-native-elements'
import { StyleSheet, Image, View, ScrollView, TouchableHighlight, Dimensions, TouchableOpacity, FlatList, Text, ImageBackground, } from 'react-native';
import Navigation from "./Navigation.js"
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
import { Container, Header, Left, Body, Right, Button, Icon, Title, Content, Card, CardItem, Thumbnail } from 'native-base'
let width = Dimensions.get('window').width;

export default class EventsContent extends Component<{}>{

   render() {
       return (
               <Content>
                   <Card style={{ flex: 0 }}>
                       <CardItem>
                           <Left>
                               <Thumbnail source={this.props.thumbnailImage} />
                               <Body>
                                   <Text>{this.props.eventName}</Text>
                                   <Text note>{this.props.date}</Text>
                               </Body>
                           </Left>
                       </CardItem>
                       <CardItem>
                           <Body>
                               <Image source={this.props.bigImage} style={{ height: 200, width: 300, flex: 1 }} resizeMode='contain' />
                               <Text>{this.props.description}</Text>
                           </Body>
                       </CardItem>
                   </Card>
               </Content>
       );
   }
}

const styles = StyleSheet.create({
   container: {
       flex: 1,
       backgroundColor: 'tomato'
   }
})