import { styled } from "~/theme";

export const StyledWrapper = styled.div(({ theme: { devices, rem } }) => ({
  alignItems: "stretch",
  columnGap: rem(100),
  display: "flex",
  height: "100%",
  justifyContent: "space-between",

  [devices.tablet]: {
    columnGap: rem(20),
  },

  [devices.mobile]: {
    alignItems: "center",
    flexDirection: "column",
    marginInline: "auto",
    maxWidth: rem(400),
  },
}));

export const StyledColumn = styled.div(({ theme: { devices, rem } }) => ({
  flex: "0 1 50%",
  height: "100%",
  width: "50%",

  [devices.tablet]: {
    flex: `0 1 calc(50% - ${rem(20)})`,
    width: `calc(50% - ${rem(20)})`,
  },

  [devices.mobile]: {
    flex: "none",
    marginBottom: rem(30),
    width: "100%",
  },
}));
