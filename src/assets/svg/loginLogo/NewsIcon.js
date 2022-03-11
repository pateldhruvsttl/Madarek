import * as React from "react"
import Svg, { G, Rect, Path } from "react-native-svg"

function NewsIcon(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width}
      height={props.height}
      viewBox="0 0 99.483 99.483"
      {...props}
    >
      <G data-name="Group 3724">
        <G
          data-name="Rectangle 1787"
          transform="translate(-750 -1774) translate(750 1774)"
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
        <G data-name="Group 3723">
          <G data-name="Group 3720">
            <Path
              data-name="Path 38359"
              d="M22.7 22.836H0V.137h22.7z"
              fill="#f1511b"
              transform="translate(-750 -1774) translate(2.801 473.757) translate(773.199 1326.106)"
            />
            <Path
              data-name="Path 38360"
              d="M302.719 22.836h-22.7V.137h22.7v22.7z"
              transform="translate(-750 -1774) translate(2.801 473.757) translate(773.199 1326.106) translate(-254.957)"
              fill="#80cc28"
            />
            <Path
              data-name="Path 38361"
              d="M22.7 302.953H0v-22.7h22.7z"
              transform="translate(-750 -1774) translate(2.801 473.757) translate(773.199 1326.106) translate(0 -255.045)"
              fill="#00adef"
            />
            <Path
              data-name="Path 38362"
              d="M302.719 302.953h-22.7v-22.7h22.7v22.7z"
              transform="translate(-750 -1774) translate(2.801 473.757) translate(773.199 1326.106) translate(-254.957 -255.045)"
              fill="#fbbc09"
            />
          </G>
        </G>
      </G>
    </Svg>
  )
}

export default NewsIcon
