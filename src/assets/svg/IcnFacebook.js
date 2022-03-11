import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={23.655}
      height={50.617}
      viewBox="0 0 23.655 50.617"
      {...props}
    >
      <Path
        data-name="Path 38315"
        d="M2523.777 324.921v-4.07a2.144 2.144 0 012.247-2.416h5.681v-8.691h-7.843c-8.691 0-10.641 6.444-10.641 10.6v4.578h-5.044v10.132h5.087v25.308h10.136v-25.31h7.5l.339-3.985.593-6.147z"
        transform="translate(-2508.177 -309.744)"
        fill="#3a559f"
      />
    </Svg>
  )
}

export default SvgComponent
