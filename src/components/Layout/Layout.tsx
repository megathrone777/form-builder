import React from "react";
import { useOutlet } from "react-router-dom";

import { Header } from "~/components";
import { StyledWrapper, StyledContent } from "./styled";

const Layout: React.FC = () => {
  const outlet = useOutlet();

  return (
    <StyledWrapper>
      <Header />
      <StyledContent>{outlet}</StyledContent>
    </StyledWrapper>
  );
};

export { Layout };
