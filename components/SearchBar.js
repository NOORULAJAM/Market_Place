import {Text,TextInput, View, Image} from 'react-native';
import React, {Component} from 'react';

export class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      SearchItem: '',
    };
  }
  
  render() {
    return (
      <View style={{ justifyContent: 'space-between', flexDirection: 'row', borderWidth: 1, borderRadius: 30, padding: 5, }}>
        <TextInput
          style={{flex: 1, marginLeft: 10}}
          placeholder="Search..."
          onChangeText={text => this.setState({SearchItem: text})}
        />
        <Image
          style={{marginRight: 10, alignSelf: 'center'}}
          source={require('../assets/images/search.png')}
        />
      </View>
    );
  }
}

export default SearchBar;
