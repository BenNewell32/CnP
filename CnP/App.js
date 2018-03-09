import React from 'react';
import { Component } from 'react';
import { StyleSheet, Text, View, NavigatorIOS, ImageBackground } from 'react-native';
import { Button, Avatar} from 'react-native-elements'
import Order from './src/Order.js'; 
import LogIn from './src/LogIn.js'; 

class Home extends Component<{}> {
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
          title={'Welcome to Chicken n Pickle'}
          buttonStyle={{backgroundColor: '#9EBA48'}}
        />
        <Button
          textStyle={{textAlign:'center'}}
          title={'Explore'}
          onPress={
            () => 
            this.props.navigator.push({
              title: 'Order',
              component: Order,
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
          title={'Sign In'}
          buttonStyle={{backgroundColor: '#9EBA48'}}
          onPress={
            () => 
            this.props.navigator.push({
              title: 'Sign In',
              component: LogIn,
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
      </View>
    );
  }
}

class Title extends Component<{}>{
  render(){
    return(
      <div>
      <Text>
        Chicken
      </Text>
      <Text>
        N
      </Text>
      <Text>
        Pickle
      </Text>
      </div>
    )
  }
}

export default class App extends Component<{}> {
  render() {
    return (
      <NavigatorIOS
        barTintColor='white'
        titleTextColor='#9EBA48'
        navigationBarHidden= {true}
        // tintColor='#fff'
        fontFamily='Helvetica'
        fontSize='20'
        style={styleshdr.container}
        initialRoute={{
          title: 'Chicken N Pickle',
          component: Home, 
        }}>
      </NavigatorIOS>
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

const styleshdr = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9EBA48',

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

