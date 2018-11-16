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
  render() {
    return <View style={{ height: 100, marginLeft: 3, marginRight: 3 }}>
      <View style={{ flexDirection: 'row', height: this.styles.row.height }}>
        <Domino width={this.styles.domino.width} 
                height={this.styles.row.height} 
                style={{ width: this.styles.domino.width, height: this.styles.row.height }} 
                leftValue={this.props.leftValue} rightValue={this.props.rightValue} />
        <Text style={{ width: '10%', height: this.styles.row.height, fontSize: 60, justifyContent: 'center', }}>=</Text>
        <View style={{ width: this.styles.answer.width, borderColor: '#A9A9A9', borderWidth: 2, }} >
        <TextInput style={{
            backgroundColor: 'khaki',
            textAlign: 'center',
            height: this.styles.answer.width,
            fontSize: 60, padding: 5,
          }}
            keyboardType='numeric' placeholder="?" maxLength={2}></TextInput>
        </View>
      </View>
    </View>
  }
}


