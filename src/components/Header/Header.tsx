import React from "react";

import { Menu } from "./Menu";
import { StyledWrapper } from "./styled";

const Header: React.FC = () => (
  <StyledWrapper>
    <Menu />
  </StyledWrapper>
);

export { Header };
