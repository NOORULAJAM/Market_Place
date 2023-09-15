import React, {Component} from 'react';
import HomeScreen from '../src/HomeScreen';
import ProfileScreen from '../src/ProfileScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image, View} from 'react-native';
import AddToCartScreen from '../src/AddToCartScreen';
import CheckOutScreen from '../src/CheckOutScreen';
import { connect } from 'react-redux';

export class TabBarBottom extends Component {
  render() {
    const Tab = createBottomTabNavigator();
    return (
      <Tab.Navigator screenOptions={{headerShown: false, tabBarStyle: { height:60, borderTopLeftRadius: 30,borderTopRightRadius:30, borderTopWidth: 2, borderColor: 'rgba(255, 255, 255, 0.1)', },}}>
        
        <Tab.Screen name="home" component={HomeScreen}
          options={{
            tabBarLabel: () => {
              return null;
            },
            tabBarIcon: ({focused}) => {
              return (
                <View >
                  <Image
                    source={require('../assets/images/home.png')} 
                    style={{width: 30, height: 30}}
                  />
                </View>
              );
            },
          }}
        />

        <Tab.Screen name="checkout" component={CheckOutScreen}
          options={{
            tabBarLabel: () => {
              return null;
            }, 
            
            // tabBarBadge: this.props.Arr.length,
            tabBarIcon: ({focused}) => {
              return (
                <View>
                  <Image source={require('../assets/images/cart.png')} style={{width: 25, height: 25}} />
                </View>
              );
            },
          }}
        />

        <Tab.Screen name="addtocart" component={AddToCartScreen}
          options={{
            tabBarLabel: () => {
              return null;
            },  
            tabBarIcon: ({focused}) => {
              return (
                <View>
                  <Image
                    source={require('../assets/images/discount.png')}
                    style={{width: 25, height: 25}}
                  />
                </View>
              );
            },
          }}
        />

        <Tab.Screen name="profile" component={ProfileScreen}
          options={{
            tabBarLabel: () => {
              return null;
            },
            tabBarIcon: ({focused}) => {
              return (
                <View>
                  <Image
                    source={require('../assets/images/account.png')}
                    style={{width: 25, height: 25}}
                  />
                </View>
              );
            },
          }}
        />
      </Tab.Navigator>
    );
  }
}

function mapStateToProps(state){
  console.log(state.Arr)
  return {Arr: state.Arr};
}

export default connect(mapStateToProps)(TabBarBottom);
