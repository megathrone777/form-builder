import React, { useCallback, useState } from "react";
import ReactAnimateHeight, { Height } from "react-animate-height";

import { Field } from "./Field";
import { TProps } from "./types";
import { Button } from "~/theme/components";
import {
  StyledWrapper,
  StyledHeading,
  StyledContent,
  StyledError,
  StyledFooter,
} from "./styled";

const Form: React.FC<TProps> = ({ fields, name }) => {
  const [error, setError] = useState<true | null>(null);
  const [height, setHeight] = useState<Height>(0);
  const [formData, setFormData] = useState<Record<number, string>>({});

  const handleFormCollapse = (): void => {
    setHeight((prevHeight: Height): Height => (prevHeight === 0 ? "auto" : 0));
  };

  const handleFormSubmit = (event: React.SyntheticEvent<HTMLFormElement>): void => {
    event.preventDefault();
    setError(null);

    if (Object.keys(formData).length === fields.length) {
      alert(JSON.stringify(formData));

      return;
    }

    setError(true);
  };

  const handleInputParse = useCallback(
    (inputData: Record<number, string>): void => {
      setFormData(
        (prevData): Record<number, string> => ({
          ...prevData,
          ...inputData,
        })
      );
    },
    [fields]
  );

  return (
    <StyledWrapper action="#" onSubmit={handleFormSubmit}>
      <StyledHeading>
        <h3>{name}</h3>

        <Button
          iconId={height === 0 ? "iconEye" : "iconCross"}
          onClick={handleFormCollapse}
          template="primary"
          type="button"
        />
      </StyledHeading>

      <ReactAnimateHeight
        animateOpacity
        duration={200}
        easing="linear"
        {...{ height }}
      >
        {error && <StyledError>Please fill all fields.</StyledError>}

        {!!fields.length && (
          <StyledContent>
            {fields.map(
              ({ id, ...rest }: TFormField, index: number): React.ReactElement => (
                <Field
                  key={id}
                  onParse={handleInputParse}
                  {...{ id, index, ...rest }}
                />
              )
            )}
          </StyledContent>
        )}

        <StyledFooter>
          <Button template="primary" type="submit">
            Submit
          </Button>
        </StyledFooter>
      </ReactAnimateHeight>
    </StyledWrapper>
  );
};

export { Form };
