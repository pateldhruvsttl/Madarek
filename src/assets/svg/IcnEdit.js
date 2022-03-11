import * as React from "react"
import Svg, { G, Path } from "react-native-svg"

function IcnEdit(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width}
      height={props.height}
      viewBox="0 0 55.177 55.177"
      {...props}
    >
      <G
        fill="none"
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={5}
      >
        <Path
          data-name="Path 37969"
          d="M24.444 7.169H6.987A4.987 4.987 0 002 12.156v34.913a4.987 4.987 0 004.987 4.987H41.9a4.987 4.987 0 004.987-4.987V29.613"
          transform="translate(.5 .621)"
        />
        <Path
          data-name="Path 37970"
          d="M43.146 3.428a5.29 5.29 0 017.481 7.481L26.937 34.6l-9.975 2.494 2.494-9.975z"
          transform="translate(.5 .621)"
        />
      </G>
    </Svg>
  )
}

export default IcnEdit
