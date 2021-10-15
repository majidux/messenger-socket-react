import { ViewProps } from "@utils";

export interface TextProps extends Omit<ViewProps, "tag" | "height" | "color"> {
  /** color */
  tag?: "span" | "p" | "h1" | "h2" | "h3" | "h4" | "h5";
  textAlign?: "center" | "right" | "left" | "start" | "end";
  fontSize?: string;
  theme?: any;
  height?: any;
  children?: any;
  fontWeight?: string;
  onClick?: () => void;
  margin?: string;
  color?: string;
  styled?: any;
  textVariant?: string;
  style?: any | undefined;
  mobileFontSize?: string;
  variant?: string;
  href?: string;
}
