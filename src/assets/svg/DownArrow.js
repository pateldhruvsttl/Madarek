import * as React from "react"
import Svg, { Path } from "react-native-svg"

const DownArrow = (props) => (
    <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width}
    height={props.height}
    viewBox="0 0 28.733 16.367"
    {...props}
  >
    <Path
      d="M2.828 2.828l11.538 11.538L25.904 2.828"
      fill="none"
      stroke="#848484"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={4}
    />
  </Svg>
)

export default DownArrow