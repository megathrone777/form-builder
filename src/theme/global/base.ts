import { css } from "~/theme";

const base = css(({ theme: { fonts, rem } }) => ({
  "*": {
    boxSizing: "border-box",
  },

  "html, body, #root": {
    height: "100%",
  },

  html: {
    fontSize: `${fonts.initialFontSize}px`,
  },

  button: {
    cursor: "pointer",
  },

  svg: {
    height: "100%",
    width: "100%",
  },

  hr: {
    marginBlock: `0 ${rem(15)}`,
  },

  img: {
    maxWidth: "100%",
    verticalAlign: "middle",
  },
}));

export { base };
