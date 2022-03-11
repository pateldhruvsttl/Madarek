import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={58}
      height={58}
      viewBox="0 0 58 58"
      {...props}
    >
      <Path
        data-name="Union 2"
        d="M30.293 49.5a8.7 8.7 0 118.695 8.5 8.6 8.6 0 01-8.695-8.5zM0 40.959a12.911 12.911 0 0113.078-12.738 12.742 12.742 0 110 25.475A12.911 12.911 0 010 40.959zM20.635 18.2A18.444 18.444 0 0139.317 0 18.444 18.444 0 0158 18.2a18.444 18.444 0 01-18.683 18.2 18.444 18.444 0 01-18.682-18.2z"
        transform="rotate(180 29 29)"
        fill="#ccc"
      />
    </Svg>
  )
}

export default SvgComponent
