import ReactAnimateHeight from "react-animate-height";

import { styled } from "~/theme";

export const StyledWrapper = styled(ReactAnimateHeight)({});

export const StyledLayout = styled.div(({ theme: { rem } }) => ({
  alignItems: "center",
  columnGap: rem(5),
  display: "flex",
  justifyContent: "space-between",
  minHeight: rem(46),
}));
