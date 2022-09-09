import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      className="svg-icon"
      style={{
        width: "1em",
        height: "1em",
        verticalAlign: "middle"
      }}
      viewBox="0 0 1024 1024"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      overflow="hidden"
      {...props}
    >
      <Path d="M729.173 469.333L157.845 226.496l85.675 242.837h485.675zm0 85.334H243.541l-85.717 242.837 571.35-242.837zM45.12 163.54c-12.352-34.986 22.763-67.989 56.917-53.482l853.334 362.666c34.645 14.72 34.645 63.83 0 78.55L102.037 913.94c-34.133 14.507-69.269-18.474-56.917-53.482L168.085 512 45.1 163.541z" />
    </Svg>
  )
}

export default SvgComponent
