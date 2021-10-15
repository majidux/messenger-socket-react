import { styleCreator, styled, ReactElement, React } from "@utils";
import { ViewProps } from "./types";

const defaultStyle = "display: flex; flex-direction: column; outline: unset;";
const excludes = [
  "tag",
  "xxl",
  "class-name",
  "row",
  "responsive",
  "onClick",
  "hover",
];

export const View = styled(
  (props: Readonly<ViewProps>): Readonly<ReactElement> => {
    const {
      tag = "div",
      children,
      className,
      responsive,
      onClick,
      ref,
    } = props;
    const Tag = tag;
    return (
      <Tag
        {...responsive}
        {...{
          onClick,
          className,
          ref,
        }}
      >
        {children}
      </Tag>
    );
  }
)`
  ${defaultStyle} ${(props: ViewProps) =>
    styleCreator({ data: props, excludes })};
  &:hover {
    ${(props: Readonly<ViewProps>) =>
      styleCreator({ data: props.hover, excludes })};
  }
`;
