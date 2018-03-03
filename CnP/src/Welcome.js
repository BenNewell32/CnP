import React from 'react';
import { Component } from 'react';
import { StyleSheet,KeyboardAvoidingView, Text, View, TextInput, 
        ImageBackground,
        Image,
        Dimensions,
        TouchableHighlight,
        ScrollView } from 'react-native';
import { Button, Avatar} from 'react-native-elements'
import YourBill from './YourBill.js'

let width = Dimensions.get('window').width;

export default class Welcome extends Component {

    render(){
        return(
            <ScrollView>
                <TouchableHighlight 
                onPress={
                    () =>
                        this.props.navigator.push({
                            title: 'Your Bill',
                            component: YourBill,
                        })}>
                    <ImageBackground source={require('../public/images/chicken.jpg')} style={styles.image} resizeMode='cover'>
                        <View style={{flex: 1, 
                        justifyContent:'center',
                        alignItems:'center',
                        alignSelf:'stretch',
                        backgroundColor:'rgba(0,0,0,0.5)'}}>
                            <Text style={[styles.textStyle, {backgroundColor:'transparent'}]}>Your Orders</Text>
                        </View>
                    </ImageBackground>
                </TouchableHighlight>
            </ScrollView>
            // <TouchableHighlight>
            //     <ImageBackground source={require('../public/images/chicken.jpg')} style={styles.container}> 
            //         <Text>Your Order</Text>
            //     </ImageBackground>
            // </TouchableHighlight>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'tomato'

    },
    image: {
        alignSelf: 'stretch',
        justifyContent:'center',
        alignItems:'center',
        height: 250

    },
    textStyle: {
        fontSize: 30,
        fontWeight:'bold',
        color: '#ffffff'
    }
})