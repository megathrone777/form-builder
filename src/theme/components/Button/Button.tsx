import React from "react";

import { Icon } from "~/theme/components";
import { TProps } from "./types";
import { StyledWrapper } from "./styled";

const Button: React.FC<TProps> = ({ children, iconId, ...rest }) => (
  <StyledWrapper {...rest}>
    {iconId && <Icon id={iconId} />}
    {children}
  </StyledWrapper>
);

export { Button };
