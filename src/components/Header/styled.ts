import { styled } from "~/theme";

export const StyledWrapper = styled.div(({ theme: { rem } }) => ({
  flex: `0 1 ${rem(60)}`,
  minHeight: rem(60),
  padding: rem(5),
}));
