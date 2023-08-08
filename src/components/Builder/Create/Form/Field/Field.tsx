import React, { useState } from "react";
import { Height } from "react-animate-height";

import { TProps } from "./types";
import { Button, Input } from "~/theme/components";
import { StyledWrapper, StyledLayout } from "./styled";

const Field: React.FC<TProps> = ({ id, label, onRemove, type }) => {
  const [height, setHeight] = useState<Height>(46);

  const handleFieldRemove = (): void => {
    setHeight(0);
  };

  const handleHeightAnimationEnd = (): void => {
    onRemove(id);
  };

  return (
    <StyledWrapper
      animateOpacity
      duration={200}
      forwardedAs="div"
      onHeightAnimationEnd={handleHeightAnimationEnd}
      {...{ height }}
    >
      <StyledLayout>
        <Input hasError={null} {...{ label, type }} />

        <Button
          icon="iconTrash"
          onClick={handleFieldRemove}
          template="secondary"
          type="button"
          {...{ id }}
        />
      </StyledLayout>
    </StyledWrapper>
  );
};

export { Field };
