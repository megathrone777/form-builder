import { Link } from "react-router-dom";

import { styled } from "~/theme";

export const StyledWrapper = styled.div(({ theme: { rem } }) => ({
  alignItems: "center",
  display: "flex",
  flexDirection: "column",
  height: "100%",
  justifyContent: "center",
  rowGap: rem(15),
}));

export const StyledLink = styled(Link)(({ theme: { colors, fonts, rem } }) => ({
  color: colors.blue,
  fontSize: rem(19),
  fontWeight: fonts.medium,

  "&:hover": {
    textDecoration: "none",
  },
}));
