import * as React from "react"
import Svg, { G, Path } from "react-native-svg"

const IcnBack = (props) => (
    <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width}
    height={props.height}
    viewBox="0 0 55.523 42.812"
    {...props}
  >
    <G
      transform="translate(-2.5 -1.464)"
      fill="none"
      stroke={props.color ? "#000000" : "#fff"}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={5}
    >
      <Path
        data-name="Line 372"
        transform="translate(5 22.907)"
        d="M50.523 0L0 0"
      />
      <Path data-name="Path 37878" d="M22.87 40.741L5 22.87 22.87 5" />
    </G>
  </Svg>
)

export default IcnBack;