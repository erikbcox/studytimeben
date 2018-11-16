import React from 'react';
import { Dimensions, Text, View } from 'react-native';


export class Domino extends React.Component {
  constructor(props) {
    super(props)
    width = props.width;
    squareDim = (width / 2);
    this.state = { squareDim }
  }

  render() {

    boxStyle = {
      parentBox: {
        flex: 1, 
        flexDirection: 'row', 
        fontSize: 40, 
        justifyContent: 'space-between' ,
        borderWidth:2,
        borderColor:'#34495e',
        borderRadius:20,
      },
      outerBox: {
        width: this.state.squareDim,
        justifyContent: 'center',
      },
      leftBox:{   
      },
      rightBox:{
      },
      text: {
        fontSize: 60,
        textAlign: 'center',
      }
    };

    return <View style={boxStyle.parentBox}>
      <View style={[boxStyle.outerBox, boxStyle.leftBox]}>
        <Text style={boxStyle.text}>{this.props.leftValue}</Text></View>
      <View style={{borderRightColor: '#34495e',borderRightWidth: 2,}}>
        <Text>{''}</Text></View>  
      <View style={[boxStyle.outerBox,boxStyle.rightBox]}>
        <Text style={boxStyle.text}>{this.props.rightValue}</Text>
      </View>
    </View>
  }
}
