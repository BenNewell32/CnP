import React from 'react';
import { Component } from 'react';
import { StyleSheet, Image, Text, View, ImageBackground, TouchableOpacity } from 'react-native';
import {Icon, Button, Avatar} from 'react-native-elements'
// import {GoogleSignin, GoogleSigninButton} from 'react-native-google-signin';
import Register from '../Register.js';
import Expo from 'expo';
const id= '1247004652109579';
let name;
let email;
let img;
let user;
let useremail;
let userimg = "https://scontent.fmkc1-1.fna.fbcdn.net/v/t1.0-9/14212227_1074970642558688_7772776059154917138_n.jpg?oh=fb78a6d04d6c34b160f52b5e630d1a4c&oe=5B200FC6";
export default class Auth extends Component<{}> {
    constructor(props){
        super(props);
        this.state = {
            username: this.props.username,
            loggedIn: this.props.isLoggedIn,
            id: this.props.id
        }
        console.log('auth related: ', this.props);
  }

  ComponentDidMount(){
    this.setState({
        username: this.props.username,
        loggedIn: this.props.isLoggedIn,
        id: this.props.id
    });
    console.log(this.state);
  }

//   shouldComponentUpdate(nextProps, nextState){
//     return nextProps.id !== this.props.id
// };

//   componentWillReceiveProps(){
//     this.setState({
//         username: this.props.username,
//         loggedIn: this.props.isLoggedIn,
//         id: this.props.id
//     });
//     console.log(this.state);
//   }

  render(){
    return (<View />)
  }
}