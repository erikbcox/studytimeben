import React from 'react';
import { Dimensions, Text, View, TextInput, StyleSheet } from 'react-native';
import { AnswerRow } from './AnswerRow';
import { Domino } from './Domino';
import { DominoRow } from './DominoRow';

export class MagicSquare extends React.Component {
  constructor(props) {
    super(props)
    let { width, height } = this.props;
    this.styles = StyleSheet.create({
      domino: {
        width: (width / 2)
      },
      equals: {
        width: (width / 4)
      },
      answer: {
        width: (width / 4)
      },
      row: {
        height: width / 4
      },
    });
  }


  screenWidth = () => this.props.width;
  headerHeight = () => 100;
  rowHeight = () => ((this.props.height - this.headerHeight()) / 3);
  controlHeight = () => (this.props.height - 25);

  render() {
    return <View style={{ flex: 1, flexDirection: 'column', height: this.controlHeight() }}>
      <Text style={{
        fontSize: 50,
        height: this.headerHeight(),
        textAlign: 'center',
        justifyContent: 'center',
      }}>Magic Dominos</Text>
      <DominoRow
        leftValue={1}
        rightValue={4}
        width={this.screenWidth()}
        height={this.rowHeight()} />
      <DominoRow
        leftValue={6}
        rightValue={3}
        width={this.screenWidth()}
        height={this.rowHeight()} />
      <AnswerRow width={this.props.width} height={this.rowHeight()} />
    </View>
      ;
  }
}
