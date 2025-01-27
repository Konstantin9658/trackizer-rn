import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";
import { TabIconProps } from "./types";
import { Colors } from "@/constants/Colors";

export const IconBudgets = (props: TabIconProps) => {
  const { focused, ...rest } = props;
  return (
    <Svg viewBox="0 0 18 18" width={18} height={18} fill="none" {...rest}>
      <G
        fill={focused ? Colors.white : Colors.grayscale.gray_30}
        clipPath="url(#a)"
      >
        <Path d="M5.25 0H3a3 3 0 0 0-3 3v2.25a3 3 0 0 0 3 3h2.25a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3Zm1.5 5.25a1.5 1.5 0 0 1-1.5 1.5H3a1.5 1.5 0 0 1-1.5-1.5V3A1.5 1.5 0 0 1 3 1.5h2.25A1.5 1.5 0 0 1 6.75 3v2.25ZM15 0h-2.25a3 3 0 0 0-3 3v2.25a3 3 0 0 0 3 3H15a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3Zm1.5 5.25a1.5 1.5 0 0 1-1.5 1.5h-2.25a1.5 1.5 0 0 1-1.5-1.5V3a1.5 1.5 0 0 1 1.5-1.5H15A1.5 1.5 0 0 1 16.5 3v2.25ZM5.25 9.75H3a3 3 0 0 0-3 3V15a3 3 0 0 0 3 3h2.25a3 3 0 0 0 3-3v-2.25a3 3 0 0 0-3-3ZM6.75 15a1.5 1.5 0 0 1-1.5 1.5H3A1.5 1.5 0 0 1 1.5 15v-2.25a1.5 1.5 0 0 1 1.5-1.5h2.25a1.5 1.5 0 0 1 1.5 1.5V15ZM15 9.75h-2.25a3 3 0 0 0-3 3V15a3 3 0 0 0 3 3H15a3 3 0 0 0 3-3v-2.25a3 3 0 0 0-3-3ZM16.5 15a1.5 1.5 0 0 1-1.5 1.5h-2.25a1.5 1.5 0 0 1-1.5-1.5v-2.25a1.5 1.5 0 0 1 1.5-1.5H15a1.5 1.5 0 0 1 1.5 1.5V15Z" />
      </G>
      <Defs>
        <ClipPath id="a">
          <Path fill="#fff" d="M0 0h18v18H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
