import { styled } from "~/theme";

export const StyledActions = styled.div(({ theme: { devices, rem } }) => ({
  display: "flex",
  columnGap: rem(10),
  marginBottom: rem(15),

  [devices.mobile]: {
    justifyContent: "center",
  },
}));
