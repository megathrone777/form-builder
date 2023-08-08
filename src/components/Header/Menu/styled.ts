import { NavLink } from "react-router-dom";

import { styled } from "~/theme";

export const StyledList = styled.ul(({ theme: { rem } }) => ({
  alignItems: "center",
  columnGap: rem(20),
  display: "flex",
  height: "100%",
  justifyContent: "center",
}));

export const StyledLink = styled(NavLink)(({ theme: { colors, fonts, rem } }) => ({
  color: colors.blue,
  fontSize: rem(19),
  fontWeight: fonts.medium,
  textDecoration: "none",

  "&.active": {
    textShadow: `0 0 ${rem(2)} ${colors.blue}`,
  },
}));
