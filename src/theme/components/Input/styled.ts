import { styled } from "~/theme";

export const StyledWrapper = styled.div(({ theme: { rem } }) => ({
  height: rem(30),
  position: "relative",
}));

export const StyledLabel = styled.label(({ theme: { fonts, rem } }) => ({
  cursor: "pointer",
  display: "inline-block",
  fontSize: rem(16),
  fontWeight: fonts.medium,
  lineHeight: rem(30),
  minWidth: rem(100),
  userSelect: "none",
  verticalAlign: "middle",
}));

export const StyledInput = styled.input(({ type, theme: { colors, rem } }) => ({
  appearance: "none",
  border: `${rem(2)} solid ${colors.orange}`,
  borderRadius: rem(3),
  display: "inline-block",
  height: "100%",
  fontFamily: "inherit",
  fontSize: rem(15),
  margin: 0,
  paddingBlock: 0,
  paddingInline: rem(4),
  verticalAlign: "middle",
  width: rem(170),

  ...(type === "checkbox" && {
    cursor: "pointer",
    height: rem(20),
    position: "relative",
    width: rem(20),

    "&:checked": {
      backgroundColor: colors.orange,
    },
  }),

  ...(type === "number" && {
    width: rem(40),
  }),

  "&.has-error": {
    borderColor: colors.red,
  },
}));

export const StyledErrorIcon = styled.svg(({ theme: { colors, rem } }) => ({
  color: colors.red,
  left: rem(275),
  maxWidth: rem(25),
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
}));
