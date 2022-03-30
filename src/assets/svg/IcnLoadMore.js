import * as React from "react"
import Svg, { G, Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width}
      height={props.height}
      viewBox="0 0 14.488 18.482"
      {...props}
    >
      <G
        transform="rotate(-90 9.448 13.034)"
        fill="none"
        stroke="#848484"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      >
        <Path
          data-name="Line 372"
          transform="translate(5 10.842)"
          d="M16.482 0L0 0"
        />
        <Path data-name="Path 37878" d="M10.83 16.66L5 10.83 10.83 5" />
      </G>
    </Svg>
  )
}

export default SvgComponent
