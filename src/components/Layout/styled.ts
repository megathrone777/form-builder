import { styled } from "~/theme";

export const StyledWrapper = styled.div(({ theme: { rem } }) => ({
  display: "flex",
  flexDirection: "column",
  height: "100%",
  marginInline: "auto",
  maxWidth: rem(1400),
}));

export const StyledContent = styled.div(({ theme: { rem } }) => ({
  flexGrow: 1,
  padding: `${rem(20)} ${rem(10)}`,
}));
