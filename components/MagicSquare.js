import React from 'react';
import { Dimensions, Text, View,TextInput,StyleSheet } from 'react-native';
import { AnswerRow } from './AnswerRow';
import { Domino } from './Domino';
import { DominoRow } from './DominoRow';

export class MagicSquare extends React.Component {
  constructor(props) {
    super(props)
    let { width, height } = Dimensions.get('window')
    this.state = { width, height };
    this.styles = StyleSheet.create({
      domino :{
        width: (this.state.width / 2)
      },
      equals: {
        width: (this.state.width / 4)
      },
      answer:{        
        width: (this.state.width / 4)
      },
      row:{
        height: this.state.width / 4
      },
    });
  }
  render() {
    return <View style={{ flex: 1, flexDirection: 'column' }}>
      <Text style={{fontSize:50, height:this.styles.row.height*.90, textAlign:'center', justifyContent: 'center',}}>Magic Dominos</Text>
      <DominoRow leftValue={1} rightValue={4} width={this.state.width} />
      <DominoRow leftValue={6} rightValue={3} width={this.state.width} />
      <AnswerRow width={this.state.width} />
    </View>
      ;
  }
}
