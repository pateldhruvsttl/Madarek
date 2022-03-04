import * as React from "react"
import Svg, { G, Path, Ellipse } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={33.333}
      height={25.06}
      viewBox="0 0 33.333 25.06"
      {...props}
    >
      <G
        data-name="Group 431"
        transform="translate(1.5 1.5)"
        fill="none"
        stroke="#848484"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={3}
      >
        <Path
          data-name="Path 1177"
          d="M0 11.03S5.515 0 15.167 0s15.166 11.03 15.166 11.03-5.515 11.03-15.166 11.03S0 11.03 0 11.03z"
        />
        <Ellipse
          data-name="Ellipse 35"
          cx={4.009}
          cy={4.009}
          rx={4.009}
          ry={4.009}
          transform="translate(11.024 7.264)"
        />
      </G>
    </Svg>
  )
}

export default SvgComponent
