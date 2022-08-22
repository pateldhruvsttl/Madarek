import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Document(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" 
    height={props.height} 
    width={props.width}
    viewBox="5 6 16 37"
     {...props}>
      <Path
        xmlns="http://www.w3.org/2000/svg"
        d="M9 39h30V20.25L27.75 9H9v30zm0 3q-1.25 0-2.125-.875T6 39V9q0-1.25.875-2.125T9 6h20l13 13v20q0 1.25-.875 2.125T39 42zm4.95-8.55h20.1v-3h-20.1zm0-7.95h20.1v-3h-20.1zm0-7.95h13.8v-3h-13.8zM9 39V9v30z"
        fill="#848484"
        stroke-width="0"
        points="0,10 20,10 10,0"
      />
    </Svg>
  )
}

export default Document
