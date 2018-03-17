import React, { Component } from 'react';
import { StyleSheet, Image, View, TouchableHighlight, TouchableOpacity, FlatList, Text, ImageBackground, SectionList, AppRegistry,  ActivityIndicator, ListView, Alert, TabBarIOS, AlertIndicatorIOS, ActivityIndicatorIOS, AlertIOS,Br} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


let cart;
let cartData = [
   ]

  console.log("raw: ",cartData);

class Item extends Component {

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

    return fetch('https://lit-reef-60415.herokuapp.com/food/rotchx')
      .then((response) => response.json())
      .then((responseJson) => {
        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2,
        sectionHeaderHasChanged: (s1, s2) => s1 !== s2});
        this.setState({
          isLoading: false,
          dataSource: ds.cloneWithRows(responseJson),
        },
        function() {
          console.log('response: ', responseJson)
          cart=responseJson;
        

          // console.log('cart: ', cart);
          // cartData=cart;
          // console.log('data:', cartData);
        });
      })
      .catch((error) => {
        console.error(error);
      });
    // function getRotChx() {
    //   return fetch('https://lit-reef-60415.herokuapp.com/food/rotchx')
    //   .then((response) => response.json())
    //   .then((responseJson) => {
    //     return responseJson.product_description;
    //     })
    //     .catch((error) => {
    //       console.error(error);
    //     });
    //   }
  }


  _renderItem({ item, index }) {
    const {
      containerStyle,
      lastItemStyle,
      imageStyle,
      textStyle,
      counterStyle,
      priceStyle } = styles;

    return (
    <View style={(index + 1 === cartData.length) ? lastItemStyle : containerStyle}>
      {/* <Image source={item.image} style={imageStyle} /> */}

      <Text style={{width: '40%'}}>{item.product_description}</Text>

      <View style={counterStyle}>
        {/* <Icon.Button
          name="ios-remove"
          size={25}
          color='#fff'
          backgroundColor='#fff'
          style={{ borderRadius: 15, backgroundColor: '#bbb', height: 30, width: 30 }}
          iconStyle={{ marginRight: 0 }}
        /> */}
        <Text>{item.subcategory}</Text>
        <Text>${item.cost}.00</Text>

        <Icon.Button
          name="ios-add"
          size={25}
          color='#fff'
          backgroundColor='#fff'
          style={{ borderRadius: 15, backgroundColor: '#bbb', height: 30, width: 30 }}
          iconStyle={{ marginRight: 0 }}
          onPress={
            () => this.props.something.push({
              
            })
          }
        />

      </View>
    </View>);
  }




  render() {
    if(this.state.isLoading){
      return(
        <View style={{flex:1, paddingTop: 10}}>
        <ActivityIndicator />
        </View>
      )
    }
    return (
      <FlatList
        data={cartData}
        renderItem={this._renderItem}
        keyExtractor={(item) => item.id}
      />
    );
  }
}

const styles = {
  containerStyle: {
    flexDirection: 'row',
    flex: 1,
    borderBottomWidth: 1,
    borderColor: '#e2e2e2',
    padding: 10,
    paddingLeft: 15,
    backgroundColor: '#fff'
  },
  lastItemStyle: {
    flexDirection: 'row',
    flex: 1,
    padding: 10,
    paddingLeft: 15,
    backgroundColor: '#fff'
  },
  imageStyle: {
    width: 50,
    height: 50,
    marginRight: 20
  },
  textStyle: {
    flex: 2,
    justifyContent: 'center'
  },
  priceStyle: {
    backgroundColor: '#ddd',
    width: 40,
    alignItems: 'center',
    marginTop: 3,
    borderRadius: 3
  },
  counterStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  }
};

export default Item;
