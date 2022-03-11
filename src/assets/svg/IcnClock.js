import * as React from "react"
import Svg, { G, Circle, Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={28}
      height={28}
      viewBox="0 0 28 28"
      {...props}
    >
      <G
        transform="translate(1.5 1.5)"
        fill="none"
        stroke="#848484"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={3}
      >
        <Circle data-name="Ellipse 110" cx={12.5} cy={12.5} r={12.5} />
        <Path data-name="Path 37920" d="M12.349 4.939v7.409l4.939 2.47" />
      </G>
    </Svg>
  )
}

export default SvgComponent
