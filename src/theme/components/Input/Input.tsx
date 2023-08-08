import React, { useId } from "react";

import { TProps } from "./types";
import { StyledWrapper, StyledLabel, StyledErrorIcon, StyledInput } from "./styled";

const Input: React.FC<TProps> = ({
  hasError,
  label,
  placeholder,
  type,
  ...rest
}) => {
  const inputId = useId();
  const defaultValue = type === "number" ? 1 : undefined;

  return (
    <StyledWrapper>
      <StyledLabel htmlFor={inputId}>{label}</StyledLabel>

      <StyledInput
        className={hasError ? "has-error" : ""}
        id={inputId}
        min={type === "number" ? 1 : undefined}
        placeholder={placeholder ? placeholder : "Vyplnit text"}
        {...{ defaultValue, type, ...rest }}
      />

      {hasError && (
        <StyledErrorIcon>
          <use href="#iconError" />
        </StyledErrorIcon>
      )}
    </StyledWrapper>
  );
};

export { Input };
