import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

function getStyles(width, height) {
  const headerHeight = 50;
  const bottomBuffer = 25;
  const rowHeight = (height - headerHeight - bottomBuffer) / 3
  const columnWidth = (width) / 3
  return {
    control: {
      height: height - bottomBuffer,
      width: width,
      backgroundColor: "#deb887",
      flex: 1,
      flexDirection: 'column'
    },
    top: {
      height: headerHeight,
      width: width,
      backgroundColor: "#6495ed",
    },
    row: {
      height: rowHeight,
      width: width,
      borderWidth: 2,
      borderColor: '#dc143c',
      flex: 1,
      flexDirection: 'row',

      justifyContent: 'space-between',
    },
    column: {
      height: rowHeight - 5,
      borderWidth: 2,
      borderColor: '#00bfff',
      width: columnWidth - 5
    }
  }
}

export class Dims extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      width: this.props.width,
      height: this.props.height,
      styles: getStyles(this.props.width, this.props.height)
    };
  }

  getConrolStyles = (control, width, height) => {
    return getStyles(width, height)[control];
  }

  renderWithStyle = () => {
    if (this.state.styles) {
      return <View style={this.getConrolStyles('control', this.props.width, this.props.height)}>
        <View style={this.getConrolStyles('top', this.props.width, this.props.height)}>
          <Text>Width: {this.props.width}</Text>
          <Text>Height: {this.props.height}</Text>
        </View>
        <View style={this.getConrolStyles('row', this.props.width, this.props.height)}>
          <View style={this.getConrolStyles('column', this.props.width, this.props.height)}><Text>Row 1 - Column 1</Text></View>
          <View style={this.getConrolStyles('column', this.props.width, this.props.height)}><Text>Row 1 - Column 2</Text></View>
          <View style={this.getConrolStyles('column', this.props.width, this.props.height)}><Text>Row 1 - Column 3</Text></View>
        </View>
        <View style={this.getConrolStyles('row', this.props.width, this.props.height)}>
          <View style={this.getConrolStyles('column', this.props.width, this.props.height)}><Text>Row 2 - Column 1</Text></View>
          <View style={this.getConrolStyles('column', this.props.width, this.props.height)}><Text>Row 2 - Column 2</Text></View>
          <View style={this.getConrolStyles('column', this.props.width, this.props.height)}><Text>Row 2 - Column 3</Text></View>
        </View>
        <View style={this.getConrolStyles('row', this.props.width, this.props.height)}>
          <View style={this.getConrolStyles('column', this.props.width, this.props.height)}><Text>Row 3 - Column 1</Text></View>
          <View style={this.getConrolStyles('column', this.props.width, this.props.height)}><Text>Row 3 - Column 2</Text></View>
          <View style={this.getConrolStyles('column', this.props.width, this.props.height)}><Text>Row 3 - Column 3</Text></View>
        </View>
      </View>
    } else {
      <View><Text>Loading...</Text></View>
    }
  }

  render() {
    return this.renderWithStyle();
    //<View><Text>{JSON.stringify(this.state)}{'\n'}</Text></View>
  }
}
