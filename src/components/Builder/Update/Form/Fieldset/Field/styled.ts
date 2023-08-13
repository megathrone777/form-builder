import { styled } from "~/theme";

export const StyledLayout = styled.div(({ theme: { rem } }) => ({
  alignItems: "center",
  columnGap: rem(10),
  display: "flex",
  justifyContent: "space-between",
}));

export const StyledInputWrapper = styled.div({
  flexGrow: 1,
});

export const StyledIcon = styled.span(({ theme: { colors, rem } }) => ({
  color: colors.blue,
  display: "inline-flex",
  height: rem(40),
  maxWidth: rem(30),
}));
