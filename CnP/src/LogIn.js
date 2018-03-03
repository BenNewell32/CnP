import React from 'react';
import { Component } from 'react';
import { StyleSheet, Image, Text, View, ImageBackground, TouchableOpacity } from 'react-native';
import {Icon, Button, Avatar} from 'react-native-elements'
// import {GoogleSignin, GoogleSigninButton} from 'react-native-google-signin';
import Register from './Register.js';
import Expo from 'expo';

const id= '1247004652109579';
let name;
let email;
let img;
let user;
let useremail;
let userimg = "https://scontent.fmkc1-1.fna.fbcdn.net/v/t1.0-9/14212227_1074970642558688_7772776059154917138_n.jpg?oh=fb78a6d04d6c34b160f52b5e630d1a4c&oe=5B200FC6";
export default class LogIn extends Component<{}> {


  login = async () =>{
    console.log('Facebook initiated');
    const {type, token} = await Expo.Facebook.logInWithReadPermissionsAsync(id, {permissions: ['public_profile']})
    
    console.log(token);
    console.log(type);
    if (type === 'success'){
      const response = await fetch(
        `https://graph.facebook.com/me?access_token=${token}&fields=id,name,email,about,picture`
      );
        const json = await response.json();
    console.log('USER INFO', json);
    name = 'name: '+json.name+',';
    email = 'email: '+json.email+',';
    img = 'img: '+json.picture.data.url;
    console.log(name);
    console.log(email);
    console.log(img);
    user= name; 
    useremail = email;
    userimg = json.picture.data.url;
    console.log("userimg!: ",userimg)
    }
    else {
      alert(type);
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Avatar
          large
          rounded
          source={{url: userimg}}
        />
        <Button
          textStyle={{textAlign:'center'}}
          title={''}
          buttonStyle={{backgroundColor: '#9EBA48'}}
        />
        <Button
          textStyle={{textAlign:'center'}}
          title={'Register Now'}
          buttonStyle={{backgroundColor: '#9EBA48'}}
          onPress={
            () => 
            this.props.navigator.push({
              title: 'Register',
              component: Register,
            })
          }
          buttonStyle={{
            backgroundColor: "#191919",
            width: 300,
            height: 45,
            borderColor: "transparent",
            borderWidth: 0,
            borderRadius: 5
          }}
        />
        <Text>
        {"\n"}
        </Text>
        <Button
          textStyle={{textAlign:'center'}}
          title={'Sign In with Facebook'}
          buttonStyle={{backgroundColor: '#9EBA48'}}
          onPress={() => this.login()}
          buttonStyle={{
            backgroundColor: "#4267B2",
            width: 300,
            height: 45,
            borderColor: "transparent",
            borderWidth: 0,
            borderRadius: 5
          }}
        />
      <Text>
        {name}{email}{img}
      </Text>
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

