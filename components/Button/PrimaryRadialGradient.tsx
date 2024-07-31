import Svg, {
  Defs,
  G,
  LinearGradient,
  RadialGradient,
  Rect,
  Stop,
} from "react-native-svg";
import { PrimaryGradientProps } from "./types";

export const PrimaryRadialGradient = (props: PrimaryGradientProps) => {
  const { height, ...rest } = props;
  const radialRX = Number(height / 2);
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
          strokeOpacity={0.5}
          rx={linearRX}
        />
        <Rect
          width="100%"
          height="100%"
          fill="url(#rg)"
          fillOpacity={0.5}
          rx={radialRX}
        />
      </G>
      <Defs>
        <RadialGradient
          id="rg"
          cx="50%"
          cy="50%"
          r="100%"
          gradientUnits="userSpaceOnUse"
        >
          <Stop offset="0%" stopColor="#FF7966" stopOpacity={1} />
          <Stop offset="5%" stopColor="#FFFFFF" stopOpacity={0.1} />
          <Stop offset="50%" stopColor="#FF7F37" stopOpacity={0.2} />
          <Stop offset="75%" stopColor="#FF7966" stopOpacity={0.9} />
          <Stop offset="100%" stopColor="#FF7966" stopOpacity={0.9} />
        </RadialGradient>
        <LinearGradient
          id="lg"
          x1={0}
          x2={4.42}
          y1={0}
          y2={59.673}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#fff" />
          <Stop offset={1} stopColor="#fff" stopOpacity={0} />
        </LinearGradient>
      </Defs>
    </Svg>
  );
};
