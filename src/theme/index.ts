import { DefaultTheme } from "styled-components";

import { colors, devices, fonts } from "./variables";

const theme: DefaultTheme = {
  colors,
  devices,
  fonts,

  hover: (css) => ({
    "@media (hover: hover) and (pointer: fine)": {
      "&:hover": {
        ...css,
      },
    },
  }),

  placeholder: (css) => ({
    "&::-webkit-input-placeholder": {
      ...css,
    },

    "&:-moz-placeholder": {
      ...css,
    },

    "&::-moz-placeholder": {
      ...css,
    },

    "&:-ms-input-placeholder": {
      ...css,
    },
  }),

  rem: (px) => `${px / +fonts.initialFontSize}rem`,
};

export { css, keyframes, useTheme, styled } from "styled-components";
export { GlobalStyle } from "./GlobalStyle";
export { theme };
