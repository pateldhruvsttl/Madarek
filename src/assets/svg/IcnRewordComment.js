import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { useSelector } from "react-redux"

function SvgComponent(props) {
  const { themeColor } = useSelector((state) => state)
  const fillColor = props.isType == 'ChallengeDetail' ? themeColor.headerColor : "#f34d2d"

  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={32.427}
      height={30.378}
      viewBox="0 0 32.427 30.378"
      {...props}
    >
      <Path
        data-name="Subtraction 1"
        d="M27.619 29.408h0c-.221-.148-5.993-4.155-8.765-6.094a1.2 1.2 0 00-.724-.226c-2.759 0-5.251.006-7.62.006h-5.5a4.57 4.57 0 01-3.228-1.246 4.4 4.4 0 01-1.276-3.17c-.009-3.392-.007-6.761 0-10.5V4.929a4.192 4.192 0 01.587-2.25A4.315 4.315 0 015.015.511H21.738c2.2 0 4-.006 5.657-.019h.042a4.5 4.5 0 013.272 1.352 4.324 4.324 0 011.218 3.181c-.029.852-.021 1.72-.015 2.559v.019c0 .385.007.822.006 1.251v3.008c0 2.34.006 4.761-.019 7.139a4.246 4.246 0 01-3.933 4.055c-.306.017-.354.129-.353.39.007 1.261.006 2.544 0 3.784v2.174zM16.598 15.572h0l4.391 2.307-.838-4.889 3.553-3.463-4.91-.712-2.2-4.449-2.195 4.449-4.91.712 3.553 3.463-.838 4.889 4.389-2.307z"
        fill={fillColor}
        stroke="rgba(0,0,0,0)"
        strokeWidth={1}
      />
    </Svg>
  )
}

export default SvgComponent
