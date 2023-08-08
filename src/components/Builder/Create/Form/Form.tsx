import React, { useCallback, useState } from "react";
import { v4 } from "uuid";

import { Field } from "./Field";
import { TProps, TFormErrors } from "./types";
import { useStore } from "~/hooks";
import { createForm } from "~/store";
import { Button, Input } from "~/theme/components";
import {
  StyledWrapper,
  StyledActions,
  StyledPlaceholder,
  StyledError,
} from "./styled";

const Form: React.FC<TProps> = ({ fields, onFieldRemove }) => {
  const { dispatch } = useStore();
  const [name, setName] = useState<string>("");
  const [errors, setErrors] = useState<TFormErrors>({
    fields: null,
    name: null,
  });

  const handleFormSubmit = (event: React.SyntheticEvent<HTMLFormElement>): void => {
    event.preventDefault();

    setErrors({
      fields: null,
      name: null,
    });

    if (name.length === 0) {
      setErrors(
        (prevErrors: TFormErrors): TFormErrors => ({
          ...prevErrors,
          name: true,
        })
      );

      return;
    }

    if (fields.length === 0) {
      setErrors(
        (prevErrors: TFormErrors): TFormErrors => ({
          ...prevErrors,
          fields: true,
        })
      );

      return;
    }

    dispatch(
      createForm({
        fields,
        id: v4(),
        name,
      })
    );
  };

  const handleFormNameChange = ({
    currentTarget,
  }: React.SyntheticEvent<HTMLInputElement>): void => {
    setName(currentTarget.value);
  };

  const handleFieldRemove = useCallback(
    (id: string): void => {
      onFieldRemove(id);
    },
    [fields]
  );

  return (
    <StyledWrapper action="#" onSubmit={handleFormSubmit}>
      <Input
        hasError={errors.name}
        label="Name"
        onChange={handleFormNameChange}
        placeholder="New form"
        value={name}
      />

      <StyledActions>
        <Button template="primary" type="submit">
          Create form
        </Button>
      </StyledActions>

      {fields && !!fields.length ? (
        <React.Fragment>
          {fields.map(
            (field: TFormField): React.ReactElement => (
              <Field key={v4()} onRemove={handleFieldRemove} {...field} />
            )
          )}
        </React.Fragment>
      ) : (
        <React.Fragment>
          {errors.fields ? (
            <StyledError>Please add at least one field.</StyledError>
          ) : (
            <StyledPlaceholder>No fields added.</StyledPlaceholder>
          )}
        </React.Fragment>
      )}
    </StyledWrapper>
  );
};

export { Form };
