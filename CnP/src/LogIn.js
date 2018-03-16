import React from 'react';
import { Component } from 'react';
import { StyleSheet, Image, Text, View, ImageBackground, TouchableOpacity } from 'react-native';
import {Icon, Button, Avatar} from 'react-native-elements'
// import {GoogleSignin, GoogleSigninButton} from 'react-native-google-signin';
import Register from './Register.js';
import Expo from 'expo';
import Auth from './components/Auth'
import Home from '../App.js'

const id= '1247004652109579';
let name='Sign In with Facebook';
let email;
let img;
let user;
let useremail;
let userimg = "https://scontent.fmkc1-1.fna.fbcdn.net/v/t1.0-9/14212227_1074970642558688_7772776059154917138_n.jpg?oh=fb78a6d04d6c34b160f52b5e630d1a4c&oe=5B200FC6";
let userState;

export default class LogIn extends Component<{}> {

  //set props = loggedout / no user data.
  constructor(props){
    super(props);
    this.state = {
      loggedIn: false,
      username: '',
      img: '',
      email: '',
      id: ''
    }
  }

  ComponentDidMount(){
    console.log(this.state.loggedIn);
  }

  ComponentDidUpdate(){
    console.log('updated');
    return <Auth />
  }

  //Use Login function to promp use to sign in.
  login = async () =>{
    console.log('Facebook initiated');
    const {type, token} = await Expo.Facebook.logInWithReadPermissionsAsync(id, {permissions: ['public_profile']})

  //If user signs in, return data.
    if (type === 'success'){
      const response = await fetch(
        `https://graph.facebook.com/me?access_token=${token}&fields=id,name,email,about,picture`
      );
      const json = await response.json();
      // console.log('USER INFO', json);

      name = "Welcome "+json.name;
      email = json.email;
      img = 'img: '+json.picture.data.url;
      console.log('name: '+name);
      console.log('email: '+email);
      user= name;
      useremail = email;
      userimg = json.picture.data.url;
      console.log("userimg!: ",userimg);
      console.log("id: ", json.id);

      //Grab all current users from MySQL database.
      fetch('https://lit-reef-60415.herokuapp.com/users')
        .then((result) => result.json())
        .then((resultJSON) => {
      
          //POST user to MySQL (run only if no user found)
          const postUser = () => {
            fetch('https://lit-reef-60415.herokuapp.com/add/user', {
              method: 'POST',
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                firstName: json.name,
                lastName: '',
                email: json.email,
                phone: '',
                fbId: json.id
              })
            })

            //Once the new user has been posted, return the data back to the app. 
            .then((result) => result.json()).then((resultJSON) => {
              console.log("result from post to user table:")
              console.log("id: " + resultJSON[0].id);
              console.log("name: " + resultJSON[0].firstName);
              console.log("email: " + resultJSON[0].email);
              console.log("fbId: " + resultJSON[0].fbId);
              console.log("img: "+ "JACOB we need to add img to api return");
              this.setState((prevState) => {
                return {
                  loggedIn: true,
                  username: resultJSON[0].firstName,
                  img: 'JACOB WE NEED IMG ADDED TO USER POST RETURN',
                  email: resultJSON[0].email,
                  id: resultJSON[0].id
                }
              })
            });
          }
  
      //Loop through each user in MySQL    
      var users = resultJSON;
      var isMatch = false;
      users.forEach(user => {
        
        //if the user exists, update state with users data and liftState
        if(parseInt(json.id) === parseInt(user.fbId)){
          isMatch = true;
          this.setState((prevState) => {
            return {
              loggedIn: true,
              username: json.name,
              img: json.picture.data.url,
              email: json.email,
              id: json.id
            }
          })

          //Update state with user data
          userState = {
            id: this.state.id,
            name: this.state.username,
            img: this.state.img,
            email: this.state.email,
          } 
          console.log("User ID to pass accross app: ", userState)

          ////////////////////////////////////////////////////
          //JACOB!!
          //lift this state up to the navigatorIOS component//
          //////Lets figure this out first thing tomorrow/////
          
          ////////////////////////////////////////////////////
          // this.props.NavigatorIOS.auth({userState});

        }
      });
      if(!isMatch){
        postUser();
        console.log('posted to db');
      }
    })
    }
    else {
      alert("Sorry! Please attempt to log in again.");
    }
    
    //BENS LIFT STATE
    this.props.navigator.push({
        title: 'Home',
        component: Home,
        passProps: userState
      })
  };

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
          title={'Return Home'}
          buttonStyle={{backgroundColor: '#9EBA48'}}
          onPress={ 
            () => 
            this.props.navigator.popToTop()
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
        <Auth isLoggedIn={this.state.loggedIn}username={this.state.username} id={this.state.id}/>
        <Button
          textStyle={{textAlign:'center'}}
          title={name}
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

