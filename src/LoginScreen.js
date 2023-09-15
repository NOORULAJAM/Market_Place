import {TouchableOpacity, View, Text, Image, ScrollView} from 'react-native';
import React, {Component} from 'react';
import InputField from '../components/InputField';
import {BlueColor, GreenColor, OrangeColor} from '../assets/style/Colors';

export class LoginScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: BlueColor}}>

<Image style={{width: 240, height: 240, marginBottom: 20}} source={require('../assets/images/logo.png')} />

<InputField
  placeholder="email@gmail.com"
  image={require('../assets/images/email.png')}
  color={GreenColor}
/>
<InputField
  placeholder="*********"
  image={require('../assets/images/password.png')}
  type={true}
  color={GreenColor}
/>

<Text style={{color: OrangeColor, alignSelf:'flex-start', marginLeft:23, marginTop: 10, fontWeight:'bold'}}>Forget Password</Text>

<View style={{ backgroundColor: 'white', width: '90%', paddingVertical: 15, borderRadius: 10, marginTop: 10 }}>
  <Text
    style={{textAlign: 'center', color: 'black', fontWeight: 'bold'}}>
    Login
  </Text>
</View>

<View style={{flexDirection: 'row', marginTop: 15}}>
  <Text style={{color: 'white'}}>Don't have an account</Text>

  <TouchableOpacity onPress={()=>this.props.navigation.navigate('register')}>
    <Text style={{color: OrangeColor, marginLeft: 5, fontWeight:'bold'}}>SignUp</Text>
  </TouchableOpacity>
  
</View>

      </View>
    );
  }
}

export default LoginScreen;
