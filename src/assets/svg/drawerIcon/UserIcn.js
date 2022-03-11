import * as React from "react"
import Svg, { G, Path, Circle } from "react-native-svg"

function UserIcn(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width}
      height={props.height}
      viewBox="0 0 56.831 48.971"
      {...props}
    >
      <G
        transform="translate(1 -.89)"
        fill="none"
        stroke="#323232"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
      >
        <Path
          data-name="Path 38139"
          d="M40.877 47.862v-4.985a9.969 9.969 0 00-9.969-9.969H10.969A9.969 9.969 0 001 42.877v4.985"
        />
        <Circle
          data-name="Ellipse 177"
          cx={9.969}
          cy={9.969}
          r={9.969}
          transform="translate(10.969 3)"
        />
        <Path
          data-name="Path 38140"
          d="M53.831 47.862v-4.985a9.969 9.969 0 00-7.477-9.645"
        />
        <Path
          data-name="Path 38141"
          d="M36.384 3.324a9.969 9.969 0 010 19.315"
        />
      </G>
    </Svg>
  )
}

export default UserIcn
