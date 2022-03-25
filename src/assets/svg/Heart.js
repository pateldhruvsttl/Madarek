import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Heart(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width}
      height={props.height}
      viewBox="0 0 36.727 32.289"
      {...props}
    >
      <Path
        d="M33.051 3.678a9.137 9.137 0 00-12.925 0l-1.763 1.761-1.761-1.761A9.139 9.139 0 003.677 16.602l1.761 1.761 12.925 12.926 12.925-12.925 1.763-1.762a9.137 9.137 0 000-12.925z"
        fill="none"
        stroke="#848484"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      />
    </Svg>
  )
}

export default Heart
