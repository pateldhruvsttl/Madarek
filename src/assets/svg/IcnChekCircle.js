import * as React from "react"
import Svg, { G, Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={65.833}
      height={65.908}
      viewBox="0 0 65.833 65.908"
      stroke="#fff"
      {...props}
    >
      <G
        data-name="Icon feather-check-circle"
        fill="none"
        
        strokeWidth={5}
      >
        <Path
          data-name="Path 38577"
          d="M63.827 30.625v2.8a30.413 30.413 0 11-18.035-27.8"
          transform="translate(-.494 -.455)"
        />
        <Path
          data-name="Path 38578"
          d="M63.826 9.092L33.413 39.536l-9.124-9.124"
          transform="translate(-.494 -.455)"
        />
      </G>
    </Svg>
  )
}

export default SvgComponent
