import { SvgProps } from "react-native-svg";

export type Color = {
  offset: string;
  color: string;
  opacity: string;
};

export interface CustomRadialGradientProps extends SvgProps {
  colorList: Color[];
  x: string;
  y: string;
  rx: string;
  ry: string;
}
