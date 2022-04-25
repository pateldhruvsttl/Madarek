import * as React from "react"
import Svg, { Path } from "react-native-svg"

function RightCheck(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width}
      height={props.height}
      viewBox="0 0 53.337 38.548"
      {...props}
    >
      <Path
        d="M47.68 5.657L18.789 34.548 5.657 21.416"
        fill="none"
        stroke={props.color?props.color:"#8c67a9"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={8}
      />
    </Svg>
  )
}

export default RightCheck
