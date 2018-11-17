import React from 'react';
import { Dimensions, ScrollView, StyleSheet, Text } from 'react-native';
import { Layouter } from '../components/Layouter';
import { Dims } from '../components/Dims';
import { Device } from '../components/Device';
import { MagicSquare } from '../components/MagicSquare';

export default class MathScreen extends React.Component {
  constructor(props) {
    super(props)
    let { width, height } = Dimensions.get('window')
    this.state = { width, height };
    Dimensions.addEventListener('change', () => {
      let { width, height } = Dimensions.get('window')
      this.setState({
        width: width,
        height: height,
      });
    });
  }
  static navigationOptions = {
    title: 'Math',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <MagicSquare width={this.state.width} height={this.state.height} />
        <Dims width={this.state.width} height={this.state.height} />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
