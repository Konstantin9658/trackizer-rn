import Svg, {
  G,
  Rect,
  Path,
  Defs,
  RadialGradient,
  Stop,
  LinearGradient,
  ClipPath,
} from "react-native-svg";
import { TabIconProps } from "./types";

export const IconAddNew = (props: TabIconProps) => (
  <Svg viewBox="0 0 98 98" width={98} height={98} fill="none" {...props}>
    <G filter="url(#a)">
      <Rect width={48} height={48} x={25} y={17} fill="#FF7966" rx={24} />
      <Rect
        width={48}
        height={48}
        x={25}
        y={17}
        fill="url(#b)"
        fillOpacity={0.5}
        rx={24}
      />
      <Rect
        width={47}
        height={47}
        x={25.5}
        y={17.5}
        stroke="url(#c)"
        strokeOpacity={0.5}
        rx={23.5}
      />
    </G>
    <G clipPath="url(#d)">
      <Path
        fill="#fff"
        d="M56.333 40.333h-6.666v-6.666A.667.667 0 0 0 49 33a.666.666 0 0 0-.667.667v6.666h-6.666A.667.667 0 0 0 41 41a.666.666 0 0 0 .667.667h6.666v6.666a.667.667 0 0 0 1.334 0v-6.666h6.666a.667.667 0 0 0 0-1.334Z"
      />
    </G>
    <Defs>
      <RadialGradient
        id="b"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="matrix(0 -48 48 0 49 65)"
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0.433} stopColor="#fff" stopOpacity={0} />
        <Stop offset={1} stopColor="#FF7F37" />
      </RadialGradient>
      <LinearGradient
        id="c"
        x1={25}
        x2={49}
        y1={17}
        y2={65}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" />
        <Stop offset={1} stopColor="#fff" stopOpacity={0} />
      </LinearGradient>
      <ClipPath id="d">
        <Path fill="#fff" d="M41 33h16v16H41z" />
      </ClipPath>
    </Defs>
  </Svg>
);
