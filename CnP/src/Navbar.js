import React, { Component } from 'react'
import {Icon, Button, Avatar, Header} from 'react-native-elements'
import { StyleSheet, Image, View, TouchableHighlight, TouchableOpacity, FlatList, Text, ImageBackground, ScrollView, Dimensions, NavigatorIOS} from 'react-native';
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
import AboutContact from './AboutContact.js'
import Order from './Order.js'


export default class Navbar extends Component<{}> {
  constructor(props){
    super(props)

  }
// getIntialState(){
//   return {
//     clicked: false,
//     IconColor:'black'
//   }
// }
// wasItClicked(){
//     this.setState({clicked: true});
// }
// renderBlackIcon(){
//   IconColor:'Black'
// }
// renderWhiteIcon(){
//   IconColor: 'white'
// }
// render(){
//   if(this.state.clicked){
//     return this.renderWhiteIcon();
//   }else{
//     return this.renderBlackIcon();
//   }
// }
// getCurrentRoute = () => {
//   let currentRoute = this.props.navigator;
//   console.log(currentRoute);
// }

    render() {
      return (
<View backgroundColor='white'>
      {/* <WatchLocation/> */}
        <View style={{ flexDirection: 'row', backgroundColor: '#9EBA48'}}>
          <View style={{alignItems: 'center', width: '100%', height: 60, backgroundColor: '#9EBA48'}} >
            <Text>
            </Text>
            <Text>
            </Text>
            <Image
              style={{alignItems: 'center', height:'40%',width: '40%'}}
              source={require('../public/images/cnpheader.png')}
            />
          </View>
          <View style={{width: '100%', height: 25, backgroundColor: '#9EBA48'}} />
        </View>
        <View style={{flex: 1, justifyContent: 'center', flexDirection: 'row', backgroundColor: '#9EBA48'}}>
          <View style={{width: 45, height: 40, backgroundColor: '#9EBA48'}}>
            <TouchableOpacity
            
            underlayColor={'gray'}>
            <Icon
              name='navicon'
              type='evilicon'
              color={(this.props.route == "Order" ?  'white' : 'black' )}
              underlayColor='#9EBA48'
              size={40}
              onPress={
                () => 
              
                this.props.navigator.push({
                  title: 'Order',
                  component: Order,
                })
              }
            />
            </TouchableOpacity>
          </View>
          <View style={{width: 45, height: 40, backgroundColor: '#9EBA48'}}>
            <Icon
              name='user'
              type='evilicon'
              color={(this.props.route == "LogIn" ?  'white' : 'black' )}
              underlayColor='#9EBA48'
              size={40}
              onPress={
                () => 
                this.props.navigator.push({
                  title: 'LogIn',
                  component: LogIn,
                })
              }
            />
          </View>
          <View style={{width: 45, height: 40, backgroundColor: '#9EBA48'}}>
            <Icon
              name='credit-card'
              type='evilicon'
                color={(this.props.route == "YourBill" ?  'white' : 'black' )}
                underlayColor='#9EBA48'
              size={40}
              onPress={
                () => 
                this.props.navigator.push({
                  title: 'Your Bill',
                  component: YourBill,
                })
              }
            />
          </View>
          <View style={{width: 45, height: 40, backgroundColor: '#9EBA48'}}>
            <Icon 
              name='local-dining'
              color={(this.props.route == "FoodDrinks" ?  'white' : 'black' )}
              underlayColor='white'
              size={30}
              onPress={
                () => 
                this.props.navigator.push({
                  title: 'Food and Drinks',
                  component: FoodDrinks,
                })
              }
            />
          </View>
          <View style={{width: 45, height: 40, backgroundColor: '#9EBA48'}}>
            <Icon
              name='local-bar'
              color={(this.props.route == "FoodDrinks" ?  'white' : 'black' )}
              underlayColor='#9EBA48' 
              size={30}
              onPress={
                () => 
                this.props.navigator.push({
                  title: 'Food and Drinks',
                  component: FoodDrinks,
                })
              }
            />
          </View>
          <View style={{width: 45, height: 40, backgroundColor: '#9EBA48'}}>
            <Icon
              name='trophy'
              type='evilicon'
              color={(this.props.route == "YourBill" ?  'white' : 'black' )}
              underlayColor='#9EBA48'
              size={40}
              onPress={
                () => 
                this.props.navigator.push({
                  title: 'Your Bill',
                  component: YourBill,
                })
              }
            />
          </View>
          <View style={{width: 45, height: 40, backgroundColor: '#9EBA48'}}>
            <Icon
              name='calendar'
              type='evilicon'
              underlayColor='#9EBA48'
              color={(this.props.route == "Events" ?  'white' : 'black' )}
              size={40}
              onPress={
                () => {
                // this.getCurrentRoute(),
                this.props.navigator.push({
                  title: 'Events',
                  component: Events
                })
                console.log(this.props.route);
              }
          }
        >
        </Icon>
          </View>
          <View style={{width: 45, height: 40, backgroundColor: '#9EBA48'}}>
            <Icon
              name='sc-telegram'
              type='evilicon'
              color={(this.props.route == "AboutContact" ?  'white' : 'black' )}
              underlayColor='#9EBA48'
              size={40}
              onPress={
                () => 
                this.props.navigator.push({
                  title: 'AboutContact',
                  component: AboutContact,
                })
              }
            />
          </View>
          <View style={{width: 45, height: 40, backgroundColor: '#9EBA48'}}>
            <Icon
              name='location'
              type='evilicon'
              color={(this.props.route == "MapPage" ?  'white' : 'black' )}
              underlayColor='#9EBA48'
              size={40}
              onPress={
                () => 
                this.props.navigator.push({
                  title: 'MapPage',
                  component: MapPage,
                })
              }
            />
          </View>
          <View style={{width: 20, height: 40, backgroundColor: '#9EBA48'}}>
          </View>
        </View>
        </View>
        )
        }
        }