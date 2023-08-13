import { styled } from "~/theme";

export const StyledLayout = styled.div(({ theme: { rem } }) => ({
  alignItems: "center",
  columnGap: rem(5),
  display: "flex",
  height: rem(46),
  justifyContent: "space-between",
}));
