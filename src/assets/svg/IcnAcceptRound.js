import * as React from "react"
import Svg, { G, Path, Ellipse } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={78.917}
      height={78.917}
      viewBox="0 0 78.917 78.917"
      {...props}
    >
      <G
        data-name="Group 699"
        transform="translate(3 3)"
        fill="none"
        stroke="#1fb779"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={6}
      >
        <Path
          data-name="Path 38216"
          d="M18.682 37.923L29.62 48.861l24.615-24.8"
        />
        <Ellipse
          data-name="Ellipse 205"
          cx={36.459}
          cy={36.459}
          rx={36.459}
          ry={36.459}
        />
      </G>
    </Svg>
  )
}

export default SvgComponent
