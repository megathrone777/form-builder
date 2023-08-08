import { styled } from "~/theme";

export const StyledWrapper = styled.div(({ theme: { rem } }) => ({
  marginInline: "auto",
  maxWidth: rem(1400),
}));

export const StyledContent = styled.div(({ theme: { rem } }) => ({
  padding: `${rem(20)} ${rem(10)}`,
}));
