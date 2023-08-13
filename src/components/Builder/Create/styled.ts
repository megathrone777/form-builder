import { styled } from "~/theme";

export const StyledHeading = styled.div(({ theme: { devices, rem } }) => ({
  display: "flex",
  columnGap: rem(10),
  marginBottom: rem(15),

  [devices.mobile]: {
    justifyContent: "center",
  },
}));

export const StyledContent = styled.div(({ theme: { colors, rem } }) => ({
  borderBottom: `${rem(2)} solid ${colors.blue}`,
  paddingBottom: rem(15),
}));
