import { Colors } from "@/constants/Colors";
import Svg, { Path } from "react-native-svg";
import { TabIconProps } from "./types";

export const IconHome = (props: TabIconProps) => {
  const { focused, ...rest } = props;
  return (
    <Svg viewBox="0 0 18 18" width={18} height={18} fill="none" {...rest}>
      <Path
        fill={focused ? Colors.white : Colors.grayscale.gray_30}
        d="m17.34 6.802-5.688-5.69a3.756 3.756 0 0 0-5.304 0L.659 6.802A2.233 2.233 0 0 0 0 8.392v7.363a2.25 2.25 0 0 0 2.25 2.25h13.5a2.25 2.25 0 0 0 2.25-2.25V8.392a2.232 2.232 0 0 0-.66-1.59Zm-6.09 9.703h-4.5v-2.95a2.25 2.25 0 0 1 4.5 0v2.95Zm5.25-.75a.75.75 0 0 1-.75.75h-3v-2.95a3.75 3.75 0 0 0-7.5 0v2.95h-3a.75.75 0 0 1-.75-.75V8.392c0-.198.08-.389.22-.53l5.689-5.687a2.256 2.256 0 0 1 3.183 0l5.688 5.69c.14.14.219.33.22.527v7.363Z"
      />
    </Svg>
  );
};
