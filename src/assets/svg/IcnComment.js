import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={27.818}
      height={27.818}
      viewBox="0 0 27.818 27.818"
      {...props}
    >
      <Path
        d="M24.818 11.72a11.554 11.554 0 01-1.241 5.239 11.72 11.72 0 01-10.477 6.48A11.554 11.554 0 017.859 22.2L0 24.818l2.62-7.859a11.554 11.554 0 01-1.241-5.239 11.72 11.72 0 016.48-10.479A11.554 11.554 0 0113.1 0h.689a11.692 11.692 0 0111.03 11.03z"
        fill="none"
        stroke="#848484"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={3}
        transform="translate(1.5 1.5)"
        data-name="Group 433"
      />
    </Svg>
  )
}

export default SvgComponent
