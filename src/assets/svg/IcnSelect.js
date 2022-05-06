import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={26}
      height={18.814}
      viewBox="0 0 26 18.814"
      {...props}
    >
      <Path
        d="M23.171 2.828L9.185 16.814l-6.357-6.357"
        fill="none"
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
      />
    </Svg>
  )
}

export default SvgComponent
