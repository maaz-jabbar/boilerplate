import React, {Component} from 'react';
import {
  View,
  Text,
} from 'react-native';
import {getStatusBarHeight} from 'react-native-status-bar-height';

export default class index extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          paddingTop: 20 + getStatusBarHeight(),
          backgroundColor: 'white',
          padding: 10,
        }}>
       </View>
    );
  }
}
