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
  <Svg width={48} height={48} viewBox="0 0 48 48" fill="none" {...props}>
    <G clipPath="url(#clip0_2605_185)">
      <Path
        d="M48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48C37.2548 48 48 37.2548 48 24Z"
        fill="#FF7966"
      />
      <Path
        d="M48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48C37.2548 48 48 37.2548 48 24Z"
        fill="url(#paint0_radial_2605_185)"
        fillOpacity={0.5}
      />
      <Path
        d="M47.5 24C47.5 11.0213 36.9787 0.5 24 0.5C11.0213 0.5 0.5 11.0213 0.5 24C0.5 36.9787 11.0213 47.5 24 47.5C36.9787 47.5 47.5 36.9787 47.5 24Z"
        stroke="url(#paint1_linear_2605_185)"
        strokeOpacity={0.5}
      />
      <Path
        d="M31.3333 23.3333H24.6667V16.6667C24.6667 16.4899 24.5964 16.3203 24.4714 16.1953C24.3464 16.0702 24.1768 16 24 16V16C23.8232 16 23.6536 16.0702 23.5286 16.1953C23.4036 16.3203 23.3333 16.4899 23.3333 16.6667V23.3333H16.6667C16.4899 23.3333 16.3203 23.4036 16.1953 23.5286C16.0702 23.6536 16 23.8232 16 24V24C16 24.1768 16.0702 24.3464 16.1953 24.4714C16.3203 24.5964 16.4899 24.6667 16.6667 24.6667H23.3333V31.3333C23.3333 31.5101 23.4036 31.6797 23.5286 31.8047C23.6536 31.9298 23.8232 32 24 32C24.1768 32 24.3464 31.9298 24.4714 31.8047C24.5964 31.6797 24.6667 31.5101 24.6667 31.3333V24.6667H31.3333C31.5101 24.6667 31.6797 24.5964 31.8047 24.4714C31.9298 24.3464 32 24.1768 32 24C32 23.8232 31.9298 23.6536 31.8047 23.5286C31.6797 23.4036 31.5101 23.3333 31.3333 23.3333Z"
        fill="white"
      />
    </G>
    <Defs>
      <RadialGradient
        id="paint0_radial_2605_185"
        cx={0}
        cy={0}
        r={1}
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(49 65) rotate(-90) scale(48)"
      >
        <Stop offset={0.432536} stopColor="white" stopOpacity={0} />
        <Stop offset={1} stopColor="#FF7F37" />
      </RadialGradient>
      <LinearGradient
        id="paint1_linear_2605_185"
        x1={25}
        y1={17}
        x2={49}
        y2={65}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="white" />
        <Stop offset={1} stopColor="white" stopOpacity={0} />
      </LinearGradient>
      <ClipPath id="clip0_2605_185">
        <Rect width={48} height={48} fill="white" />
      </ClipPath>
    </Defs>
  </Svg>
);
