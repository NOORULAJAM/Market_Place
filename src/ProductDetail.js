import {Image, ScrollView, Text, View, TouchableOpacity} from 'react-native';
import React, {Component} from 'react';
import {GreenColor} from '../assets/style/Colors';
import {connect} from 'react-redux';
import {AddToCart} from '../redux/Action';

export class ProductDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ProductDetail: this.props.route.params.ProductDetail,
    };
  }

  addItem(){ 
    this.props.AddToCart(this.state.ProductDetail);
  };

  render() {
     
    return (
      <View style={{flex: 1, backgroundColor: '#fff'}}>
        <ScrollView style={{flex: 1}}>
          <View style={{paddingVertical: '15%', width: '100%'}}>
            <Image
              resizeMode="contain"
              style={{width: '100%', height: 150}}
              source={{uri: `${this.state.ProductDetail.image}`}}
            />
            <TouchableOpacity style={{ position: 'absolute', right: 25, top: 20, backgroundColor: '#FF6A4B', padding: 10, borderRadius: 15, }} onPress={()=> this.props.navigation.navigate('checkout')}>
             
                <Image
                  tintColor={'white'}
                  source={require('../assets/images/cart.png')}
                />
                <Text style={{ position: 'absolute', top: -8, left: -5, borderRadius: 15, backgroundColor: GreenColor, paddingHorizontal: 5, color: 'white', fontSize: 15, }}>
                  {this.props.Arr ? this.props.Arr.length : '0'}
                </Text>
               
            </TouchableOpacity>
            
          </View>

          <View style={{ shadowColor: '#000', shadowOffset: {width: 0, height: -6}, shadowOpacity: 0.3, shadowRadius: 7.49, flex: 1, elevation: 4, borderTopLeftRadius: 30, borderTopRightRadius: 30, backgroundColor: '#F0F0F0', borderRadius: 8, width: '100%', }}>
            <View style={{padding: 20, marginBottom: 100}}>
              {/* PRODUCT TITLE */}
              <Text style={{color: 'black', fontSize: 20, fontWeight: 'bold'}}>
                {this.state.ProductDetail.title}
              </Text>

              {/* PRODUCT RATING */}
              <View
                style={{marginTop: 10, marginLeft: -5, flexDirection: 'row'}}>
                <Image source={require('../assets/images/rating.png')} />
                <Text style={{ marginLeft: 5, marginRight: 2, color: 'black', fontSize: 18, fontWeight: 'bold', }}>
                  {this.state.ProductDetail.rating.rate}
                </Text>
                <Text style={{ textAlignVertical: 'bottom', color: '#f4f4f4', fontSize: 12, }}>
                  ({this.state.ProductDetail.rating.count} Reviews)
                </Text>
              </View>

              {/* PRODUCT CATEGORY */}
              <Text style={{ fontSize: 15, color: 'black', fontWeight: 'bold', textAlign: 'justify', marginTop: 10, }}>
                Category : {this.state.ProductDetail.category}
              </Text>

              {/* PRODUCT DESCRIPTIONS */}
              <Text style={{fontSize: 15, textAlign: 'justify', marginTop: 10}}>
                {this.state.ProductDetail.description}
              </Text>

              {/* PRODUCT SIZE */}
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={{ fontSize: 15, color: 'black', textAlign: 'justify', marginTop: 10, fontWeight: 'bold', }}>
                  Size
                </Text>
                <Text style={{ fontSize: 15, color: 'black', textAlign: 'justify', marginTop: 10, fontWeight: 'bold', }}>
                  S - M - L - XL - XXL{' '}
                </Text>
              </View>

              {/* PRODUCT CASH ON DELIVERY */}
              <View style={{marginTop: 15, flexDirection: 'row'}}>
                <Image
                  source={require('../assets/images/cashondelivery.png')}
                />
                <Text style={{ marginLeft: 10, marginRight: 2, color: 'black', fontSize: 16, fontWeight: 'bold', }}>
                  Cash On Delivery
                </Text>
              </View>

              {/* PRODUCT CASH ON DELIVERY */}
              <View style={{marginTop: 15, flexDirection: 'row'}}>
                <Image source={require('../assets/images/delivery.png')} />
                <Text style={{ marginLeft: 10, marginRight: 2, color: 'black', fontSize: 16, fontWeight: 'bold', }}>
                  Free Delivery
                </Text>
                <Text style={{marginTop: 5, color: '#f4f4f4', fontSize: 12}}>
                  ( 4 - 5 Days )
                </Text>
              </View>

              {/* CLIENT REVIEWS */}
              <Text style={{ marginTop: 15, color: 'black', fontSize: 18, fontWeight: 'bold', }}>
                Product Reviews
              </Text>

              <View style={{ borderRadius: 15, backgroundColor: 'white', padding: 10, marginTop: 15, }}>
                <View style={{flexDirection: 'row'}}>
                  <Image source={require('../assets/images/user.png')} />
                  <Text style={{ marginLeft: 10, marginTop: 3, color: 'black', fontSize: 16, fontWeight: 'bold', }}>
                    User Name
                  </Text>
                </View>
                <Text style={{marginTop: 5, fontSize: 16}}>Best Product</Text>
              </View>

              <View style={{ borderRadius: 15, backgroundColor: 'white', padding: 10, marginTop: 15, }}>
                <View style={{flexDirection: 'row'}}>
                  <Image source={require('../assets/images/user.png')} />
                  <Text style={{ marginLeft: 10, marginTop: 3, color: 'black', fontSize: 16, fontWeight: 'bold', }}>
                    User Name
                  </Text>
                </View>
                <Text style={{marginTop: 5, fontSize: 16}}>Best Product</Text>
              </View>
            </View>
          </View>
        </ScrollView>
        {/* BOTTOM ADD TO CART */}
        <View style={{ borderTopRightRadius: 35, borderBottomLeftRadius: 35, position: 'absolute', bottom: 5, backgroundColor: GreenColor, width: '100%', padding: 20, }}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View>
              <Text style={{color: 'white', fontSize: 15, fontWeight: 'bold'}}>
                Price
              </Text>
              <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}>
                RS : {this.state.ProductDetail.price}
              </Text>
            </View>
            <TouchableOpacity onPress={() => this.addItem()}>
               <View style={{flexDirection: 'row', alignItems: 'center'}}>
                 <Text style={{ backgroundColor: '#FF6A4B', color: 'white', fontSize: 20, fontWeight: 'bold', paddingHorizontal: 15, paddingVertical: 10, borderRadius: 20, }}>
                   Add To Cart
                 </Text>
               </View>
             </TouchableOpacity>
           
          </View>
        </View>
      </View>
    );
  }
}

function mapStateToProps(state) { 
 
  return {Arr: state.Arr};
}

function mapDispatchToProps(dispatch) {
  return {
    AddToCart: (item) => dispatch(AddToCart(item)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);
