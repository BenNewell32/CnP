import React from 'react';
import { Text, View,TouchableOpacity, SegmentedControlIOS } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Products from './Products';

const Header = () => {
  return (
    <View style={styles.headerStyle}>
    <TouchableOpacity>
      <Icon name="ios-close" size={35} color="#a8a9ad" onPress={() => this.props.nav} />
      </TouchableOpacity>
      <Text style={{ fontSize: 18 }}>BEER</Text>
          <Text style={{fontSize: 25, textAlign: "center", fontWeight: 0, backgroundColor: '#555555', color: 'white', marginTop: 2, marginBottom: 2}}>Seasoning Options:</Text>
              <SegmentedControlIOS style={{tintColor: '#9EBA48'}}
                values={['Canned', 'Draft']}
                selectedBeer={this.state.selectedBeer}
                onChange={(event) => {
                  this.setState({selectedBeer: event.nativeEvent.selectedSegmentIndex});
                }}
              />
      {/* <TouchableOpacity>
        <Text>Canned</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text>Draft</Text>
      </TouchableOpacity> */}
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

