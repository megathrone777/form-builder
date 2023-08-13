import type { CSS, StyledObject } from "styled-components/dist/types";
import type { TColors, TDevices, TFonts } from "~/theme/variables/types";

declare module "styled-components" {
  interface TRem<P = number> {
    (px: P): string;
  }

  interface TPlaceholder {
    (css: StyledObject<CSS.Properties>): StyledObject<CSS.Properties>;
  }

  interface THover {
    (css: StyledObject<CSS.Properties>): {
      [key: CSS.AtRules]: {
        [key: CSS.SimplePseudos]: StyledObject<CSS.Properties>;
      };
    };
  }

  export interface DefaultTheme {
    colors: TColors;
    devices: TDevices;
    fonts: TFonts;
    hover: THover;
    placeholder: TPlaceholder;
    rem: TRem;
  }
}
