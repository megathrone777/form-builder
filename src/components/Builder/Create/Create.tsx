import React, { useCallback, useState } from "react";
import { v4 } from "uuid";

import { Form } from "./Form";
import { controls } from "./data";
import { TControl } from "./types";
import { Button } from "~/theme/components";
import { StyledHeading } from "./styled";

const Create: React.FC = () => {
  const [fields, setFields] = useState<TFormField[]>([]);

  const handleControlClick = useCallback(
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
    [controls]
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
    <div>
      {controls && !!controls.length && (
        <StyledHeading>
          {controls.map(
            ({ label, type }: TControl): React.ReactElement => (
              <Button
                iconId="iconPlus"
                key={v4()}
                onClick={handleControlClick}
                template="primary"
                type="button"
                value={type}
              >
                {label}
              </Button>
            )
          )}
        </StyledHeading>
      )}

      <Form onFieldRemove={handleFieldRemove} {...{ fields }} />
    </div>
  );
};

export { Create };
