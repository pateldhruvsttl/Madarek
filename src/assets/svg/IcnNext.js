import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={20.437}
      height={35.656}
      viewBox="0 0 20.437 35.656"
      {...props}
    >
      <Path
        d="M2.828 2.828l15.609 15-15.609 15"
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
