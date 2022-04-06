import * as React from "react"
import Svg, { G, Path } from "react-native-svg"

function IcnClose(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width}
      height={props.height}
      viewBox="0 0 47.85 47.851"
      {...props}
    >
      <G
        data-name="Group 253"
        transform="translate(-168.368 -75.868)"
        fill={props.color?props.color:"#fff"}
      >
        <Path
          data-name="Rectangle 232"
          transform="rotate(45 -5.316 246.195)"
          d="M0 0H61.786V5.884H0z"
        />
        <Path
          data-name="Rectangle 234"
          transform="rotate(-45 228.503 -143.46)"
          d="M0 0H61.786V5.884H0z"
        />
      </G>
    </Svg>
  )
}

export default IcnClose;
