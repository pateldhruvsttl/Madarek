import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={96.73}
      height={96.938}
      viewBox="0 0 96.73 96.938"
      {...props}
    >
      <Path
        data-name="Path 38287"
        d="M475.314 391.024h-17.968V371.1h-26.134v-14.192h15.462v-11.269h-18.3V371.1h-26.138v19.922h-20.81v51.553h96.73v-51.551zm-44.1-42.542h12.619v5.585h-12.621zm-26.134 25.463h49.42v7.655h-49.422zm-20.81 19.922h17.968v7.658h-17.97zm0 45.869v-35.37h17.968v35.369zm32.974 0v-27.784h25.1v27.783zm0-30.625v-7.658h25.1v7.658zm27.941 30.625v-41.127H414.4v41.125h-9.322v-55.291H454.5v55.292zm30.131 0h-17.97v-35.37h17.968zm0-38.211h-17.97v-7.658h17.968z"
        transform="translate(-381.426 -345.639)"
        fill="#8c67a9"
      />
    </Svg>
  )
}

export default SvgComponent
