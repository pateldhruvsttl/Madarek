import * as React from "react"
import Svg, { G, Path } from "react-native-svg"

function EditProfile(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width}
      height={props.height}
      viewBox="0 0 50.378 48.162"
      {...props}
    >
      <G
        fill="none"
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={5}
      >
        <Path
          data-name="Path 37967"
          d="M25.689 46.041h22.689"
          transform="translate(-.5 -.379)"
        />
        <Path
          data-name="Path 37968"
          d="M37.033 4.445a5.35 5.35 0 117.567 7.563L13.084 43.52 3 46.041l2.521-10.084z"
          transform="translate(-.5 -.379)"
        />
      </G>
    </Svg>
  )
}

export default EditProfile
