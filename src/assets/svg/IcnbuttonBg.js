import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={105.762}
      height={43.549}
      viewBox="0 0 105.762 43.549"
      {...props}
    >
      <Path
        d="M105.762 21.775a21.641 21.641 0 01-21.775 21.774H21.775A21.641 21.641 0 010 21.775 21.641 21.641 0 0121.775 0h62.212a21.641 21.641 0 0121.775 21.775z"
        fill="#ffde9c"
      />
    </Svg>
  )
}

export default SvgComponent
