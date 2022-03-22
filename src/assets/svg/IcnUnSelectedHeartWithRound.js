import * as React from "react"
import Svg, { G, Circle, Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={50}
      height={50}
      viewBox="0 0 50 50"
      {...props}
    >
      <G data-name="Group 3832">
        <G
          data-name="Ellipse 177"
          transform="translate(-394 -1632) translate(394 1632)"
          fill="none"
          stroke="#fff"
          strokeWidth={2}
        >
          <Circle cx={25} cy={25} r={25} stroke="none" />
          <Circle cx={25} cy={25} r={24} />
        </G>
        <Path
          d="M28.757 5.271a7.757 7.757 0 00-10.973 0l-1.495 1.495-1.495-1.495A7.759 7.759 0 003.821 16.244l1.495 1.495 10.973 10.973 10.973-10.973 1.495-1.495a7.757 7.757 0 000-10.973z"
          transform="translate(-394 -1632) translate(402.829 1642.434)"
          fill="#fff"
        />
      </G>
    </Svg>
  )
}

export default SvgComponent
