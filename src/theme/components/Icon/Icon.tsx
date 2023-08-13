import React from "react";

import { TProps } from "./types";
import { StyledWrapper } from "./styled";

const Icon: React.FC<TProps> = ({ id }) => (
  <StyledWrapper>
    <use href={`#${id}`} />
  </StyledWrapper>
);

export { Icon };
