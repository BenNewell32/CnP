import React, {Component} from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

// let cart;
// let cartData = [];

// console.log("raw: ", cartData);

const TotalComponent = () => {
  const { containerStyle, goodsStyle, totalStyle } = styles;
  return (
    <View style={containerStyle}>
      <View style={goodsStyle}>
        <Icon name="ios-cart" size={20} style={{ marginRight: 8 }} />
        <Text>8 goods</Text>
      </View>

      <View style={totalStyle}>
        <Text>Total - </Text>
        <Text>$300</Text>
      </View>
    </View>
  );
};

// class TotalComponent extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isLoading: true
//     }
//   }

//   componentDidMount() {

//     return fetch('https://lit-reef-60415.herokuapp.com/order_details')
//       .then((response) => response.json())
//       .then((responseJson) => {
//         let ds = new Text.DataSource({rowHasChanged: (r1, r2) => r1 !== r2,
//         sectionHeaderHasChanged: (s1, s2) => s1 !== s2});
//         this.setState({
//           isLoading: false,
//           dataSource: ds.cloneWithRows(responseJson),
//         },
//         function() {
//           cart=responseJson;

//           console.log('cart: ', cart);
//           cartData=cart;
//           console.log('data:', cartData);
//         });
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   }

//   _renderItem({ item, index }) {
//     const {
//       containerStyle,
//       lastItemStyle,
//       imageStyle,
//       textStyle,
//       counterStyle,
//       priceStyle } = styles;
      
//       return (
//         <View style={containerStyle}>
//           <View style={goodsStyle}>
//             <Icon name="ios-cart" size={20} style={{ marginRight: 8 }} />
//             <Text>{cartData.length}</Text>
//           </View>
    
//           <View style={totalStyle}>
//             <Text>{item.cartData}</Text>
//             <Text>$300</Text>
//           </View>
//         </View>
//         );
// } 
// render() {
//   return(
//     <Text data={cartData}
//     renderItem={this._renderItem}
//     keyExtractor={(item) => item.id}
//     />
//   );
// }

// }

const styles = {
  containerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 15
  },
  goodsStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  totalStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
};


export default TotalComponent;