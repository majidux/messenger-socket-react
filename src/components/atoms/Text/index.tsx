import { styled, styleCreator } from '@utils';
import { TextProps } from './types';

/** Here we can define our default style for every text we have */
const defaultStyle = 'font-family: sans-serif;';

export const Text = styled((props: Readonly<TextProps>) => {
  const { tag = 'span', children, className, onClick, href } = props;
  const Tag = tag;
  return <Tag {...{ className, onClick, href }}>{children}</Tag>;
})`
  ${defaultStyle} ${(props: Readonly<TextProps>) =>
    styleCreator({ data: props })};
`;
