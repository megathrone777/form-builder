import { styled } from "~/theme";

export const StyledWrapper = styled.div({
  position: "relative",
});

export const StyledError = styled.p(({ theme: { colors, fonts, rem } }) => ({
  color: colors.red,
  fontSize: rem(12),
  fontWeight: fonts.medium,
  left: rem(102),
  position: "absolute",
  top: `calc(100% + ${rem(2)})`,
}));
