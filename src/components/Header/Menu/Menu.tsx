import React from "react";

import { StyledList, StyledLink } from "./styled";

const Menu: React.FC = () => (
  <StyledList>
    <li>
      <StyledLink to="/">Form builder</StyledLink>
    </li>
    <li>
      <StyledLink to="tester">Form tester</StyledLink>
    </li>
  </StyledList>
);

export { Menu };
