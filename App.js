import React, {Component} from 'react';
import Navigation from './components/Navigation';
import {Provider} from 'react-redux';    
import { myStore } from './redux/Store';

export class App extends Component {
  render() {
    return (
      <Provider store={myStore}>
        <Navigation />
      </Provider>
    );
  }
}

export default App;
