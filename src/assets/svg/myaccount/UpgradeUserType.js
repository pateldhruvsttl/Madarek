import * as React from "react"
import Svg, { G, Path } from "react-native-svg"

function UpgradeUserType(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width}
      height={props.height}
      viewBox="0 0 55.4 68"
      {...props}
    >
      <G
        fill="none"
        stroke={props.color} //"#8c67a9"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={5}
      >
        <Path
          data-name="Path 37985"
          d="M35.5 2H10.3A6.3 6.3 0 004 8.3v50.4a6.3 6.3 0 006.3 6.3h37.8a6.3 6.3 0 006.3-6.3V20.9z"
          transform="translate(-1.5 .5)"
        />
        <Path
          data-name="Path 37986"
          d="M35.5 2v18.9h18.9"
          transform="translate(-1.5 .5)"
        />
      </G>
    </Svg>
  )
}

export default UpgradeUserType
