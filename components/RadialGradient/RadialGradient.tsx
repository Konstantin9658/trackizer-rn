import Svg, {
  Defs,
  RadialGradient as SVGRadialGradient,
  Rect,
  Stop,
} from "react-native-svg";
import { CustomRadialGradientProps } from "./types";

export const RadialGradient = ({
  colorList,
  x,
  y,
  rx,
  ry,
  ...props
}: CustomRadialGradientProps) => {
  return (
    <Svg height="100%" width="100%" {...props}>
      <Defs>
        <SVGRadialGradient
          id="grad"
          cx={x}
          cy={y}
          rx={rx}
          ry={ry}
          gradientUnits="userSpaceOnUse"
        >
          {colorList.map(({ offset, color, opacity }, index) => (
            <Stop
              key={`radial-gradient-item-${index}`}
              offset={offset}
              stopColor={color}
              stopOpacity={opacity}
            />
          ))}
        </SVGRadialGradient>
      </Defs>
      <Rect x="0" y="0" width="100%" height="100%" fill="url(#grad)" />
    </Svg>
  );
};
