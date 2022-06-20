import * as React from "react"
import Svg, { Defs, G, Circle } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */

function SvgComponent(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={137.213}
      height={137.213}
      viewBox="0 0 137.213 137.213"
      {...props}
    >
      <Defs></Defs>
      <G data-name="handle">
        <G
          filter="url(#a)"
          transform="translate(37.5 35.5) translate(-37.5 -35.5)"
        >
          <Circle
            data-name="handle"
            cx={31.106}
            cy={31.106}
            r={31.106}
            transform="translate(37.5 35.5)"
            fill="#fff"
          />
        </G>
        <G
          filter="url(#b)"
          transform="translate(37.5 35.5) translate(-37.5 -35.5)"
        >
          <Circle
            data-name="handle"
            cx={31.106}
            cy={31.106}
            r={31.106}
            transform="translate(37.5 35.5)"
            fill="#f9b52b"
          />
        </G>
      </G>
    </Svg>
  )
}

export default SvgComponent
