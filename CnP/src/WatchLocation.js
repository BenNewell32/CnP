import React from 'react';
import { Component } from 'react';
import { StyleSheet, Image, Text, View, ImageBackground } from 'react-native';
import { Button, Avatar} from 'react-native-elements'
// import {GoogleSignin, GoogleSigninButton} from 'react-native-google-signin';

const distance = require('gps-distance');

let lat;
let lng;
let tables=[
  [1,39.139927,-94.580158],
  [2,39.139930,-94.579735],
  [3,39.140161,-94.580181]
  // [4,39.075701,-94.586551]
]
let tableDistance=10000;
let closestTable;

class WatchLocation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      latitude: null,
      longitude: null,
      error: null,
    };
  }

  componentDidMount() {
    this.watchId = navigator.geolocation.watchPosition(
      (position) => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          error: null,
        });
        lat= this.state.latitude;
        lng= this.state.longitude;
        console.log("lat "+lat);
        console.log("lng "+lng);

        for (i=1; i<tables.length; i++){
          newTableDistance = distance(lat,lng,tables[i][1],tables[i][2])
          if (newTableDistance<tableDistance){
            tableDistance=newTableDistance;
            closestTable=tables[i][0];
            console.log("Distance ", tableDistance);
            console.log("Table ", closestTable);
          }
        }

        tableDistance=10000;
      },
      (error) => this.setState({ error: error.message }),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000, distanceFilter: 10 },
    );
  }

  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchId);
  }

  render() {
    return (
      <View style={{alignItems: 'center', justifyContent: 'center' }}>
        {/* <Text style={{color: 'white'}}>
          Latitude: 
        </Text> */}
        <Text style={{color: 'white'}}>
          {this.state.latitude}
        </Text>
        {/* <Text style={{color: 'white'}}>
          Longitude: 
        </Text> */}
        <Text style={{color: 'white'}}>
          {this.state.longitude}
        </Text>
        {this.state.error ? <Text>Error: {this.state.error}</Text> : null}
      </View>
    );
  }
}

export default WatchLocation;