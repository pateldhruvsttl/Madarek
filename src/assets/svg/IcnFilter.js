import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={58.4}
      height={53.06}
      viewBox="0 0 58.4 53.06"
      {...props}
    >
      <Path
        d="M55.9 2.5H2.5l21.36 25.258V45.22l10.68 5.34v-22.8z"
        fill="none"
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={5}
      />
    </Svg>
  )
}

export default SvgComponent
