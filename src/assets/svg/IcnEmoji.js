import * as React from "react"
import Svg, { G, Circle, Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width}
      height={props.height}
      viewBox="0 0 61 61"
      {...props}
    >
      <G
        transform="translate(2 2)"
        fill="none"
        stroke="#848484"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <Circle
          data-name="Ellipse 161"
          cx={28.5}
          cy={28.5}
          r={28.5}
          strokeWidth={4}
        />
        <Path
          data-name="Path 38108"
          d="M17.1 34.2s4.275 5.7 11.4 5.7 11.4-5.7 11.4-5.7"
          strokeWidth={4}
        />
        <Path
          data-name="Line 573"
          transform="translate(20 20)"
          strokeWidth={6}
          d="M0 0L0 0"
        />
        <Path
          data-name="Line 574"
          transform="translate(37 20)"
          strokeWidth={6}
          d="M0 0L0 0"
        />
      </G>
    </Svg>
  )
}

export default SvgComponent
