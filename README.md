# Madrek


Step: 1 ->

// need to change below code in to "index.js" file in "rn-bubble-chart" node module

//*************************************************************************************************************************//
import React from 'react';
import {TouchableOpacity,View,Text} from 'react-native';
import * as d3 from 'd3new';
import Svg, {Circle,G,Text as SVGText,} from 'react-native-svg';

export default class BubbleChart extends React.Component {
  render() {
    const {height,width,data,textProps,circleProps} = this.props;

    let pack = data => d3.pack().size([width - 2, height - 2]).padding(3)(d3.hierarchy({ children: data }).sum(d => d.value))
    const root = pack(data);

    let fontSizeGenerator = (value) => {
      let size = 0
      if (value < 10) {
        size = 2
      } else if(value >= 10 && value < 50) {
        size = 6
      } else {
        size = 15
      }

return size
    }

    let leaves = []
    for (let leaf of root.leaves()) {
      leaves.push(
        <G transform={`translate(${leaf.x + 1},${leaf.y + 1})`} onPress={() => this.props.onClick(leaf.data.item)} >
         <Circle
            {...circleProps}
            r={leaf.r}
            fill={leaf.data.color}
          />
          <SVGText
            {...textProps}
            fill="#FFFFFF"
            fontSize={fontSizeGenerator(leaf.data.value)}
            x="0"
            y={leaf.data.value * 0.1}
            textAnchor="middle" >{leaf.data.name}</SVGText>
        </G>
      )
    }

    return (
      <View>
        <Svg width={width || 400} height={height || 300} >
          {leaves}
        </Svg>
      </View>
    )
  }

}


//*************************************************************************************************************************//


Step: 1 ->
// need to rename "d3" folder name in to "d3new" in node_modules file 