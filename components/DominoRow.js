import React from 'react';
import { Domino } from './Domino';
import { Text, View, TextInput, StyleSheet } from 'react-native';


export class DominoRow extends React.Component {
  constructor(props) {
    super(props)
    this.styles = StyleSheet.create({
      domino: {
        width: (this.props.width / 2)
      },
      equals: {
        width: (this.props.width / 4)
      },
      answer: {
        width: (this.props.width / 4)
      },
      row: {
        height: this.props.width / 4
      },
    });
  }

  screenWidth = () => this.props.width;
  rowMargin = () => 15;
  rowWidth = () => this.screenWidth() - (this.rowMargin() * 2);
  dominoWidth = () => this.rowWidth() * .60;
  answerWidth = () => this.rowWidth() * .30;
  equalsWidth = () => this.rowWidth() * .10;

  rowHeight = () => this.props.height * .90;
  dominoHeight = () => this.rowHeight() * .90;
  answerHeight = () => this.rowHeight() * .90;
  equalsHeight = () => this.rowHeight() * .90;

  render() {
    return <View style={{
      flexDirection: 'row',
      height: this.rowHeight(),
      width: this.rowWidth(),
      justifyContent: 'space-between',
      marginLeft: this.rowMargin(),
      marginRight: this.rowMargin(),
      marginBottom: 15
    }}>
      <Domino width={this.dominoWidth()}
        height={this.dominoHeight()}
        style={{
          width: this.dominoWidth(),
          height: this.dominoHeight()
        }}
        leftValue={this.props.leftValue}
        rightValue={this.props.rightValue} />
      <View style={{
        width: this.equalsWidth(),
        height: this.equalsHeight(),
        textAlign: 'center',
        justifyContent: 'center',
      }}>
        <Text style={{
          fontSize: 60,
          textAlign: 'center',
        }}>=</Text>
      </View>
      <View style={{
        width: this.answerWidth(),
        borderColor: '#A9A9A9',
        borderWidth: 2,
      }} >
        <TextInput
          keyboardType='numeric'
          placeholder="?"
          maxLength={2}
          style={{
            textAlign: 'center',
            height: this.answerHeight(),
            fontSize: 60,
            padding: 5,
          }}></TextInput>
      </View>
    </View>
  }
}


