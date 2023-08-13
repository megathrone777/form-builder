import React from "react";

import { Form } from "./Form";
import { useStore } from "~/hooks";
import { StyledWrapper } from "./styled";

const Tester: React.FC = () => {
  const { store } = useStore();
  const { forms } = store;

  return (
    <StyledWrapper>
      {!!forms.length &&
        forms.map((form): React.ReactElement => <Form key={form.id} {...form} />)}
    </StyledWrapper>
  );
};

export { Tester };
