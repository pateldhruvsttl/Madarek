import * as React from "react"
import Svg, { G, Path } from "react-native-svg"
import { useSelector } from "react-redux"

function SvgComponent(props) {
    const { themeColor } = useSelector((state) => state)
    const fillColor = props.isType == 'ChallengeDetail' ? themeColor.buttonColor : "#f9b52b" 
return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={68.789}
      height={58.331}
      viewBox="0 0 68.789 58.331"
      {...props}
    >
      <G data-name="Group 3903" fill={fillColor}>
        <Path
          data-name="Path 38533"
          d="M4822.833 1161.748h-13.577c-1.661 0-2.379-.714-2.379-2.373 0-6.7-.031-13.4.022-20.1a9.713 9.713 0 019.336-9.461q6.669-.131 13.344 0a9.719 9.719 0 019.218 9.34c.06 6.826.028 13.654.023 20.48a1.955 1.955 0 01-2.182 2.105q-6.9.015-13.805.009z"
          transform="translate(-4784.059 -1097.151) translate(-4.396 -6.284)"
        />
        <Path
          data-name="Path 38534"
          d="M4823.859 1097.151a11.922 11.922 0 11-11.974 11.849 11.953 11.953 0 0111.974-11.849z"
          transform="translate(-4784.059 -1097.151) translate(-5.363)"
        />
        <Path
          data-name="Path 38535"
          d="M4851.1 1162.946c.045-1.38.121-2.728.126-4.076.014-4.961.007-9.92 0-14.881 0-1.3.059-2.615-.05-3.911s-.392-2.556-.608-3.892a2.225 2.225 0 01.409-.045 54.526 54.526 0 016.952.325 9.634 9.634 0 017.685 9.145c.065 3.808.051 7.62.009 11.429a5.863 5.863 0 01-5.673 5.905c-2.912.1-5.829.025-8.743.024-.066.001-.14-.032-.107-.023z"
          transform="translate(-4784.059 -1097.151) translate(-12.82 -7.515)"
        />
        <Path
          data-name="Path 38536"
          d="M4799.3 1136.27c-.924 2.323-.812 4.731-.811 7.13 0 4.858-.007 9.716.006 14.575 0 1.652.061 3.3.093 5.017-2.266 0-4.667.02-7.066-.01a13.115 13.115 0 01-2.968-.223 5.817 5.817 0 01-4.466-5.716c-.039-3.783-.058-7.57.008-11.352a9.743 9.743 0 018.681-9.391c2.133-.183 4.289-.03 6.523-.03z"
          transform="translate(-4784.059 -1097.151) translate(0 -7.528)"
        />
        <Path
          data-name="Path 38537"
          d="M4807.49 1119.888a8.919 8.919 0 11-8.827-8.918 8.965 8.965 0 018.827 8.918z"
          transform="translate(-4784.059 -1097.151) translate(-1.078 -2.663)"
        />
        <Path
          data-name="Path 38538"
          d="M4841.6 1119.93a8.913 8.913 0 0117.826-.174 8.913 8.913 0 11-17.826.174z"
          transform="translate(-4784.059 -1097.151) translate(-11.09 -2.664)"
        />
      </G>
    </Svg>
  )
}

export default SvgComponent
