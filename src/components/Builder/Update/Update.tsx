import React from "react";

import { Form } from "./Form";
import { useStore } from "~/hooks";
import { deleteAll } from "~/store";
import { Button } from "~/theme/components";
import { StyledActions } from "./styled";

const Update: React.FC = () => {
  const { dispatch, store } = useStore();
  const { forms } = store;

  const handleDeleteAll = (): void => {
    dispatch(deleteAll(null));
  };

  return (
    <React.Fragment>
      {forms.map(
        (form): React.ReactElement => (
          <Form key={`${form.id}-form`} {...form} />
        )
      )}

      {forms.length > 1 && (
        <StyledActions>
          <Button onClick={handleDeleteAll} template="secondary" type="button">
            Delete all forms
          </Button>
        </StyledActions>
      )}
    </React.Fragment>
  );
};

export { Update };
