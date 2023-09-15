import LottieView from 'lottie-react-native';
import React, {Component} from 'react';
import {View, Text} from 'react-native';

export default class Loader extends Component {

  render() {
    return (
      <>
        <View style={{position: 'absolute', left: 0, right: 0, top: 0, bottom: 20, justifyContent: 'center', alignItems: 'center', }}>
            <LottieView style={{width:'100%', height:250}} source={require('../assets/images/loader.json')} autoPlay loop />
            <Text style={{ marginTop:-15, marginLeft: 10, fontSize: 25, fontWeight: 'bold', color: '#318CE7', }}>
            Creatrix Market Place
          </Text>
            <Text style={{  marginLeft: 10, fontSize: 25, fontWeight: 'bold', color: '#318CE7', }}>
            Loading...
          </Text>
        </View>
      </>
    );
  }
}
