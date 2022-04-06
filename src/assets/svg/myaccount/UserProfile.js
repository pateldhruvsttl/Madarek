import * as React from "react"
import Svg, { G, Path, Ellipse } from "react-native-svg"

function UserProfile(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width}
      height={props.height}
      viewBox="0 0 46.389 51.563"
      {...props}
    >
      <G
        transform="translate(2.5 2.5)"
        fill="none"
        stroke="#8c67a9"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={5}
      >
        <Path
          data-name="Path 38138"
          d="M41.389 46.563v-5.174a10.347 10.347 0 00-10.347-10.347H10.347A10.347 10.347 0 000 41.389v5.174"
        />
        <Ellipse
          data-name="Ellipse 176"
          cx={10.347}
          cy={10.347}
          rx={10.347}
          ry={10.347}
          transform="translate(10.347)"
        />
      </G>
    </Svg>
  )
}

export default UserProfile
