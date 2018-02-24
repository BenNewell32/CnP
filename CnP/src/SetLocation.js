// import React from 'react';
// import { Component } from 'react';
// import { StyleSheet, Image, Text, View, ImageBackground } from 'react-native';
// import { Button, Avatar} from 'react-native-elements'
// // import {GoogleSignin, GoogleSigninButton} from 'react-native-google-signin';

// class SetLocation extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       latitude: null,
//       longitude: null,
//       error: null,
//     };
//   }

//   componentDidMount() {
//     navigator.geolocation.getCurrentPosition(
//       (position) => {
//         this.setState({
//           latitude: position.coords.latitude,
//           longitude: position.coords.longitude,
//           error: null,
//         });
//       },
//       (error) => this.setState({ error: error.message }),
//       { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
//     );
//   }

//   render() {
//     return (
//       <View style={{alignItems: 'center', justifyContent: 'center' }}>
//         <Text style={{color: 'white'}}
//           >Latitude: 
//         </Text>
//         <Text style={{color: 'white'}}>
//           {this.state.latitude}
//         </Text>
//         <Text style={{color: 'white'}}>
//           Longitude: 
//         </Text>
//         <Text style={{color: 'white'}}>
//           {this.state.longitude}
//         </Text>
//         {this.state.error ? <Text>Error: {this.state.error}</Text> : null}
//       </View>
//     );
//   }
// }

// export default SetLocation;


