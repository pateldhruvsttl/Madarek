import * as React from "react"
import Svg, { G, Rect, Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={38}
      height={42}
      viewBox="0 0 38 42"
      {...props}
    >
      <G
        transform="translate(-1.163 -.014)"
        fill="none"
        stroke="#646464"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={3}
      >
        <Rect
          data-name="Rectangle 1574"
          width={35}
          height={35}
          rx={2}
          transform="translate(2.663 5.514)"
        />
        <Path
          data-name="Line 389"
          transform="translate(27.663 1.514)"
          d="M0 0L0 8"
        />
        <Path
          data-name="Line 390"
          transform="translate(12.663 1.514)"
          d="M0 0L0 8"
        />
        <Path
          data-name="Line 391"
          transform="translate(2.663 17.514)"
          d="M0 0L35 0"
        />
      </G>
    </Svg>
  )
}

export default SvgComponent
