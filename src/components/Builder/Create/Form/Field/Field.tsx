import React, { useState } from "react";
import ReactAnimateHeight, { Height } from "react-animate-height";

import { TProps } from "./types";
import { Button, Input } from "~/theme/components";
import { StyledLayout } from "./styled";

const Field: React.FC<TProps> = ({ id, label, onRemove, type }) => {
  const [height, setHeight] = useState<Height>(46);

  const handleFieldRemove = (): void => {
    setHeight(0);
  };

  const handleHeightAnimationEnd = (): void => {
    onRemove(id);
  };

  return (
    <ReactAnimateHeight
      animateOpacity
      duration={200}
      easing="linear"
      onHeightAnimationEnd={handleHeightAnimationEnd}
      {...{ height }}
    >
      <StyledLayout>
        <Input disabled hasError={null} {...{ label, type }} />

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
