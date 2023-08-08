import { styled } from "~/theme";

export const StyledWrapper = styled.div(({ theme: { colors, rem } }) => ({
  backgroundColor: colors.gray,
  height: rem(60),
  padding: rem(5),
}));
