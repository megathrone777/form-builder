import { styled } from "~/theme";

export const StyledWrapper = styled.div(({ theme: { colors, rem } }) => ({
  borderBottom: `${rem(2)} solid ${colors.blue}`,
  marginBottom: rem(8),
  paddingBottom: rem(8),
}));

export const StyledForm = styled.form(({ theme: { rem } }) => ({
  height: "100%",
  minWidth: rem(320),
  paddingBlock: `${rem(8)} ${rem(15)}`,
}));

export const StyledHeading = styled.div(({ theme: { rem } }) => ({
  alignItems: "center",
  columnGap: rem(10),
  display: "flex",
}));

export const StyledTitle = styled.h2(({ theme: { rem } }) => ({
  flexGrow: 1,
  fontSize: rem(20),
}));
