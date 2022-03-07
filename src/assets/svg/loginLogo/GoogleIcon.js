import * as React from "react"
import Svg, { G, Rect, Path } from "react-native-svg"

function GoogleIcon(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width}
      height={props.height}
      viewBox="0 0 99.483 99.483"
      {...props}
    >
      <G data-name="Group 3722">
        <G data-name="Group 3511">
          <G
            data-name="Rectangle 1788"
            transform="translate(-240 -1774) translate(51 27) translate(189 1747)"
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
          <G data-name="Group 3417">
            <Path
              data-name="Path 38310"
              d="M540.417 531.833a24.152 24.152 0 00-.595-5.762h-26.463v10.46h15.533a13.774 13.774 0 01-5.762 9.145l-.053.35 8.367 6.482.58.058c5.324-4.917 8.393-12.151 8.393-20.732"
              transform="translate(-240 -1774) translate(51 27) translate(212 1769) translate(-485.174 -503.022)"
              fill="#4285f4"
            />
            <Path
              data-name="Path 38311"
              d="M260.635 666.894c7.61 0 14-2.505 18.665-6.827l-8.894-6.89a16.682 16.682 0 01-9.771 2.823 16.968 16.968 0 01-16.035-11.717l-.331.028-8.7 6.733-.114.316a28.165 28.165 0 0025.179 15.533"
              transform="translate(-240 -1774) translate(51 27) translate(212 1769) translate(-232.45 -610.523)"
              fill="#34a853"
            />
            <Path
              data-name="Path 38312"
              d="M214.426 459.964a17.353 17.353 0 01-.939-5.575 18.232 18.232 0 01.908-5.574l-.016-.374-8.809-6.841-.288.137a28.126 28.126 0 000 25.3l9.145-7.077"
              transform="translate(-240 -1774) translate(51 27) translate(212 1769) translate(-202.275 -426.204)"
              fill="#fbbc05"
            />
            <Path
              data-name="Path 38313"
              d="M260.635 282.571a15.621 15.621 0 0110.9 4.2l7.953-7.771a27.08 27.08 0 00-18.853-7.328 28.165 28.165 0 00-25.179 15.533l9.113 7.078a17.037 17.037 0 0116.066-11.713"
              transform="translate(-240 -1774) translate(51 27) translate(212 1769) translate(-232.45 -271.673)"
              fill="#eb4335"
            />
          </G>
        </G>
      </G>
    </Svg>
  )
}

export default GoogleIcon
