import { ReactElement } from "../../../utils";

type OverflowType = Readonly<"hidden" | "scroll" | "visible" | "clip" | "auto">;

type ScreenSizeType = Readonly<
  | "auto"
  | "fit-content"
  | "inherit"
  | "initial"
  | "-webkit-fill-available"
  | "min-content"
  | "max-content"
  | "unset"
  | "revert"
  | string
>;

export type ResponsiveTypes = {
  xxl?: number;
  xl?: number;
  lg?: number;
  md?: number;
  sm?: number;
  xs?: number;
};

export type ViewProps = Readonly<{
  display?: "flex" | "grid" | "block" | "table-cell" | "table-row" | "none";
  flexDirection?: "row" | "row-reverse" | "column" | "column-reverse";
  height?: ScreenSizeType;
  width?: ScreenSizeType;
  tabIndex?: number;
  backgroundImage?: string;
  backgroundColor?: string;
  backgroundRepeat?: "no-repeat" | "repeat";
  backgroundPositionY?: string;
  backgroundPositionX?: string;
  backgroundSize?: "cover" | "contain" | "auto";
  minHeight?: ScreenSizeType;
  minWidth?: ScreenSizeType;
  padding?: string;
  margin?: string;
  justifyContent?:
    | "flex-end"
    | "flex-start"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly";
  alignItems?: "flex-end" | "flex-start" | "center";
  alignSelf?: "flex-end" | "flex-start" | "center";
  position?: "static" | "absolute" | "fixed" | "relative" | "sticky";
  zIndex?: number;
  borderRadius?: string;
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
  round?: boolean | string;
  border?: string;
  boxShadow?: string;
  overflow?: OverflowType;
  overflowX?: OverflowType;
  overflowY?: OverflowType;
  marginBottom?: string;
  marginLeft?: string;
  marginTop?: string;
  marginRight?: string;
  transform?: any;
  transitionDuration?: string | number;
  borderTop?: string;
  borderBottom?: string;
  borderLeft?: string;
  cursor?: "pointer" | "default" | "hidden";
  verticalAlign?: "middle";
  flexWrap?: "wrap" | "no-wrap";
  maxWidth?: ScreenSizeType;
  maxHeight?: ScreenSizeType;
  flex?: number;
  tag?: "div" | "main" | "section" | "nav" | "header" | "li" | "ul";
  children?: ReactElement | ReactElement[] | any;
  all?: "unset";
  textDecoration?: "none";
  color?: string;
  className?: string;
  responsive?: Readonly<ResponsiveTypes>;
  opacity?: string;
  onMouseOver?: () => void;
  onMouseLeave?: () => void;
  onFocus?: () => void;
  onClick?: (...parameter: any) => void | any;
  onKeyDown?: (...parameter: any) => void | any;
  zoom?: string;
  direction?: string;
  userSelect?: "none";
  hover?: ViewProps;
  gap?: string;
  ref?: any;
}>;
