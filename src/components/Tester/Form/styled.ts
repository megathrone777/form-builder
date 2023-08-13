import { styled } from "~/theme";

export const StyledWrapper = styled.form(({ theme: { colors, rem } }) => ({
  borderBottom: `${rem(2)} solid ${colors.blue}`,
  paddingBlock: rem(15),
}));

export const StyledHeading = styled.div({
  alignItems: "center",
  display: "flex",
  justifyContent: "space-between",
});

export const StyledContent = styled.div(({ theme: { rem } }) => ({
  display: "flex",
  flexDirection: "column",
  paddingBlock: rem(15),
  rowGap: rem(20),
}));

export const StyledFooter = styled.div({
  textAlign: "center",
});

export const StyledError = styled.p(({ theme: { colors, fonts, rem } }) => ({
  color: colors.red,
  fontSize: rem(14),
  fontWeight: fonts.medium,
  paddingBlock: rem(10),
}));
