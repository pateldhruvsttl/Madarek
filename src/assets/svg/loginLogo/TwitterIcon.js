import * as React from "react"
import Svg, { G, Rect, Path } from "react-native-svg"

function TwitterIcon(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width}
      height={props.height}
      viewBox="0 0 99.483 99.483"
      {...props}
    >
      <G data-name="Group 3513">
        <G
          data-name="Rectangle 1785"
          transform="translate(-490 -1747) translate(490 1747)"
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
          data-name="Icon awesome-twitter"
          d="M508.652 2170.2c.032.455.032.91.032 1.365a29.679 29.679 0 01-29.474 29.883h-.406a29.679 29.679 0 01-16.129-4.714 21.732 21.732 0 002.536.131 21.036 21.036 0 0013.039-4.486 10.521 10.521 0 01-9.821-7.288 13.273 13.273 0 001.982.163 11.122 11.122 0 002.763-.359 10.494 10.494 0 01-8.419-10.3v-.131a10.581 10.581 0 004.749 1.332 10.518 10.518 0 01-3.253-14.045 29.854 29.854 0 0021.656 10.99 11.848 11.848 0 01-.259-2.405 10.512 10.512 0 0118.17-7.186 20.686 20.686 0 006.667-2.536 10.478 10.478 0 01-4.626 5.786 21.052 21.052 0 006.049-1.626 22.569 22.569 0 01-5.268 5.43z"
          transform="translate(-490 -1747) translate(51.325 -383.836)"
          fill="#1da1f2"
        />
      </G>
    </Svg>
  )
}

export default TwitterIcon
