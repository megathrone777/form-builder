import { styled } from "~/theme";
import { TProps } from "./types";

export const StyledWrapper = styled.button<TProps>(
  ({ template, theme: { colors, hover, rem } }) => ({
    alignItems: "center",
    borderRadius: rem(3),
    borderStyle: "solid",
    borderWidth: rem(1),
    color: "white",
    columnGap: rem(5),
    display: "inline-flex",
    fontFamily: "inherit",
    fontSize: rem(14),
    height: rem(30),
    paddingInline: rem(8),
    transitionDuration: ".15s",
    transitionProperty: "background-color, border-color",
    transitionTimingFunction: "ease-in-out",
    userSelect: "none",
    whiteSpace: "nowrap",

    ...(template === "primary" && {
      backgroundColor: colors.blue,
      borderColor: colors.blue,

      ...hover({
        backgroundColor: colors.blueDarker,
        borderColor: colors.blueDarker,
      }),
    }),

    ...(template === "secondary" && {
      backgroundColor: colors.red,
      borderColor: colors.red,

      ...hover({
        backgroundColor: colors.redDarker,
        borderColor: colors.redDarker,
      }),
    }),
  })
);

export const StyledIcon = styled.svg(({ theme: { rem } }) => ({
  maxWidth: rem(17),
  verticalAlign: "middle",
}));
