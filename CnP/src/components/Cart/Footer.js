import React from 'react';
import { Text, View ,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import TotalComp from './TotalComponent';

class Footer extends React.Component {
  constructor(props){
    super(props)
  }


  render(){
      return (
        <View style={styles.containerStyle}>
          <TotalComp userState={this.props.userState} />
          <View style={styles.buttonContainerStyle}>
            <View style={styles.closeButtonStyle}>
            <TouchableOpacity>
              <Text style={{ color: '#fff' }}>Close</Text>
            </TouchableOpacity>

            </View>

            <View style={styles.checkoutButtonStyle}>
              <TouchableOpacity>
              <Text style={{ color: '#fff' }}>Go to checkout</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      );
    }
};

const styles = {
  containerStyle: {
    flex: 1,
    paddingRight: 15,
    paddingLeft: 15,
    borderTopWidth: 1,
    borderColor: '#e2e2e2',
  },
  buttonContainerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 15,
  },
  closeButtonStyle: {
    backgroundColor: '#7f8c8d',
    padding: 10,
    paddingRight: 30,
    paddingLeft: 30,
    borderRadius: 3,
  },
  checkoutButtonStyle: {
    backgroundColor: '#9EBA48',
    padding: 10,
    paddingRight: 60,
    paddingLeft: 60,
    borderRadius: 3,
  }
};
export default Footer;

