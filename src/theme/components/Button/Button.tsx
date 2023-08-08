import React from "react";

import { TProps } from "./types";
import { StyledWrapper, StyledIcon } from "./styled";

const Button: React.FC<TProps> = ({ children, icon, ...rest }) => (
  <StyledWrapper {...rest}>
    {icon && (
      <StyledIcon>
        <use href={`#${icon}`} />
      </StyledIcon>
    )}

    {children}
  </StyledWrapper>
);

export { Button };
