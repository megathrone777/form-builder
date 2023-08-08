import React from "react";
import { v4 } from "uuid";

import { useStore } from "~/hooks";
import { Button, Input } from "~/theme/components";
import { StyledForm, StyledTitle, StyledFooter } from "./styled";

const Tester: React.FC = () => {
  const { store } = useStore();
  const { forms } = store;

  return (
    <React.Fragment>
      {!!forms.length &&
        forms.map(
          ({ fields, id, name }): React.ReactElement => (
            <StyledForm action="#" key={id}>
              <StyledTitle>{name}</StyledTitle>

              {fields.map(
                ({ label, type }): React.ReactElement => (
                  <Input hasError={null} key={v4()} {...{ label, type }} />
                )
              )}

              <StyledFooter>
                <Button template="primary" type="submit">
                  Submit
                </Button>
              </StyledFooter>
            </StyledForm>
          )
        )}
    </React.Fragment>
  );
};

export { Tester };
