import React, { useEffect, useState } from "react";
import ReactAnimateHeight, { Height } from "react-animate-height";

import { TProps } from "./types";
import { Button, Icon, Input } from "~/theme/components";
import { StyledLayout, StyledInputWrapper, StyledIcon } from "./styled";

const Field: React.FC<TProps> = ({ id, label, onRemove, type }) => {
  const [height, setHeight] = useState<Height>(0);

  const handleFieldRemove = (): void => {
    setHeight(0);
  };

  const handleHeightAnimationEnd = (newHeight: Height): void => {
    if (newHeight === 0) {
      onRemove(id);
    }
  };

  useEffect((): void => {
    setHeight(40);
  }, []);

  return (
    <ReactAnimateHeight
      animateOpacity
      duration={200}
      onHeightAnimationEnd={handleHeightAnimationEnd}
      {...{ height }}
    >
      <StyledLayout>
        <StyledInputWrapper>
          <Input hasError={null} {...{ label, type }} />
        </StyledInputWrapper>

        <StyledIcon>
          <Icon id="iconDrag" />
        </StyledIcon>

        <Button
          iconId="iconTrash"
          onClick={handleFieldRemove}
          template="secondary"
          type="button"
          {...{ id }}
        />
      </StyledLayout>
    </ReactAnimateHeight>
  );
};

export { Field };
