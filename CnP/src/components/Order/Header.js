import React from 'react';
import { Text, View,TouchableOpacity, SegmentedControlIOS } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Products from './Products';

const Header = () => {
  return (
    <View style={styles.headerStyle}>
      <Text style={{ fontSize: 18 }}>BEER</Text>
      <TouchableOpacity>
        <Text>Canned</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text>Draft</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = {
  headerStyle: {
    flex: 1,
    elevation: 2,
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    // borderBottomWidth: 1,
    borderColor: '#e2e2e2'
  }
};

export default Header;