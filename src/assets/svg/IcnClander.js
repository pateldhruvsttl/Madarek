import * as React from "react"
import Svg, { G, Rect, Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={28}
      height={31}
      viewBox="0 0 28 31"
      {...props}
    >
      <G
        transform="translate(1.5 1.158)"
        fill="none"
        stroke="#848484"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={3}
      >
        <Rect
          data-name="Rectangle 1574"
          width={25}
          height={25}
          rx={2}
          transform="translate(0 3.342)"
        />
        <Path
          data-name="Line 389"
          transform="translate(18 .342)"
          d="M0 0L0 5"
        />
        <Path data-name="Line 390" transform="translate(7 .342)" d="M0 0L0 5" />
        <Path
          data-name="Line 391"
          transform="translate(0 11.342)"
          d="M0 0L25 0"
        />
      </G>
    </Svg>
  )
}

export default SvgComponent
