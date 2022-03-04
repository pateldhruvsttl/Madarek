import * as React from "react"
import Svg, { G, Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={52.574}
      height={58.757}
      viewBox="0 0 52.574 58.757"
      {...props}
    >
      <G
        fill="none"
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={6}
      >
        <Path
          data-name="Path 37893"
          d="M41.812 17.525a15.525 15.525 0 00-31.049 0C10.762 35.637 3 40.812 3 40.812h46.574s-7.762-5.175-7.762-23.287"
          transform="translate(0 1)"
        />
        <Path
          data-name="Path 37894"
          d="M34.296 50.144a9.26 9.26 0 01-16.019 0"
          transform="translate(0 1)"
        />
      </G>
    </Svg>
  )
}

export default SvgComponent
