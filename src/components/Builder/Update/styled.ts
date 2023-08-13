import { styled } from "~/theme";

export const StyledHeading = styled.div(({ theme: { rem } }) => ({
  alignItems: "center",
  display: "flex",
  justifyContent: "space-between",
  marginBottom: rem(20),
  minHeight: rem(30),
}));

export const StyledPlaceholder = styled.p(({ theme: { fonts, rem } }) => ({
  fontSize: rem(19),
  fontWeight: fonts.medium,
}));
