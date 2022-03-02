import * as React from "react"
import Svg, { G, Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={54}
      height={36}
      viewBox="0 0 54 36"
      {...props}
    >
      <G data-name="Group 3827" fill="#fff">
        <Path
          d="M0 6h54V0H0z"
          transform="translate(-57 -138) translate(57 168)"
        />
        <Path
          data-name="Path"
          d="M0 6h54V0H0z"
          transform="translate(-57 -138) translate(57 153)"
        />
        <Path
          data-name="Path"
          d="M0 0v6h54V0z"
          transform="translate(-57 -138) translate(57 138)"
        />
      </G>
    </Svg>
  )
}

export default SvgComponent
