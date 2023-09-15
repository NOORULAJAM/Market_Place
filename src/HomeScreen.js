import {Text, View, FlatList,ScrollView, StyleSheet, TouchableOpacity, Image, Dimensions} from 'react-native';
import React, {Component} from 'react';
import SearchBar from '../components/SearchBar';
import axios from 'axios';
import { SliderBox } from "react-native-image-slider-box";
import Loader from '../components/Loader'; 
import { GreenColor } from '../assets/style/Colors'; 

class HomeScreen extends Component {
  constructor(props){
    super(props);
    this.state={
      loader:true,
      categories:[],
      GetProducts:'',
      FeatureImages:[
        require('../assets/images/3.jpg'),
        require('../assets/images/3.jpg'),
        require('../assets/images/3.jpg')
      ], 
    }
  }

  componentDidMount(){
    this.Products();
  }

  async Products(){
    const response = await axios.get('https://fakestoreapi.com/products');
    this.setState({GetProducts: response.data, loader: false })
  }

  FlashSale(item){
    return(
      <TouchableOpacity onPress={()=> this.props.navigation.navigate('productdetail',
      {ProductDetail: item})}>
         <View style={{padding:10, borderRadius:10, alignSelf:'center', backgroundColor:'white', width: Dimensions.get('screen').width / 2.3, margin:5, }}>
        <Image source={{uri: `${item.image}`}} height={100} />
        <Text style={{marginTop:10, color:'black', fontWeight:'bold'}} numberOfLines={1}>Name : {item.title}</Text>
        <Text style={{color:'black', fontWeight:'bold'}}>{item.category}</Text>
        <Text style={{color:GreenColor, fontWeight:'bold'}}> 50% off</Text>

        <View style={{flexDirection:'row', justifyContent:'space-between'}}>
          <Text style={{padding:5, marginTop:10, width:110, textAlign:'center', color:'white', fontWeight:'bold', borderRadius:10, backgroundColor:GreenColor,textAlignVertical:'center'}}>RS: {item.price}</Text>
          <Image resizeMode='cover' style={{width:35, height:35, padding:5, marginTop:10}} source={require('../assets/images/AddToCard.png')}/>
        </View>
    
      </View> 
      </TouchableOpacity>
    );
  }

  TrandingNow(item){
    return(
      <TouchableOpacity onPress={()=> this.props.navigation.navigate('productdetail')}>
      <View style={{marginBottom:100, padding:10, borderRadius:10, alignSelf:'center', backgroundColor:'white', width: Dimensions.get('screen').width / 2.3, margin:5,}}>
        <Image source={{uri: `${item.image}`}} height={100} />
        <Text style={{marginTop:10,color:'black',fontWeight:'bold'}} numberOfLines={1}>Name : {item.title}</Text>
        <Text style={{color:'black',fontWeight:'bold'}}>Category : {item.category}</Text>

        <View style={{flexDirection:'row', justifyContent:'space-between'}}>
          <Text style={{padding:5, marginTop:10, width:110, textAlign:'center', color:'white', fontWeight:'bold', borderRadius:10, backgroundColor:GreenColor,textAlignVertical:'center'}}>RS: {item.price}</Text>
          <Image style={{width:35, height:35, padding:5, marginTop:10}} source={require('../assets/images/AddToCard.png')}/>
        </View>
    
      </View> 
      </TouchableOpacity>
    );
  }
  
 
  render() {
     
    return (
      <>  
       {!this.state.loader ? 
        <View style={{flex: 1}}>
        <ScrollView showsVerticalScrollIndicator={false} style={{flex:1, padding: 15}}>
          <SearchBar /> 

          {/* IMAGE SLIDER START */}
          <View style={{alignSelf:'center', height:200}}>
            <SliderBox images={this.state.FeatureImages}
            sliderBoxHeight={180}
            onCurrentImagePressed={index => console.warn(`image ${index} pressed`) }
            dotColor="#E9D8C6"
            inactiveDotColor="#E9D8C6"
            autoplay
            circleLoop
            autoplayInterval={5000}
            ImageComponentStyle={{borderRadius: 15, width: '90%',  marginTop: 15}}
          />
          </View>
          {/* IMAGE SLIDER END */}

          {/* CATEGORY SECTION START */}
          <Text style={{fontSize:20, fontWeight:'bold', color:'black', marginTop:10, marginBottom:8}}> Categories</Text>
          <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
            <View style={{flexDirection:'row', justifyContent:'space-between'}}>

              {/* Men's Clothes */}
              <View style={Style.CategoryView}>
              <Image style={Style.CategoryImage} source={require('../assets/images/men_cat.jpg')}/>
              <Text style={Style.CategoryText}>Men's Clothes </Text>
              </View>

              {/* Women's Clothes */}
              <View style={Style.CategoryView}>
              <Image style={Style.CategoryImage} source={require('../assets/images/women_cat.jpg')}/>
              <Text style={Style.CategoryText}>Women's Clothes </Text>
              </View>

              {/* Kid's Clothes */}
              <View style={Style.CategoryView}>
              <Image style={Style.CategoryImage} source={require('../assets/images/kid_cat.jpeg')}/>
              <Text style={Style.CategoryText}>Kids's Clothes </Text>
              </View>

              {/* Jewellery Clothes */}
              <View style={Style.CategoryView}>
              <Image style={Style.CategoryImage} source={require('../assets/images/jewellery_cat.jpg')}/>
              <Text style={Style.CategoryText}>Jewellery </Text>
              </View>

              <View style={Style.CategoryView}>
              <Image style={Style.CategoryImage} source={require('../assets/images/electronic_cat.png')}/>
              <Text style={Style.CategoryText}>Electronic </Text>
              </View>             
              
            </View>
          </ScrollView>
          {/* CATEGORY SECTION END */}

          {/* FLASH SALE START */}
          <View style={{flexDirection:'row', justifyContent:'space-between'}}>
          <Text style={{fontSize:20, fontWeight:'bold', color:'black', marginTop:10, marginBottom:8}}> Flash Sale</Text>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('flashsale')}>
          <Text style={{fontSize:14, fontWeight:'bold', color:'#FF6A4B', marginTop:10, marginBottom:8}}>View All</Text>
          </TouchableOpacity>
          </View>

          <FlatList
            data={this.state.GetProducts} 
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            scrollEnabled={true}
            renderItem={(item) => this.FlashSale(item.item)}
          />
          {/* FLASH SALE END */}

          {/* TRANDING NOW START */}
          <View style={{flexDirection:'row', justifyContent:'space-between'}}>
          <Text style={{fontSize:20, fontWeight:'bold', color:'black', marginTop:10, marginBottom:8}}> Tranding Now </Text>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('flashsale')}>
          <Text style={{fontSize:14, fontWeight:'bold', color:'#FF6A4B', marginTop:10, marginBottom:8}}> View All </Text>
          </TouchableOpacity>
          </View>

          <FlatList
            data={this.state.GetProducts} 
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            scrollEnabled={true}
            renderItem={(item) => this.TrandingNow(item.item)}
          />
          {/* TRANDING NOW END */}
          
        </ScrollView>
        {/* ////////  BOTTOM TAB BAR  /////// */}
 
      </View> : <Loader/>}
   
      </>
    
    )
  }
  }
 

const Style = StyleSheet.create({
CategoryView:{
  alignItems:'center', margin:10
},
CategoryImage:{
  width:70, height:70, borderRadius:35, borderWidth:1, borderColor:'black'
},
CategoryText:{
  marginTop:10, fontWeight:'700', color:'black'
},

})


export default  HomeScreen;