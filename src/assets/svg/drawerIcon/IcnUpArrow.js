import * as React from "react"
import Svg, { Path } from "react-native-svg"

function IcnUpArrow(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width}
      height={props.height}
      viewBox="0 0 35.047 19.524"
      {...props}
    >
      <Path
        d="M2.828 16.7L17.528 2l14.7 14.7"
        fill="none"
        stroke="#848484"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
      />
    </Svg>
  )
}

export default IcnUpArrow;
