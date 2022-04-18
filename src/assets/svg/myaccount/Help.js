import * as React from "react"
import Svg, { G, Circle, Path } from "react-native-svg"

function Help(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width}
      height={props.height}
      viewBox="0 0 65 65"
      {...props}
    >
      <G
        transform="translate(.5 .5)"
        fill="none"
        stroke={props.color} //"#8c67a9"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={5}
      >
        <Circle
          data-name="Ellipse 98"
          cx={30}
          cy={30}
          r={30}
          transform="translate(2 2)"
        />
        <Path data-name="Line 337" transform="translate(32 15)" d="M0 0L0 20" />
        <Path
          data-name="Line 338"
          transform="translate(31.986 43.981)"
          d="M0 0L0.03 0"
        />
      </G>
    </Svg>
  )
}

export default Help
