import Svg, { G, Path, Defs, ClipPath, SvgProps } from "react-native-svg";

export const IconBack = (props: SvgProps) => {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <G clipPath="url(#clip0_102_1816)">
        <Path
          d="M17.17 24a1 1 0 01-.71-.29l-8.17-8.17a5 5 0 010-7.08L16.46.29a1.004 1.004 0 111.42 1.42L9.71 9.88a3 3 0 000 4.24l8.17 8.17a1.002 1.002 0 01-.326 1.636 1 1 0 01-.384.074z"
          fill="#fff"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_102_1816">
          <Path fill="#fff" d="M0 0H24V24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
