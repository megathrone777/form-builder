import React from "react";

import { StyledWrapper, StyledLink } from "./styled";

const NotFound: React.FC = () => (
  <StyledWrapper>
    <h1>Page not found</h1>
    <StyledLink to="/">Main page</StyledLink>
  </StyledWrapper>
);

export { NotFound };
