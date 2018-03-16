'use strict';

import React, { Component } from 'react'
import {Icon, Button, Avatar} from 'react-native-elements'
import { StyleSheet, Image, View, TouchableHighlight, TouchableOpacity, FlatList, Text, ImageBackground, SectionList, AppRegistry,  ActivityIndicator, ListView, Alert, TabBarIOS, AlertIndicatorIOS, ActivityIndicatorIOS, AlertIOS,Br} from 'react-native';
import Navigation from "./Navigation.js"
import Home from '../App.js'
import YourBill from './YourBill.js'
import Pickleball from './Pickleball.js'
import Events from './Events.js'
import AboutContact from './AboutContact.js'
import Drinks from './Drinks.js'
import SetLocation from './SetLocation.js'
import LogOut from './LogOut.js'
import WatchLocation from './WatchLocation.js'
import Register from './Register.js'
import LogIn from './LogIn.js'
import Navbar from './Navbar.js'
import ProductContainer from './components/Order/ProductContainer' 
import BasketComponent from './components/Order/BasketComponent' 
import Header from './components/Order/Header' 
import Footer from './components/Order/Footer.js' 
import Products from './components/Order/Products.js' 
import ModalExample from './components/Order/Modal.js'

let products = [];
let prodID;
let prodImg;
let prodPrice;
let sides=[];
export default class FoodDrinks extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    }
  }
  
  GetItem (product_description) { 
    Alert.alert(product_description);
  }
 
  componentDidMount() {
 
    return fetch('https://lit-reef-60415.herokuapp.com/food')
      .then((response) => response.json())
      .then((responseJson) => {
        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2,
        sectionHeaderHasChanged: (s1, s2) => s1 !== s2});
        this.setState({
          isLoading: false,
          dataSource: ds.cloneWithRows(responseJson),
        }, 
        function() {
          console.log('response: ',responseJson)
          products=responseJson;
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }
 
  ListViewItemSeparator = () => {
    return (
      <View
        style={{
          height: .5,
          width: "100%",
          backgroundColor: "#000",
        }}
      />
    );
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{flex: 1, paddingTop: 10}}>
          <ActivityIndicator />
        </View>
      );
    }
 
    return (
      <View style={styles.MainContainer}>
        <Navbar navigator={this.props.navigator}/>
        <Header />
        <ProductContainer>
        <ListView
          style={styles.NavContainer}
          dataSource={this.state.dataSource}
          renderSeparator= {this.ListViewItemSeparator}
          renderRow=
            {(rowData) => 
              <Text 
                style={styles.rowViewContainer} 
                onPress={()=>{
                  this.GetItem.bind(this, rowData.product_description)(),
                  prodID=rowData.product_id;
                  prodImg=rowData.pic;
                  prodPrice=rowData.cost;
                  sides=[rowData.fries,rowData.tots,rowData.chicken,rowData.jerk,rowData.jerk,rowData.house,rowData.chili,rowData.southwest]
                  console.log('prodid found: ',prodID);
                  console.log('img found: ',prodImg);
                  console.log('price found: ',prodPrice);
                  console.log('sides found: ',sides);
                }}>
                {rowData.product_description}
              </Text>
            }        
        />
        </ProductContainer>
        <Footer/>
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
  NavContainer :{
    marginTop: 40
  },
  rowViewContainer: {
    fontSize: 20,
    paddingRight: 10,
    paddingTop: 30,
    paddingBottom: 10
  },
  model: {
    flex: 1,
    height: '100%',
    width: '100%',
    backgroundColor: 'black'
  }
});

AppRegistry.registerComponent('FoodDrinks', () => Food);