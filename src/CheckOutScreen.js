import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import { GreenColor, OrangeColor } from '../assets/style/Colors'; 
import { Increase_Qty } from '../redux/Action';

export class CheckOutScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Products: [],
    };
  }

  componentDidMount() {
    this.setState({Products: this.props.Arr});
  }
  
  render() {
    return (
      <View style={{flex: 1, padding:10}}>
        {this.state.Products.map((item) => (
              <View key={item.id} style={{marginBottom:10, borderRadius:15, flexDirection: 'row', borderColor: 'black', borderWidth: 1, padding: 10, }}>
                <View style={{flex:0.3}}>
                  <Image width={80} height={80} style={{marginTop:5, borderRadius: 20, borderColor: 'black', borderWidth: 1, }} source={{uri: item.image}} />
                </View>

                <View style={{flex:0.7}}>
                  <Text numberOfLines={1}>{item.title}</Text>
                  
                  <View style={{flexDirection:'row', alignItems:'center', marginBottom:10}}>
                  <Text>Rs: {item.price}</Text>
                  <Image style={{marginLeft:10, width:20, height:20}} source={require('../assets/images/rating.png')} />
                  <Text>  {item.rating.rate}</Text>
                  </View>

                  <View style={{flexDirection:'row', alignItems:'center'}}>

                  <Text style={{color:'white', fontSize:15, fontWeight:'bold', backgroundColor:OrangeColor,padding:8}}>-</Text>
                  <Text style={{color:'black', fontSize:15, fontWeight:'bold', padding:8}}>{item.qty}</Text>
                 
                  <TouchableOpacity onPress={()=>this.props.Increase_Qty(item)}>
                     <Text style={{color:'white', fontSize:15, fontWeight:'bold', backgroundColor:GreenColor,padding:8}}>+</Text>
                  </TouchableOpacity>
                  </View>
                </View>

                <View style={{flex:0.1, alignSelf:'flex-end'}}>
                  <Image width={40} height={40} source={require('../assets/images/bin.png')} />
                </View>
              </View>
            ) )}
      </View>
    );
  }
}
function mapStateToProps(state) {
  return {Arr: state.Arr};
}

function mapDispatchToProps(dispatch) {
    return {
        Increase_Qty: (item) => dispatch(Increase_Qty(item)),
    };
  }

export default connect(mapStateToProps,mapDispatchToProps)(CheckOutScreen);
