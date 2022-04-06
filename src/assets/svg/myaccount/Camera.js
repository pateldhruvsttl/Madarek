import * as React from "react"
import Svg, { G, Path, Circle } from "react-native-svg"

function Camera(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={56.33}
      height={46.998}
      viewBox="0 0 56.33 46.998"
      {...props}
    >
      <G
        transform="translate(1.5 -.5)"
        fill="none"
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={5}
      >
        <Path
          data-name="Path 37905"
          d="M52.33 40.331A4.666 4.666 0 0147.664 45h-42A4.666 4.666 0 011 40.331V14.666A4.666 4.666 0 015.666 10H15l4.666-7h14l4.666 7h9.333a4.666 4.666 0 014.666 4.666z"
        />
        <Circle
          data-name="Ellipse 107"
          cx={9.333}
          cy={9.333}
          r={9.333}
          transform="translate(17.332 16.999)"
        />
      </G>
    </Svg>
  )
}

export default Camera
