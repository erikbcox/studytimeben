/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Dimensions } from 'react-native';
import Device from './components/Device';
import MathScreen from './screens/MathScreen';

type Props = {};
export default class App extends Component<Props> {
  constructor() {
    super();
    this.state = {
      orientation: Device.isPortrait() ? 'portrait' : 'landscape',
      devicetype: Device.isTablet() ? 'tablet' : 'phone',
      width: Device.width(),
      height: Device.height()
    };
    Dimensions.addEventListener('change', () => {
      this.setState({
        orientation: Device.isPortrait() ? 'portrait' : 'landscape',
        width: Device.width(),
        height: Device.height(),
      });
    });

  }

  render() {
    return (
      <View style={styles.container}>
        <MathScreen />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
