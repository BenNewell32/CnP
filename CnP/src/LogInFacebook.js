import React from 'react';
import { Component } from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import { Button, Avatar} from 'react-native-elements'

export default class LogInFB extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Avatar
          xlarge
          rounded
          // https://www.facebook.com/chickennpickle/photos/a.851614384894316.1073741825.851613691561052/1074970642558688/?type=1&theater
          source={{uri: "https://scontent.fmkc1-1.fna.fbcdn.net/v/t1.0-9/14212227_1074970642558688_7772776059154917138_n.jpg?oh=fb78a6d04d6c34b160f52b5e630d1a4c&oe=5B200FC6"}}
        />
        <Button
          textStyle={{textAlign:'center'}}
          title={'facebook page!'}
          buttonStyle={{backgroundColor: '#9EBA48'}}
        />
        
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

