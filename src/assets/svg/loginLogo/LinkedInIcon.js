import * as React from "react"
import Svg, { G, Rect, Path } from "react-native-svg"

function LinkedInIcon(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width}
      height={props.height}
      viewBox="0 0 99.483 99.483"
      {...props}
    >
      <G data-name="Group 3514">
        <G
          data-name="Rectangle 1786"
          transform="translate(-641 -1747) translate(641 1747)"
          fill="#fff"
          stroke="#ccc"
          strokeWidth={1}
        >
          <Rect width={99.483} height={99.483} rx={10} stroke="none" />
          <Rect
            x={0.5}
            y={0.5}
            width={98.483}
            height={98.483}
            rx={9.5}
            fill="none"
          />
        </G>
        <G data-name="Group 3478" fill="#069">
          <Path
            data-name="Path 38331"
            d="M675.509 253.1c0 2.831-2.09 5.124-5.528 5.124a5.05 5.05 0 01-5.326-5.124c0-2.9 2.157-5.124 5.461-5.124a5.069 5.069 0 015.393 5.124zm-10.585 42.14v-32.97h10.248v32.97z"
            transform="translate(-641 -1747) translate(666 1773) translate(-664.654 -247.976)"
          />
          <Path
            data-name="Path 38332"
            d="M701.9 289.823c0-4.112-.134-7.55-.269-10.518h8.9l.472 4.585h.2a11.84 11.84 0 0110.182-5.327c6.742 0 11.8 4.518 11.8 14.227v19.485h-10.248V294c0-4.247-1.484-7.146-5.192-7.146a5.627 5.627 0 00-5.259 3.842 7.379 7.379 0 00-.338 2.563v19.013H701.9z"
            transform="translate(-641 -1747) translate(666 1773) translate(-685.249 -265.012)"
          />
        </G>
      </G>
    </Svg>
  )
}

export default LinkedInIcon
