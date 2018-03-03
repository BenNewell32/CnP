'use strict';

import React, { Component } from 'react'
import {Icon, Button, Avatar, Header} from 'react-native-elements'
import { StyleSheet, Image, View, TouchableHighlight, TouchableOpacity, FlatList, Text, ImageBackground, ScrollView, Dimensions, Br} from 'react-native';
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

let width = Dimensions.get('window').width;

var test='test';
export default class Order extends Component<{}> {

  _keyExtractor = (item, index) => index;

  _renderItem = (test) => {
    return (
      <TouchableHighlight
        underlayColor='white'>
      </TouchableHighlight>
    );
    
  };

  render() {
    return (
      <View backgroundColor='white'>
          <Header
            backgroundColor='white'
            flexDirection='row'>
            <TouchableHighlight
              onPress={alert}>
              <Icon
                paddingTop={30}
                name='menu'
                color='#9EBA48'
                underlayColor='white'
                size={40}/>
            </TouchableHighlight>
          <Image source={require('../public/images/cnpheader.png')} resizeMode='contain' />
            
        </Header>
       {/* <Button
        backgroundColor='black'
        onPress={alert}>
          <Icon
              name='menu'
              color='white'
              underlayColor='white'
              size={80}
                />
        </Button> */}
      <ScrollView>
        <TouchableHighlight
          style={styles.container}
          onPress={
            () =>
              this.props.navigator.push({
                title: 'Your Bill',
                component: YourBill,
              })}>
          <ImageBackground source={require('../public/images/chicken.jpg')} style={styles.image} resizeMode='cover'>
            <View style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              alignSelf: 'stretch',
              backgroundColor: 'rgba(0,0,0,0.5)'
            }}>
              <Text style={[styles.textStyle, { backgroundColor: 'transparent' }]}>Your Orders</Text>
            </View>
          </ImageBackground>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.container}
          onPress={
            () =>
              this.props.navigator.push({
                title: 'Your Bill',
                component: YourBill,
              })}>
          <ImageBackground source={require('../public/images/court.jpg')} style={styles.image} resizeMode='cover'>
            <View style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              alignSelf: 'stretch',
              backgroundColor: 'rgba(0,0,0,0.5)'
            }}>
              <Text style={[styles.textStyle, { backgroundColor: 'transparent' }]}>Pickleball</Text>
            </View>
          </ImageBackground>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.container}
          onPress={
            () =>
              this.props.navigator.push({
                title: 'Your Bill',
                component: YourBill,
              })}>
          <ImageBackground source={require('../public/images/beer.jpg')} style={styles.image} resizeMode='cover'>
            <View style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              alignSelf: 'stretch',
              backgroundColor: 'rgba(0,0,0,0.5)'
            }}>
              <Text style={[styles.textStyle, { backgroundColor: 'transparent' }]}>Drinks</Text>
            </View>
          </ImageBackground>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.container}
          onPress={
            () =>
              this.props.navigator.push({
                title: 'Your Bill',
                component: YourBill,
              })}>
          <ImageBackground source={require('../public/images/food.jpg')} style={styles.image} resizeMode='cover'>
            <View style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              alignSelf: 'stretch',
              backgroundColor: 'rgba(0,0,0,0.5)'
            }}>
              <Text style={[styles.textStyle, { backgroundColor: 'transparent' }]}>Food</Text>
            </View>
          </ImageBackground>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.container}
          onPress={
            () =>
              this.props.navigator.push({
                title: 'Your Bill',
                component: YourBill,
              })}>
          <ImageBackground source={require('../public/images/events.jpg')} style={styles.image} resizeMode='cover'>
            <View style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              alignSelf: 'stretch',
              backgroundColor: 'rgba(0,0,0,0.5)'
            }}>
              <Text style={[styles.textStyle, { backgroundColor: 'transparent' }]}>Events</Text>
            </View>
          </ImageBackground>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.container}
          onPress={
            () =>
              this.props.navigator.push({
                title: 'Your Bill',
                component: YourBill,
              })}>
          <ImageBackground source={require('../public/images/contactus.jpg')} style={styles.image} resizeMode='cover'>
            <View style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              alignSelf: 'stretch',
              backgroundColor: 'rgba(0,0,0,0.5)'
            }}>
              <Text style={[styles.textStyle, { backgroundColor: 'transparent' }]}>Contact Us</Text>
            </View>
          </ImageBackground>
        </TouchableHighlight>
      </ScrollView>
      </View>
       /* <View style={styles.container}>
        <View marginTop='0%'>
          <Icon
            name='menu'
            color='black'
            underlayColor='white'
            size={20}
          />
          <ScrollView>
            <TouchableHighlight
              onPress={
                () =>
                  this.props.navigator.push({
                    title: 'Your Bill',
                    component: YourBill,
                  })}>
              <ImageBackground source={require('../public/images/chicken.jpg')} style={styles.image} resizeMode='cover'>
                <View style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                  alignSelf: 'stretch',
                  backgroundColor: 'rgba(0,0,0,0.5)'
                }}>
                  <Text style={[styles.textStyle, { backgroundColor: 'transparent' }]}>Your Orders</Text>
                </View>
              </ImageBackground>
            </TouchableHighlight>
          </ScrollView> */
            /* <Icon
                name='credit-card'
                type='evilicon'
                color='Black'
                underlayColor='white'
                size={20}
            />
            <Button
              textStyle={{textAlign:'center'}}
              title={'Your Bill'}
              buttonStyle={{
                position: 'fixed',
                marginTop:'5%',
                backgroundColor: "#191919",
                width: 100,
                height: 45,
                borderColor: "transparent",
                borderWidth: 0,
                borderRadius: 5
              }}
              onPress={
                () => 
                this.props.navigator.push({
                  title: 'Your Bill',
                  component: YourBill,
                })
              }
            />
            <Icon 
              name='local-dining'
              color='black'
              underlayColor='white'
              size={20}
            />
            <Icon
                name='local-bar'
                color='black'
                underlayColor='white'
                size={20}
            />
            <Button
              textStyle={{textAlign:'center'}}
              title={'Order'}
              buttonStyle={{
                position: 'fixed',
                marginTop:'5%',
                backgroundColor: "#191919",
                width: 100,
                height: 45,
                borderColor: "transparent",
                borderWidth: 0,
                borderRadius: 5
              }}
              onPress={
                () => 
                this.props.navigator.push({
                  title: 'Food and Drinks',
                  component: FoodDrinks,
                })
              }
            />
            <Icon
              name='calendar'
              type='evilicon'
              color='black'
              underlayColor='white'
              size={20}
            />
            <Button
              textStyle={{textAlign:'center'}}
              title={'Pickleball'}
              buttonStyle={{
                position: 'fixed',
                marginTop:'5%',
                backgroundColor: "#191919",
                width: 100,
                height: 45,
                borderColor: "transparent",
                borderWidth: 0,
                borderRadius: 5
              }}
              onPress={
                () => 
                this.props.navigator.push({
                  title: 'Pickleball',
                  component: Pickleball,
                })
              }
            />
            <Icon
                name='cake'
                color='black'
                underlayColor='white'
                size={20}
            />
            <Button
              textStyle={{textAlign:'center'}}
              title={'Events'}
              buttonStyle={{
                position: 'fixed',
                marginTop:'5%',
                backgroundColor: "#191919",
                width: 100,
                height: 45,
                borderColor: "transparent",
                borderWidth: 0,
                borderRadius: 5
              }}
              onPress={
                () => 
                this.props.navigator.push({
                  title: 'Events',
                  component: Events,
                })
              }
            />
            <Icon
              name='sc-telegram'
              type='evilicon'
              color='black'
              underlayColor='white'
              size={20}
            />
            <Button
              textStyle={{textAlign:'center'}}
              title={'Contact Us'}
              buttonStyle={{
                position: 'fixed',
                marginTop:'5%',
                backgroundColor: "#191919",
                width: 100,
                height: 45,
                borderColor: "transparent",
                borderWidth: 0,
                borderRadius: 5
              }}
              onPress={
                () => 
                this.props.navigator.push({
                  title: 'Contact Us',
                  component: AboutContact,
                })
              }
            />
            <Icon
                name='user'
                type='evilicon'
                color='black'
                underlayColor='white'
                size={20}
            />
            <Button
              textStyle={{textAlign:'center'}}
              title={'Log In'}
              buttonStyle={{
                position: 'fixed',
                marginTop:'5%',
                backgroundColor: "#191919",
                width: 100,
                height: 45,
                borderColor: "transparent",
                borderWidth: 0,
                borderRadius: 5
              }}
              onPress={
                () => 
                this.props.navigator.push({
                  title: 'LogIn',
                  component: LogIn,
                })
              }
            />
        <Icon
          name='location'
          type='evilicon'
          color='black'
          underlayColor='white'
          size={20}
        />
        </View>
        <WatchLocation>
        </WatchLocation>
      </View> */
    );
  }
} 


const styles = StyleSheet.create({
  container: {
      width: width,
      paddingTop: 2.5,
      paddingBottom: 2.5,
      flex: 1,
      backgroundColor: '#9EBA48',
      alignItems: 'center',
      justifyContent: 'center',
    },
    image: {
      alignSelf: 'stretch',
      justifyContent: 'center',
      alignItems: 'center',
      height: 100
    },
    textStyle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#ffffff'
  }
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

        // <TouchableOpacity  onPress={this._onPressButton}>
        //     <Icon 
        //         name='local-dining'
        //         color='#9EBA48'
        //         underlayColor='white'
        //         size={20}
        //     />
        //     <Icon
        //         name='local-bar'
        //         color='#9EBA48'
        //         underlayColor='white'
        //         size={20}
        //     />
        //     <Text
        //         style={menufont.container}
        //     >
        //         Food/Drinks
        //     </Text>
        // </TouchableOpacity>
        // <Text></Text>

        // <TouchableOpacity onPress={this._onPressButton}>
        //     <Icon
        //         name='location'
        //         type='evilicon'
        //         color='#9EBA48'
        //         underlayColor='white'
        //         size={20}
        //     />
        //     <Text
        //         style={menufont.container}
        //     >
        //         Set Location
        //     </Text>
        // </TouchableOpacity>
        // <Text></Text>

        // <TouchableOpacity onPress={this._onPressButton}>
        //     <Icon
        //         name='calendar'
        //         type='evilicon'
        //         color='#9EBA48'
        //         underlayColor='white'
        //         size={20}
        //     />
        //     <Text
        //         style={menufont.container}
        //     >
        //         Reservations
        //     </Text>
        // </TouchableOpacity>
        // <Text></Text>

        // <TouchableOpacity onPress={this._onPressButton}>
        //     <Icon
        //         name='clock'
        //         type='evilicon'
        //         color='#9EBA48'
        //         underlayColor='white'
        //         size={20}
        //     />
        //     <Text
        //         style={menufont.container}
        //     >
        //         History
        //     </Text>
        // </TouchableOpacity>
        // <Text></Text>

        // <TouchableOpacity onPress={this._onPressButton}>
        
        //     <Text
        //         style={menufont.container}
        //     >
        //         Contact Us
        //     </Text>
        // </TouchableOpacity>
        // <Text></Text>

        // <TouchableOpacity onPress={this._onPressButton}>
        //     <Icon
        //         name='user'
        //         type='evilicon'
        //         color='#9EBA48'
        //         underlayColor='white'
        //         size={20}
        //     />
        //     <Text
        //         style={menufont.container}
        //     >
        //         Log In
        //     </Text>
        // </TouchableOpacity>
        