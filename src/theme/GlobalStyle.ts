import { createGlobalStyle } from "styled-components";

import { base, reset } from "./global";

const GlobalStyle = createGlobalStyle({}, [reset, base]);

export { GlobalStyle };
