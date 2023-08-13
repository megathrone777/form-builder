import React from "react";

import { Form } from "./Form";
import { useStore } from "~/hooks";
import { deleteAll } from "~/store";
import { Button } from "~/theme/components";
import { StyledHeading, StyledPlaceholder } from "./styled";

const Update: React.FC = () => {
  const { dispatch, store } = useStore();
  const { forms } = store;

  const handleDeleteAll = (): void => {
    dispatch(deleteAll(null));
  };

  return (
    <React.Fragment>
      <StyledHeading>
        <StyledPlaceholder>Forms created - {forms.length}</StyledPlaceholder>

        {forms.length > 1 && (
          <Button onClick={handleDeleteAll} template="secondary" type="button">
            Delete all forms
          </Button>
        )}
      </StyledHeading>

      {forms.map(
        (form): React.ReactElement => (
          <Form key={`${form.id}-form`} {...form} />
        )
      )}
    </React.Fragment>
  );
};

export { Update };
