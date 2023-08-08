import React, { useCallback, useState } from "react";
import ReactAnimateHeight, { Height } from "react-animate-height";
import { v4 } from "uuid";

import { Field } from "./Field";
import { useStore } from "~/hooks";
import { deleteForm, updateForm } from "~/store";
import { Button } from "~/theme/components";
import { TProps } from "./types";
import { StyledWrapper, StyledForm, StyledHeading, StyledTitle } from "./styled";

const Form: React.FC<TProps> = ({ id, fields, name }) => {
  const { dispatch } = useStore();
  const [height, setHeight] = useState<Height>(0);

  const handleFormOpened = (): void => {
    setHeight((prevHeight: Height): Height => (prevHeight === 0 ? "auto" : 0));
  };

  const handleFieldRemove = useCallback(
    (fieldId: string): void => {
      const newFields: TFormField[] = [...fields].filter(
        ({ id: currentId }): boolean => fieldId !== currentId
      );

      dispatch(
        updateForm({
          fields: newFields,
          id,
        })
      );
    },
    [fields]
  );

  const handleFormDelete = (): void => {
    dispatch(deleteForm(id));
  };

  return (
    <StyledWrapper>
      <StyledHeading>
        <StyledTitle>{name}</StyledTitle>

        <Button
          icon={height === 0 ? "iconEdit" : "iconCross"}
          onClick={handleFormOpened}
          template="primary"
          type="button"
        />

        <Button
          icon="iconTrash"
          onClick={handleFormDelete}
          template="secondary"
          type="button"
        />
      </StyledHeading>

      <ReactAnimateHeight animateOpacity duration={200} {...{ height }}>
        <StyledForm action="#">
          {fields.map(
            (field: TFormField): React.ReactElement => (
              <Field key={v4()} onRemove={handleFieldRemove} {...field} />
            )
          )}
        </StyledForm>
      </ReactAnimateHeight>
    </StyledWrapper>
  );
};

export { Form };
