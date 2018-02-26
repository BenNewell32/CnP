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

var test='test';
export default class Order extends Component<{}> {

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
      <View style={styles.container}>
        <View marginTop='0%'>
          <Icon
            name='menu'
            color='black'
            underlayColor='white'
            size={20}
          />
          <Button
              textStyle={{textAlign:'center'}}
              title={ 'Home'}
              buttonStyle={{
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
                this.props.navigator.popToTop()
              }
            />
            <Icon
                name='credit-card'
                type='evilicon'
                color='Black'
                underlayColor='white'
                size={20}
            />
            <Button
              textStyle={{
                textAlign:'center',
                }}
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
              textStyle={{
                textAlign:'center',
                color: '#9EBA48'
            }}
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
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9EBA48',
    alignItems: 'left',
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
