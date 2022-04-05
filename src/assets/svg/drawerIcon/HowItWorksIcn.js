import * as React from "react"
import Svg, { G, Circle, Path } from "react-native-svg"

function HowItWorksIcn(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width}
      height={props.height}
      viewBox="0 0 55 55"
      {...props}
    >
      <G data-name="Group 4278">
        <G
          data-name="Ellipse 269"
          transform="translate(-54 -1655) translate(54 1655)"
          fill="#fff"
          stroke="#323232"
          strokeWidth={3}
        >
          <Circle cx={27.5} cy={27.5} r={27.5} stroke="none" />
          <Circle cx={27.5} cy={27.5} r={26} fill="none" />
        </G>
        <Path
          data-name="Path 38338"
          d="M865.779 1259.123a2.735 2.735 0 00-.271.061 5.031 5.031 0 01-2.715.268 1.3 1.3 0 01-1.228-1.521 9.174 9.174 0 01.263-1.851c.56-2.114 1.231-4.2 1.724-6.33a7.542 7.542 0 00.111-2.934 3.617 3.617 0 00-3.534-2.633 14.134 14.134 0 00-5.595 1.281.432.432 0 00-.241.243c-.13.444-.232.9-.338 1.321a21.257 21.257 0 012.261-.388c1.252-.083 1.9.514 1.771 1.733a23.671 23.671 0 01-.653 3.258c-.539 2.169-1.449 4.247-1.571 6.516a3.186 3.186 0 001.439 2.991 5.7 5.7 0 004.663.648 30.123 30.123 0 003.307-1.094.427.427 0 00.249-.224c.132-.425.232-.858.358-1.345zm-3.165-23.9c-.09.005-.23.008-.368.021a3.108 3.108 0 00-2.7 4.4 3.57 3.57 0 004.053 1.676 3.133 3.133 0 002.471-2.913 3.252 3.252 0 00-3.456-3.187z"
          transform="translate(-54 -1655) translate(-778.514 433.654)"
          fill="#323232"
        />
      </G>
    </Svg>
  )
}

export default HowItWorksIcn
