import React, { useId } from "react";

import { TProps } from "./types";
import { Icon } from "~/theme/components";
import { StyledWrapper, StyledLabel, StyledErrorIcon, StyledInput } from "./styled";

const Input: React.FC<TProps> = ({ hasError, label, type, ...rest }) => {
  const inputId = useId();
  const defaultValue = type === "number" ? 1 : undefined;

  return (
    <StyledWrapper>
      <StyledLabel htmlFor={inputId}>{label}</StyledLabel>

      <StyledInput
        autoComplete="off"
        className={hasError ? "has-error" : ""}
        id={inputId}
        min={type === "number" ? 1 : undefined}
        placeholder={type === "text" ? "Vyplnit text" : undefined}
        {...{ defaultValue, type, ...rest }}
      />

      {hasError && (
        <StyledErrorIcon>
          <Icon id="iconError" />
        </StyledErrorIcon>
      )}
    </StyledWrapper>
  );
};

export { Input };
