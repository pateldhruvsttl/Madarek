import * as React from "react"
import Svg, { G, Circle, Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width}
      height={props.height}
      viewBox="0 0 55 59"
      stroke="##fff"
      {...props}
    >
      <G
        data-name="Group 417"
        transform="translate(-.941)"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
      >
        <Circle
          data-name="Ellipse 155"
          cx={8}
          cy={8}
          r={8}
          transform="translate(37.941 2)"
        />
        <Circle
          data-name="Ellipse 156"
          cx={8}
          cy={8}
          r={8}
          transform="translate(2.941 22)"
        />
        <Circle
          data-name="Ellipse 157"
          cx={8}
          cy={8}
          r={8}
          transform="translate(37.941 41)"
        />
        <Path
          data-name="Line 551"
          transform="translate(18.828 34.593)"
          d="M0 0L19.341 11.27"
        />
        <Path
          data-name="Line 552"
          transform="translate(18.828 14.771)"
          d="M19.312 0L0 11.27"
        />
      </G>
    </Svg>
  )
}

export default SvgComponent
