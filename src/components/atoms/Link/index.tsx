import { RouterLink, styled, styleCreator, ReactElement } from '@utils';
import { LinkTypes } from './types';

const styledLink = styled((props: LinkTypes): ReactElement => {
  const { to, children, className }: LinkTypes = props;
  return <RouterLink {...{ to, className }}>{children}</RouterLink>;
});

export const Link = styledLink`${(props: LinkTypes) =>
  styleCreator({ data: props })}`;
