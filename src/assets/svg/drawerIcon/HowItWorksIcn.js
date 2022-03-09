import * as React from "react"
import Svg, { G, Circle } from "react-native-svg"

function HowItWorksIcn(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={55}
      height={55}
      viewBox="0 0 55 55"
      {...props}
    >
      <G data-name="Ellipse 269" fill="#fff" stroke="#323232" strokeWidth={3}>
        <Circle cx={27.5} cy={27.5} r={27.5} stroke="none" />
        <Circle cx={27.5} cy={27.5} r={26} fill="none" />
      </G>
    </Svg>
  )
}

export default HowItWorksIcn
