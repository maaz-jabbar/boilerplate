import React, {Component} from 'react';
import Nav from './src';
// import NavigationService from './src/config/NavigationService';
// import {Root} from 'native-base';
// import {Provider} from 'react-redux';
// import {store} from './src/redux';
import {StatusBar, View} from 'react-native';
console.disableYellowBox = true

class App extends Component {
  render() {
    return (
      <View style={{flex:1,backgroundColor:'white'}} >
        <StatusBar
          translucent={true}
          backgroundColor="white"
          barStyle="dark-content"
        />
        <Nav />
    
      </View>
    );
  }
}

export default App;