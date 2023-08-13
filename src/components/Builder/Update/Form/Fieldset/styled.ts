import { styled } from "~/theme";

export const StyledWrapper = styled.form(({ theme: { rem } }) => ({
  minWidth: rem(320),
}));

export const StyledLayout = styled.div(({ theme: { rem } }) => ({
  paddingBlock: rem(15),
}));

export const StyledHeading = styled.div(({ theme: { rem } }) => ({
  columnGap: rem(10),
  display: "flex",
  justifyContent: "flex-end",
}));

export const StyledItem = styled.div(({ theme: { colors, rem } }) => ({
  backgroundColor: "white",
  borderTop: `${rem(1)} solid ${colors.blue}`,

  "&.is-dragging": {
    border: "none",
  },
}));
