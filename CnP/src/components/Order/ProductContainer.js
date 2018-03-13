import React, { Component } from 'react';
import { View } from 'react-native';
import Products from './Products';

class ProductContainer extends Component {
  render() {
    return (
      <View style={styles.containterStyle}>
        <Products />
      </View>
    );
  }
}

const styles = {
  containterStyle: {
    flex: 4,
    backgroundColor: '#DCDCDC'
  }
};

export default ProductContainer;