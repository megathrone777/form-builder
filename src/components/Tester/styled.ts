import { styled } from "~/theme";

export const StyledForm = styled.form(({ theme: { colors, rem } }) => ({
  borderBottom: `${rem(2)} solid ${colors.blue}`,
  marginBottom: rem(15),
  paddingBottom: rem(15),
}));

export const StyledTitle = styled.h3(({ theme: { rem } }) => ({
  marginBottom: rem(10),
  textAlign: "center",
}));

export const StyledFooter = styled.div({
  textAlign: "center",
});
