import Svg, { Defs, G, LinearGradient, Rect, Stop } from "react-native-svg";
import { PrimaryGradientProps } from "./types";

export const SecondaryLinearGradient = (props: PrimaryGradientProps) => {
  const { height, ...rest } = props;
  const linearRX = Number(height / 2 - 0.5);
  return (
    <Svg width="100%" height="100%" fill="none" {...rest}>
      <G filter="url(#a)">
        <Rect
          width="100%"
          height="100%"
          x={0}
          y={1}
          stroke="url(#lg)"
          strokeOpacity={0.15}
          rx={linearRX}
        />
      </G>
      <Defs>
        <LinearGradient
          id="lg"
          x1={130.95}
          x2={141.356}
          y1={0}
          y2={52.122}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#fff" />
          <Stop offset={1} stopColor="#fff" stopOpacity={0} />
        </LinearGradient>
      </Defs>
    </Svg>
  );
};
