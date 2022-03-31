import * as React from "react"
import Svg, { G, Path } from "react-native-svg"

function Lock(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width}
      height={props.height}
      viewBox="0 0 52.336 57.596"
      {...props}
    >
      <G
        transform="translate(2.5 2.5)"
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={5}
      >
        <Path
          data-name="Rectangle 1590"
          transform="translate(0 23.668)"
          d="M0 0H47.336V28.928H0z"
        />
        <Path
          data-name="Path 38020"
          d="M10.519 23.668V13.149a13.15 13.15 0 0126.3 0v10.519"
        />
      </G>
    </Svg>
  )
}

export default Lock