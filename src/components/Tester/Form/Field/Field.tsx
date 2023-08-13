import React, { useEffect, useRef, useState } from "react";

import { TProps } from "./types";
import { Input } from "~/theme/components";
import { StyledWrapper, StyledError } from "./styled";

const Field: React.FC<TProps> = ({ index, label, onParse, type }) => {
  const isInitialMount = useRef(true);
  const [value, setValue] = useState<string>(type === "number" ? "1" : "");
  const [error, setError] = useState<true | null>(null);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const checkField = (): void => {
    setError(null);

    if (value.length === 0) {
      setError(true);
      setErrorMessage("Cannot be blank.");

      return;
    }

    if (type === "text" && value.match(/[^a-z]/)) {
      setError(true);
      setErrorMessage("Only letters.");

      return;
    }

    if (type === "number" && !value.match(/[0-9]{1,5}/)) {
      setError(true);
      setErrorMessage("Only digits.");
    }

    onParse({
      [`${label}-${index}`]: value,
    });
  };

  const handleInputChange = ({
    currentTarget,
  }: React.SyntheticEvent<HTMLInputElement>): void => {
    setValue(currentTarget.value);
  };

  useEffect((): void => {
    if (isInitialMount.current) {
      isInitialMount.current = false;

      return;
    }

    checkField();
  }, [value]);

  return (
    <StyledWrapper>
      <Input hasError={error} onChange={handleInputChange} {...{ label, type }} />
      {error && <StyledError>{errorMessage}</StyledError>}
    </StyledWrapper>
  );
};

export { Field };
