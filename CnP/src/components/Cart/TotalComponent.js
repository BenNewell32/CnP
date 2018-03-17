import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

class TotalComponent extends React.Component {
  // { containerStyle, goodsStyle, totalStyle } = styles;
  constructor(props){
    super(props);
  }
  containerStyle = styles.containerStyle;
  goodStyle = styles.goodsStyle;
  totalStyle = styles.totalStyle;
  orderDeets;

  ComponentDidMount(){
    fetch(`https://lit-reef-60415.herokuapp.com/order_details/${this.props.userState.id}`)
    .then((result) => result.json())
    .then((resultJSON) => {
      this.orderDeets = resultJSON;
      console.log('skdjfskldjfsdkjfksdjfskdjf  ||  ' + this.orderDeets)

    })
  }

  render(){
        return (
          <View style={this.containerStyle}>
            <View style={this.goodsStyle}>
              <Icon name="ios-cart" size={20} style={{ marginRight: 8 }} />
              <Text>{this.props.userState.id}</Text>
            </View>

            <View style={this.totalStyle}>
              <Text>Total - </Text>
              <Text>$300</Text>
            </View>
          </View>
        );
  }
};

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