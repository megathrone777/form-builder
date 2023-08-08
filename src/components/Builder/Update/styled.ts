import { styled } from "~/theme";

export const StyledActions = styled.div(({ theme: { rem } }) => ({
  display: "flex",
  columnGap: rem(10),
  marginBottom: rem(15),
}));
