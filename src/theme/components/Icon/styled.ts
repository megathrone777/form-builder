import { styled } from "~/theme";

export const StyledWrapper = styled.svg(({ theme: { rem } }) => ({
  maxWidth: rem(17),
  verticalAlign: "middle",
}));
