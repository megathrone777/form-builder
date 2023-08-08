import { TDevices } from "./types";

const sizes: TDevices = {
  mobile: "767px",
  tablet: "1279px",
};

const devices: TDevices = {
  mobile: `@media screen and (max-width: ${sizes.mobile})`,
  tablet: `@media screen and (max-width: ${sizes.tablet})`,
};

export { devices };
