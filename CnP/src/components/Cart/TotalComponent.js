import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

class TotalComponent extends React.Component {
  // { containerStyle, goodsStyle, totalStyle } = styles;
  constructor(props){
    super(props);
    this.state = {
      costTotal: '',
      count: ''
    }
  }
  containerStyle = styles.containerStyle;
  goodStyle = styles.goodsStyle;
  totalStyle = styles.totalStyle;
  orderDeets;

  render(){
        return (
          <View style={this.containerStyle}>
            {/*<View style={this.goodsStyle}>
              <Icon name="ios-cart" size={20} style={{ marginRight: 8 }} />
              <Text>{this.state.count}</Text>
            </View>

            <View style={this.totalStyle}>
              <Text>Total - </Text>
              <Text>$300</Text>
            </View>*/}
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