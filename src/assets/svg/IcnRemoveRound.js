import * as React from "react"
import Svg, { G, Circle, Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={39}
      height={39}
      viewBox="0 0 39 39"
      {...props}
    >
      <G data-name="Group 4014" transform="translate(-351 -1769)">
        <G
          data-name="Ellipse 392"
          transform="translate(351 1769)"
          fill="#fff"
          stroke="#f34d2d"
          strokeWidth={2}
        >
          <Circle cx={19.5} cy={19.5} r={19.5} stroke="none" />
          <Circle cx={19.5} cy={19.5} r={18.5} fill="none" />
        </G>
        <Path
          data-name="Rectangle 2002"
          transform="translate(360 1786)"
          fill="#f34d2d"
          d="M0 0H21V5H0z"
        />
      </G>
    </Svg>
  )
}

export default SvgComponent
