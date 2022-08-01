import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={30.145}
      height={30.576}
      viewBox="0 0 30.145 30.576"
      {...props}
    >
      <Path
        d="M16.545 9.651V4.136A4.136 4.136 0 0012.409 0L6.894 12.409v15.166h15.553a2.758 2.758 0 002.753-2.343l1.9-12.409a2.758 2.758 0 00-2.758-3.171zM6.894 27.575H2.758A2.758 2.758 0 010 24.818v-9.651a2.758 2.758 0 012.758-2.758h4.136"
        fill="#848484"
        stroke="#848484"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={3}
        transform="translate(1.5 1.5)"
        data-name="Group 432"
      />
    </Svg>
  )
}

export default SvgComponent
