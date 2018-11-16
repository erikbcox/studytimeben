import React from 'react';
import { ScrollView, StyleSheet,Text } from 'react-native';
import { Domino } from '../components/Domino';
import { DominoRow } from '../components/DominoRow';
import { AnswerRow } from '../components/AnswerRow';
import { MagicSquare } from '../components/MagicSquare';

export default class MathScreen extends React.Component {
  static navigationOptions = {
    title: 'Math',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        {/* Go ahead and delete ExpoLinksView and replace it with your
           * content, we just wanted to provide you with some helpful links */}
      
        <MagicSquare />    
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
