import * as React from "react"
import Svg, { G, Rect, Circle, Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width}
      height={props.height}
      viewBox="0 0 55 55.332"
      {...props}
    >
      <G
        transform="translate(1.85 1.85)"
        fill="none"
        stroke="#848484"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
      >
        <Rect
          data-name="Rectangle 1586"
          width={51}
          height={51}
          rx={8}
          transform="translate(.15 .15)"
        />
        <Circle
          data-name="Ellipse 127"
          cx={4.5}
          cy={4.5}
          r={4.5}
          transform="translate(11.15 11.15)"
        />
        <Path
          data-name="Path 38009"
          d="M50.299 33.907L36.96 19.951l-29.344 30.7"
        />
      </G>
    </Svg>
  )
}

export default SvgComponent
