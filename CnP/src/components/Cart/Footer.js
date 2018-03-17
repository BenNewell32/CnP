import React from 'react';
import { Text, View ,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import TotalComp from './TotalComponent';
import Order from '../../Order';

class Footer extends React.Component {
  constructor(props){
    super(props)
  }

  deleteItems = (id) => {
    fetch(`https://lit-reef-60415.herokuapp.com/delete/cart`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: id
      })
    }).then((result) => this.props.navigator.push({
              title: 'Order',
              component: Order,
              passProps: {userState: this.props.userState}
            }))
    .catch((error) => {
      console.error(error);
    });
  }

  render(){
      return (
        <View style={styles.containerStyle}>
          <TotalComp userState={this.props.userState} />
          <View style={styles.buttonContainerStyle}>
            <View style={styles.closeButtonStyle}>
            <TouchableOpacity
              onPress={()=>{
                  this.deleteItems(this.props.userState.id);
                }}
            >
              <Text style={{ color: '#fff' }}>Clear Cart</Text>
            </TouchableOpacity>

            </View>

            <View style={styles.checkoutButtonStyle}>
              <TouchableOpacity
                onPress={()=>{
                  this.deleteItems(this.props.userState.id);
                }}
              >
              <Text style={{ color: '#fff' }}>Complete Purchase</Text>
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
    paddingRight: 40,
    paddingLeft: 40,
    borderRadius: 3,
  }
};
export default Footer;

