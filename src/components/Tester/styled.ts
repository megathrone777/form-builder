import { styled } from "~/theme";

export const StyledWrapper = styled.div(({ theme: { rem } }) => ({
  marginInline: "auto",
  maxWidth: rem(600),
}));
