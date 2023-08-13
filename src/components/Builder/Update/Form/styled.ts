import { styled } from "~/theme";

export const StyledLayout = styled.div(({ theme: { colors, rem } }) => ({
  borderTop: `${rem(2)} solid ${colors.blue}`,
}));

export const StyledHeading = styled.div(({ theme: { rem } }) => ({
  alignItems: "center",
  columnGap: rem(10),
  display: "flex",
  paddingBlock: rem(8),
}));

export const StyledTitle = styled.h2(({ theme: { rem } }) => ({
  flexGrow: 1,
  fontSize: rem(20),
}));
