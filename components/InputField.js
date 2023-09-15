import { Image, Text, TextInput, View } from 'react-native'
import React, { Component } from 'react'

const InputField = ({placeholder, image, color, type, length}) => {
  return (
    <View style={{ marginBottom:15, backgroundColor:'white', borderRadius:15, borderWidth:1, width:'90%', flexDirection:'row', justifyContent:'space-between', padding:5, alignItems:'center'}}>  
        <TextInput maxLength={length} secureTextEntry={type} placeholder = {placeholder} />
        <Image source={image} tintColor={color}/>
    </View>
  )
}

export default InputField;
