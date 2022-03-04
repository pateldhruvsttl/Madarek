import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={55.238}
      height={55.238}
      viewBox="0 0 55.238 55.238"
      {...props}
    >
      <Path
        d="M52.238 35.825a5.471 5.471 0 01-5.471 5.475H13.942L3 52.238V8.471A5.471 5.471 0 018.471 3h38.3a5.471 5.471 0 015.471 5.471z"
        fill="none"
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={6}
      />
    </Svg>
  )
}

export default SvgComponent
