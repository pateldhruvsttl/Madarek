import * as React from "react"
import Svg, { G, Text, TSpan, Circle } from "react-native-svg"

const FIllRadio = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={154} height={104} {...props}>
    <G data-name="Group 3732" transform="translate(-132 -537)">
      <Text
        transform="translate(132 632)"
        fill="#646464"
        fontSize={36}
        fontFamily="Roboto-Regular, Roboto"
      >
        <TSpan x={0} y={0}>
          {"Individual"}
        </TSpan>
      </Text>
      <G
        data-name="Ellipse 276"
        transform="translate(182 537)"
        fill="#fff"
        stroke="#f9b52b"
        strokeWidth={2}
      >
        <Circle cx={26.5} cy={26.5} r={26.5} stroke="none" />
        <Circle cx={26.5} cy={26.5} r={25.5} fill="none" />
      </G>
      <Circle
        data-name="Ellipse 280"
        cx={17.5}
        cy={17.5}
        r={17.5}
        transform="translate(191 546)"
        fill="#f9b52b"
      />
    </G>
  </Svg>
)

export default FIllRadio
