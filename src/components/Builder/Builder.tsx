import React from "react";

import { Create } from "./Create";
import { Update } from "./Update";
import { AutoHeight } from "~/components";
import { StyledWrapper, StyledColumn } from "./styled";

const Builder: React.FC = () => (
  <StyledWrapper>
    <StyledColumn>
      <AutoHeight>
        <Create />
      </AutoHeight>
    </StyledColumn>

    <StyledColumn>
      <Update />
    </StyledColumn>
  </StyledWrapper>
);

export { Builder };
