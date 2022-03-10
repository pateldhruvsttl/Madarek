import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width}
      height={props.height}
      viewBox="0 0 68.567 60.315"
      {...props}
    >
      <Path
        d="M61.588 6.979a16.989 16.989 0 00-24.031 0l-3.274 3.274-3.275-3.274A16.993 16.993 0 006.977 31.01l3.274 3.274 24.031 24.032 24.031-24.032 3.274-3.274a16.989 16.989 0 000-24.031z"
        fill="none"
        stroke="#848484"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
      />
    </Svg>
  )
}

export default SvgComponent
