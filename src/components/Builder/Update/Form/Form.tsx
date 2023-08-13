import React, { useEffect, useState } from "react";
import AnimateHeight, { Height } from "react-animate-height";

import { Fieldset } from "./Fieldset";
import { useStore } from "~/hooks";
import { deleteForm } from "~/store";
import { Button } from "~/theme/components";
import { TProps } from "./types";
import { StyledLayout, StyledHeading, StyledTitle } from "./styled";

const Form: React.FC<TProps> = ({ id, fields, name }) => {
  const { dispatch } = useStore();
  const [height, setHeight] = useState<Height>(0);
  const [isCollapsed, toggleCollapsed] = useState<boolean>(true);

  const handleFormCollapsed = (): void => {
    toggleCollapsed(!isCollapsed);
  };

  const handleHeightAnimationEnd = (newHeight: Height): void => {
    if (newHeight === 0) {
      dispatch(deleteForm(id));
    }
  };

  const handleFormDelete = (): void => {
    setHeight(0);
  };

  useEffect((): void => {
    setHeight("auto");
  }, []);

  return (
    <AnimateHeight
      animateOpacity
      duration={200}
      easing="linear"
      onHeightAnimationEnd={handleHeightAnimationEnd}
      {...{ height }}
    >
      <StyledLayout>
        <StyledHeading>
          <StyledTitle>{name}</StyledTitle>

          <Button
            iconId={isCollapsed ? "iconEdit" : "iconCross"}
            onClick={handleFormCollapsed}
            template="primary"
            type="button"
          />

          <Button
            iconId="iconTrash"
            onClick={handleFormDelete}
            template="secondary"
            type="button"
          />
        </StyledHeading>

        <AnimateHeight
          animateOpacity
          duration={200}
          easing="linear"
          height={isCollapsed ? 0 : "auto"}
        >
          <Fieldset {...{ id, fields }} />
        </AnimateHeight>
      </StyledLayout>
    </AnimateHeight>
  );
};

export { Form };
