 import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'; 
import SplashScreen from '../src/SplashScreen'; 
import LoginScreen from '../src/LoginScreen';
import RegisterScreen from '../src/RegisterScreen'; 
import FlashSale from '../src/FlashSale';
import ProfileScreen from '../src/ProfileScreen';  
import ProductDetail from '../src/ProductDetail';
import TabBarBottom from './TabBarBottom';
import CheckOutScreen from '../src/CheckOutScreen';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator>

            <Stack.Screen name="splash" component={SplashScreen} options={{headerShown:false}}/>
            <Stack.Screen name="tab" component={TabBarBottom} options={{headerShown:false}}/>
            <Stack.Screen name="login" component={LoginScreen} options={{headerShown:false}}/>
            <Stack.Screen name="register" component={RegisterScreen} options={{headerShown:false}}/> 
            <Stack.Screen name="productdetail" component={ProductDetail} options={{headerShown:false}}/>
            <Stack.Screen name="flashsale" component={FlashSale} options={{headerShown:false}}/>
            <Stack.Screen name="profile" component={ProfileScreen} options={{headerShown:false}}/>
            <Stack.Screen name="checkout" component={CheckOutScreen} options={{headerShown:false}}/>

        </Stack.Navigator>
  </NavigationContainer>
  )
}

export default Navigation