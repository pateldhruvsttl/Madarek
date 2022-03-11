import * as React from "react"
import Svg, { G, Rect, Path } from "react-native-svg"

function FacebookIcon(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width}
      height={props.height}
      viewBox="0 0 99.483 99.483"
      {...props}
    >
      <G data-name="Group 3512">
        <G
          data-name="Rectangle 1784"
          transform="translate(-340 -1747) translate(340 1747)"
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
        <Path
          data-name="Path 38315"
          d="M2523.777 324.921v-4.07a2.144 2.144 0 012.247-2.416h5.681v-8.691h-7.843c-8.691 0-10.641 6.444-10.641 10.6v4.578h-5.044v10.132h5.087v25.308h10.136v-25.31h7.5l.339-3.985.593-6.147z"
          transform="translate(-340 -1747) translate(-2130.177 1461.256)"
          fill="#3a559f"
        />
      </G>
    </Svg>
  )
}

export default FacebookIcon
