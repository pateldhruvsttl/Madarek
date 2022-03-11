import * as React from "react"
import Svg, { G, Rect } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={62}
      height={58}
      viewBox="0 0 62 58"
      {...props}
    >
      <G data-name="Group 3756" transform="translate(-739 -411)" fill="#ccc">
        <Rect
          data-name="Rectangle 1799"
          width={12}
          height={12}
          rx={4}
          transform="translate(739 411)"
        />
        <Rect
          data-name="Rectangle 1871"
          width={44}
          height={12}
          rx={4}
          transform="translate(757 411)"
        />
        <Rect
          data-name="Rectangle 1800"
          width={12}
          height={12}
          rx={4}
          transform="translate(739 434)"
        />
        <Rect
          data-name="Rectangle 1872"
          width={44}
          height={12}
          rx={4}
          transform="translate(757 434)"
        />
        <Rect
          data-name="Rectangle 1801"
          width={12}
          height={12}
          rx={4}
          transform="translate(739 457)"
        />
        <Rect
          data-name="Rectangle 1873"
          width={44}
          height={12}
          rx={4}
          transform="translate(757 457)"
        />
      </G>
    </Svg>
  )
}

export default SvgComponent
