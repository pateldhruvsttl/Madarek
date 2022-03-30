import * as React from "react"
import Svg, { G, Path } from "react-native-svg"
import { useSelector } from "react-redux"

function SvgComponent(props) {
  const { themeColor } = useSelector((state) => state)
  const fillColor = props.isType == 'ChallengeDetail' ? themeColor.buttonColor : "#f34d2d"
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width}
      height={props.height}
      viewBox="0 0 46 46"
      {...props}
    >
      <G
        transform="translate(-645 -3899.5) translate(643.5 3898)"
        fill="none"
        stroke={fillColor}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={3}
        data-name="Group 425"
      >
        <Path
          data-name="Path 37965"
          d="M46 31.667v9.556a4.778 4.778 0 01-4.778 4.778H7.778A4.778 4.778 0 013 41.223v-9.556"
        />
        <Path
          data-name="Path 37966"
          d="M12.556 19.722L24.5 31.666l11.945-11.944"
        />
        <Path
          data-name="Line 436"
          transform="translate(24.5 3)"
          d="M0 28.667L0 0"
        />
      </G>
    </Svg>
  )
}

export default SvgComponent
