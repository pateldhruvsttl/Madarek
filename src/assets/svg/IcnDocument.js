import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width}
      height={props.height}
      viewBox="0 0 60.228 62.739"
      {...props}
    >
      <Path
        d="M57.398 29.537L31.207 55.728a17.112 17.112 0 11-24.2-24.2L33.198 5.341a11.407 11.407 0 1116.135 16.13l-26.22 26.191a5.703 5.703 0 11-8.065-8.065l24.2-24.168"
        fill="none"
        stroke="#848484"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
      />
    </Svg>
  )
}

export default SvgComponent
