import * as React from "react"
import Svg, { G, Circle, Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={53}
      height={53}
      viewBox="0 0 53 53"
      {...props}
    >
      <G data-name="Group 4409" transform="translate(-351.25 -1769.25)">
        <G
          data-name="Ellipse 392"
          transform="translate(351.25 1769.25)"
          fill="#fff"
          stroke="#f34d2d"
          strokeWidth={2}
        >
          <Circle cx={26.5} cy={26.5} r={26.5} stroke="none" />
          <Circle cx={26.5} cy={26.5} r={25.5} fill="none" />
        </G>
        <Path
          data-name="Rectangle 2002"
          transform="translate(363.25 1792.25)"
          fill="#f34d2d"
          d="M0 0H29V7H0z"
        />
      </G>
    </Svg>
  )
}

export default SvgComponent
