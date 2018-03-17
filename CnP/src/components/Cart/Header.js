import React from 'react';
import { Text, View,TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Header = () => {
  return (
    <View style={styles.headerStyle}>
      <Text style={{ fontSize: 18 }}>FOOD</Text>
      <TouchableOpacity>
        <Text>Chicken</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text>Sandwich</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text>Salads</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text>Munchies</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text>Sides</Text>
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
    paddingLeft: 15,
    paddingRight: 15,
    // borderBottomWidth: 1,
    borderColor: '#e2e2e2'
  }
};

export default Header;

