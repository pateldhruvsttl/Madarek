import * as React from "react"
import Svg, { Rect } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={135}
      height={135}
      viewBox="0 0 135 135"
      {...props}
    >
      <Rect
        data-name="Rectangle 1614"
        width={135}
        height={135}
        rx={10}
        fill={props.stroke || "#bfbfbf"}
      />
    </Svg>
  )
}

export default SvgComponent
