import * as React from "react"
import Svg, { G, Ellipse, Path } from "react-native-svg"

function CloseIcon(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width}
      height={props.height}
      viewBox="0 0 78.917 78.917"
      {...props}
    >
      <G
        transform="translate(3 3)"
        fill="none"
        stroke="#323232"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={6}
      >
        <Ellipse
          data-name="Ellipse 181"
          cx={36.459}
          cy={36.459}
          rx={36.459}
          ry={36.459}
        />
        <Path
          data-name="Line 618"
          transform="translate(25.521 25.521)"
          d="M21.875 0L0 21.875"
        />
        <Path
          data-name="Line 619"
          transform="translate(25.521 25.521)"
          d="M0 0L21.875 21.875"
        />
      </G>
    </Svg>
  )
}

export default CloseIcon;