import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { useSelector } from "react-redux";


function SvgComponent(props) {
  const { themeColor } = useSelector((state) => state)
  const fillColor = props.isType == 'ChallengeDetail' ? themeColor.headerColor : "#f34d2d"
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={34.602}
      height={32.908}
      viewBox="0 0 34.602 32.908"
      {...props}
    >
      <Path
        data-name="Path 38321"
        d="M342.963 200.091l5.346 10.833 11.955 1.737-8.65 8.432L353.655 233l-10.693-5.621L332.27 233l2.042-11.906-8.65-8.432 11.955-1.737z"
        transform="translate(-325.662 -200.091)"
        fill={fillColor}
      />
    </Svg>
  )
}

export default SvgComponent
