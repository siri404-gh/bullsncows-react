import React, { Component } from 'react';
import { AppRegistry, Text } from 'react-native';

export default class ReactUltimate extends Component {
  render() {
    return (
      <Text>Sreeram Padmanabhan world!</Text>
    );
  }
}

// skip this line if using Create React Native App
AppRegistry.registerComponent('reactUltimate', () => ReactUltimate);
