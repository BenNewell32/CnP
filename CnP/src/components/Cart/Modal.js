import React, {Component} from 'react';
import {Modal,Linking, Stylesheet, Text, TouchableHighlight, View,StyleSheet, Image,  TouchableOpacity, FlatList, ImageBackground, SectionList, AppRegistry,  ActivityIndicator, ListView, Alert, TabBarIOS, AlertIndicatorIOS, ActivityIndicatorIOS, AlertIOS, Br, SegmentedControlIOS} from 'react-native';
import {Icon, Button} from 'react-native-elements'
import ItemContainer from './ItemContainer' 
import BasketComponent from './BasketComponent' 
import Header from './Header' 
import Footer from './Footer.js' 

class ModalExample extends Component {
  
  state = {
    modalVisible: false,
  };

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {
    return (
      <View style={{marginTop: 22, backgroundColor: 'white', backgroundOpacity: '60%'}}>          
        <Modal
          animationType="slide"
          presentationStyle="overFullScreen"
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            alert('Modal has been closed.');
          }}>
          <View style={{marginTop: 50,
          height: 400,
          backgroundColor: 'white'
          }}>
            <View>
              <View>
              <Text
              style={{fontSize: 30, textAlign: "center", fontWeight: 0, backgroundColor: '#191919', color: 'white'}}>DETAILS:</Text>
              <Text style={{fontSize: 25, textAlign: "center", fontWeight: 0, backgroundColor: '#555555', color: 'white', marginTop: 2, marginBottom: 2}}>Fries or Tots</Text>
              <SegmentedControlIOS style={{tintColor: '#9EBA48'}}
                values={['Fries', 'Tots']}
                slectedSide={this.state.slectedSide}
                onChange={(event) => {
                  this.setState({slectedSide: event.nativeEvent.selectedSegmentIndex});
                }}
              />
              </View>
              {/* <Button
                 textStyle={{
                  textAlign:'left',
                  justifyContent: 'left'
                }}
                title='Fries'
                buttonStyle={{
                  width: 150,
                  height: 45,
                  backgroundColor: "#9EBA48",
                  borderColor: 'transparent',
                  borderWidth: 0,
                  borderRadius: 5,
                  margin: 5
                }}
                >
              </Button>
              <Button
                 textStyle={{
                  textAlign:'left',
                  justifyContent: 'left'
                }}
                title='Tots'
                buttonStyle={{
                  width: 150,
                  height: 45,
                  backgroundColor: "#9EBA48",
                  borderColor: 'transparent',
                  borderWidth: 0,
                  borderRadius: 5,
                  margin: 5
                }}
                >
              </Button> */}
                <View>
              <Text style={{fontSize: 25, textAlign: "center", fontWeight: 0, backgroundColor: '#555555', color: 'white', marginTop: 2, marginBottom: 2}}>Seasoning Options:</Text>
              <SegmentedControlIOS style={{tintColor: '#9EBA48'}}
                values={['Jerk', 'House', 'Southwest', '7 Chili']}
                selectedSeasoning={this.state.selectedSeasoning}
                onChange={(event) => {
                  this.setState({selectedSeasoning: event.nativeEvent.selectedSegmentIndex});
                }}
              />
              </View>
              {/* <Button
                 textStyle={{
                  textAlign:'left',
                  justifyContent: 'left'
                }}
                title='Jerk'
                buttonStyle={{
                  width: 150,
                  height: 45,
                  backgroundColor: "#9EBA48",
                  borderColor: 'transparent',
                  borderWidth: 0,
                  borderRadius: 5,
                  margin: 5
                }}
                >
              </Button>
              <Button
                textStyle={{
                  textAlign:'left',
                  justifyContent: 'left'
                }}
                title='House'
                buttonStyle={{
                  width: 150,
                  height: 45,
                  backgroundColor: "#9EBA48",
                  borderColor: 'transparent',
                  borderWidth: 0,
                  borderRadius: 5,
                  margin: 5
                }}
                // onPress={() =>
                // }
                >
              </Button>
              <Button
                 textStyle={{
                  textAlign:'left',
                  justifyContent: 'left'
                }}
                title='Southwest'
                buttonStyle={{
                  width: 150,
                  height: 45,
                  backgroundColor: "#9EBA48",
                  borderColor: 'transparent',
                  borderWidth: 0,
                  borderRadius: 5,
                  margin: 5
                }}
                >
              </Button>
             
              <Button
                 textStyle={{
                  textAlign:'left',
                  justifyContent: 'left'
                }}
                title='7 Chili'
                buttonStyle={{
                  width: 150,
                  height: 45,
                  backgroundColor: "#9EBA48",
                  borderColor: 'transparent',
                  borderWidth: 0,
                  borderRadius: 5,
                  margin: 5
                }}
                >
              </Button> */}
              <View>
              <Text style={{fontSize: 25, textAlign: "center", fontWeight: 0, backgroundColor: '#555555', color: 'white', marginTop: 2, marginBottom: 2}}>Add Chicken</Text>
              {/* <Button
                 textStyle={{
                  textAlign:'left',
                  justifyContent: 'left'
                }}
                title='Add Chicken'
                buttonStyle={{
                  width: 150,
                  height: 45,
                  backgroundColor: "#9EBA48",
                  borderColor: 'transparent',
                  borderWidth: 0,
                  borderRadius: 5,
                  margin: 5
                }}
                >
              </Button> */}
              <SegmentedControlIOS style={{tintColor: '#9EBA48'}}
              values={[' Add Rotisserie Chicken', 'No Chicken']}
              selectedChx={this.state.selectedChx}
              onChange={(event) => {
                this.setState({selectedChx: event.nativeEvent.selectedSegmentIndex});
              }}
            />
            </View>
              <View>
              <Button
                 textStyle={{
                  textAlign:'left',
                  justifyContent: 'center'
                }}
                title='Add To Cart'
                buttonStyle={{
                  width: 150,
                  height: 45,
                  backgroundColor: "#9EBA48",
                  borderColor: 'transparent',
                  borderWidth: 0,
                  borderRadius: 5,
                  margin: 15
                }}
                >
              </Button>
                </View>

              <TouchableHighlight
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}>
                <Text>Close</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>

        <TouchableHighlight
          onPress={() => {
            this.setModalVisible(true);
          }}>
          <Text>{this.props.value}</Text>
        </TouchableHighlight>
      </View>
    );
  }
}



export default ModalExample;