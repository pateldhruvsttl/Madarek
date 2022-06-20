import * as React from "react"
import Svg, { G, Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={38.629}
      height={42.587}
      viewBox="0 0 38.629 42.587"
      {...props}
    >
      <G
        transform="translate(-1.5 -.5)"
        fill="none"
        stroke="#f34d2d"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={3}
      >
        <Path data-name="Path 38115" d="M3 9.917h35.629" />
        <Path
          data-name="Path 38116"
          d="M34.67 9.917v27.712a3.959 3.959 0 01-3.959 3.959H10.918a3.959 3.959 0 01-3.959-3.959V9.917m5.938 0V5.959A3.959 3.959 0 0116.859 2h7.917a3.959 3.959 0 013.959 3.959v3.958"
        />
        <Path
          data-name="Line 599"
          transform="translate(17.145 19.487)"
          d="M0 0L0 12.377"
        />
        <Path
          data-name="Line 600"
          transform="translate(25.101 19.487)"
          d="M0 0L0 12.377"
        />
      </G>
    </Svg>
  )
}

export default SvgComponent
