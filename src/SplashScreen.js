import { Text, View} from 'react-native';
import React, {Component} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import TrollyLoader from '../components/TrollyLoader';

export class SplashScreen extends Component {
  componentDidMount(){
    setTimeout(() => {
      this.props.navigation.replace('tab');
  }, 3000); 
  }
  render() {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: '#318CE7'}}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <TrollyLoader />
          <Text style={{ marginTop: -20, marginLeft: 10, fontSize: 25, fontWeight: 'bold', color: 'white', }}>
            Creatrix Market Place
          </Text>
        </View>
      </SafeAreaView>
    );
  }
}

export default SplashScreen;
