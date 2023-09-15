import {TouchableOpacity, View, Text, Image, ScrollView} from 'react-native';
import React, {Component} from 'react';
import InputField from '../components/InputField';
import {BlueColor, GreenColor, OrangeColor} from '../assets/style/Colors';

export class RegisterScreen extends Component {
  render() {
    return (
 

<ScrollView style={{ flex: 1,  backgroundColor: BlueColor,}}>
  <View style={{justifyContent: 'center', alignItems: 'center', marginTop:50}}>

  <Image style={{width: 240, height: 240, marginBottom: 20}} source={require('../assets/images/logo.png')} />

<InputField
  placeholder="User Name"
  image={require('../assets/images/email.png')}
  color={GreenColor}
/>

<InputField
  placeholder="email@gmail.com"
  image={require('../assets/images/email.png')}
  color={GreenColor}
/>
<InputField
  placeholder="03xxxxxxxx"
  length={11}
  image={require('../assets/images/email.png')}
  color={GreenColor}
/>

<InputField
  placeholder="*********"
  image={require('../assets/images/password.png')}
  type={true}
  color={GreenColor}
/>

<View style={{ backgroundColor: 'white', width: '90%', paddingVertical: 15, borderRadius: 10, marginTop: 10 }}>
  <Text style={{textAlign: 'center', color: 'black', fontWeight: 'bold'}}> SignUp </Text>
</View>

<View style={{flexDirection: 'row', marginTop: 15}}>
  <Text style={{color: 'white'}}>Have an account?</Text>

  <TouchableOpacity onPress={()=>this.props.navigation.navigate('login')}>
    <Text style={{color: OrangeColor, marginLeft: 5, fontWeight:'bold'}}>Login</Text>
  </TouchableOpacity>
  
</View>
  </View>


      </ScrollView> 
  
    );
  }
}

export default RegisterScreen;
