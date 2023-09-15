import { View, Text, FlatList, Image } from 'react-native'
import React from 'react';

const ProductRender = (item)=>{
    return(
      <View style={{justifyContent:'space-between', alignItems:'center'}}>
 
      <View style={{padding:10,borderRadius:10,alignSelf:'center', backgroundColor:'white',width: Dimensions.get('screen').width / 2.3, margin:5, height:230}}>
        <Image source={{uri: `${item.image}`}} height={100} />
        <Text style={{marginTop:10,color:'black',fontWeight:'bold'}} numberOfLines={1}>Name : {item.title}</Text>
        <Text style={{color:'black',fontWeight:'bold'}}>Category : {item.category}</Text>

        <View style={{flexDirection:'row', justifyContent:'space-between'}}>
          <Text style={{padding:5, marginTop:10, width:110, textAlign:'center', color:'black', fontWeight:'bold', borderRadius:10, backgroundColor:'#FF6A4B',textAlignVertical:'center'}}>RS: {item.price}</Text>
          <Image style={{width:35, height:35}} source={require('../assets/images/add-shopping.png')}/>
        </View>
    
      </View> 
      </View>
    
    );

  }
const OurProducts = () => {
    
  return (
     
       <FlatList
      data={this.state.GetProducts.slice(0, 6)}
      numColumns={2}
      horizontal={false}
      renderItem={(item)=> ProductRender(item.item)}
      /> 
  )
}

export default OurProducts