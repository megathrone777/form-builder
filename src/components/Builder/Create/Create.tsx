import React, { useCallback, useState } from "react";
import { v4 } from "uuid";

import { Form } from "./Form";
import { options } from "./data";
import { TOption } from "./types";
import { Button } from "~/theme/components";
import { StyledActions } from "./styled";

const Create: React.FC = () => {
  const [fields, setFields] = useState<TFormField[]>([]);

  const handleOptionClick = useCallback(
    ({ currentTarget }: React.SyntheticEvent<HTMLButtonElement>): void => {
      const { textContent, value } = currentTarget;

      setFields((prevFields: TFormField[]): TFormField[] => [
        ...prevFields,
        {
          id: v4(),
          label: textContent!,
          type: value,
        },
      ]);
    },
    [options]
  );

  const handleFieldRemove = (fieldId: string): void => {
    setFields((prevFields: TFormField[]): TFormField[] => {
      const newFields: TFormField[] = [...prevFields].filter(
        ({ id }): boolean => fieldId !== id
      );

      return newFields;
    });
  };

  return (
    <React.Fragment>
      {options && !!options.length && (
        <StyledActions>
          {options.map(
            ({ label, type }: TOption): React.ReactElement => (
              <Button
                icon="iconPlus"
                key={v4()}
                onClick={handleOptionClick}
                template="primary"
                type="button"
                value={type}
              >
                {label}
              </Button>
            )
          )}
        </StyledActions>
      )}

      <Form onFieldRemove={handleFieldRemove} {...{ fields }} />
    </React.Fragment>
  );
};

export { Create };
