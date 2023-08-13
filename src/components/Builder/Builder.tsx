import React from "react";

import { Create } from "./Create";
import { Update } from "./Update";
import { StyledWrapper, StyledColumn } from "./styled";

const Builder: React.FC = () => (
  <StyledWrapper>
    <StyledColumn>
      <Create />
    </StyledColumn>

    <StyledColumn>
      <Update />
    </StyledColumn>
  </StyledWrapper>
);

export { Builder };
