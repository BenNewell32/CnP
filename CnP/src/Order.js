'use strict';

import React, { Component } from 'react'
import { Button, Avatar} from 'react-native-elements'
import { StyleSheet, Image, View, TouchableHighlight, FlatList, Text, ImageBackground,} from 'react-native';
import Navigation from "./Navigation.js"

var test='test';
export default class Order extends Component<{}> {
  _keyExtractor = (item, index) => index;

  _renderItem = (test) => {
    return (
      <TouchableHighlight
        underlayColor='#dddddd'>
        <View>
          <Text>'test'</Text>
        </View>
      </TouchableHighlight>
    );
    
  };

  render() {
    return (
      <View style={styles.container}>
        <Navigation>
        </Navigation>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9EBA48',
    alignItems: 'center',
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

