import * as React from "react"
import Svg, { G, Path, Ellipse } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={25.059}
      height={27.817}
      viewBox="0 0 25.059 27.817"
      {...props}
    >
      <G
        transform="translate(1.5 1.5)"
        fill="none"
        stroke="#848484"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={3}
      >
        <Path
          data-name="Path 38138"
          d="M22.059 24.817V22.06a5.515 5.515 0 00-5.514-5.515H5.515A5.515 5.515 0 000 22.06v2.757"
        />
        <Ellipse
          data-name="Ellipse 176"
          cx={5.515}
          cy={5.515}
          rx={5.515}
          ry={5.515}
          transform="translate(5.515)"
        />
      </G>
    </Svg>
  )
}

export default SvgComponent
