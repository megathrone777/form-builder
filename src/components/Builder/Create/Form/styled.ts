import { styled } from "~/theme";

export const StyledWrapper = styled.form(({ theme: { rem } }) => ({
  minWidth: rem(320),
}));

export const StyledSubmit = styled.div(({ theme: { colors, devices, rem } }) => ({
  borderBottom: `${rem(2)} solid ${colors.blue}`,
  columnGap: rem(10),
  display: "flex",
  marginBottom: rem(8),
  paddingBlock: rem(15),

  [devices.mobile]: {
    justifyContent: "center",
  },
}));

export const StyledPlaceholder = styled.p(({ theme: { fonts, rem } }) => ({
  fontSize: rem(15),
  fontWeight: fonts.medium,
}));

export const StyledError = styled.p(({ theme: { colors, fonts, rem } }) => ({
  color: colors.red,
  fontSize: rem(15),
  fontWeight: fonts.medium,
}));
