import React, { CSSProperties, useCallback } from "react";
import { v4 } from "uuid";
import {
  DragDropContext,
  Draggable,
  DraggingStyle,
  Droppable,
  NotDraggingStyle,
  OnDragEndResponder,
} from "react-beautiful-dnd";

import { Field } from "./Field";
import { controls } from "./data";
import { TControl, TProps } from "./types";
import { useStore } from "~/hooks";
import { updateForm } from "~/store";
import { Button } from "~/theme/components";
import { StyledWrapper, StyledLayout, StyledHeading, StyledItem } from "./styled";

const getItemStyle = (
  isDragging: boolean,
  draggableStyle?: DraggingStyle | NotDraggingStyle
): CSSProperties => ({
  cursor: isDragging ? "grabbing" : "grab",
  userSelect: "none",
  ...draggableStyle,
});

const Fieldset: React.FC<TProps> = ({ fields, id }) => {
  const { dispatch } = useStore();

  const handleFieldAdd = ({
    currentTarget,
  }: React.SyntheticEvent<HTMLButtonElement>): void => {
    const { textContent, value } = currentTarget;
    const newFields: TFormField[] = [
      ...fields,
      {
        id: v4(),
        label: textContent!,
        type: value,
      },
    ];

    dispatch(
      updateForm({
        fields: [...newFields],
        id,
      })
    );
  };

  const handleFieldRemove = useCallback(
    (fieldId: string): void => {
      const newFields: TFormField[] = [...fields].filter(
        ({ id: currentId }): boolean => fieldId !== currentId
      );

      dispatch(
        updateForm({
          fields: [...newFields],
          id,
        })
      );
    },
    [fields]
  );

  const handleDragEnd: OnDragEndResponder = (result): void => {
    if (!result.destination) {
      return;
    }

    const newFields: TFormField[] = [...fields];
    const [removed] = newFields.splice(result.source.index, 1);

    newFields.splice(result.destination.index, 0, removed);

    dispatch(
      updateForm({
        fields: [...newFields],
        id,
      })
    );
  };

  return (
    <StyledWrapper action="#">
      {controls && !!controls.length && (
        <StyledHeading>
          {controls.map(
            ({ label, type }: TControl): React.ReactElement => (
              <Button
                iconId="iconPlus"
                key={v4()}
                onClick={handleFieldAdd}
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

      <StyledLayout>
        <DragDropContext onDragEnd={handleDragEnd}>
          <Droppable droppableId="droppable">
            {({ innerRef, placeholder }): React.ReactElement => (
              <div ref={innerRef}>
                {fields.map(
                  (
                    { id: fieldId, ...rest }: TFormField,
                    index: number
                  ): React.ReactElement => (
                    <Draggable draggableId={fieldId} key={fieldId} {...{ index }}>
                      {(
                        { dragHandleProps, draggableProps, innerRef },
                        { isDragging }
                      ): React.ReactElement => (
                        <StyledItem
                          {...dragHandleProps}
                          {...draggableProps}
                          className={isDragging ? "is-dragging" : ""}
                          ref={innerRef}
                          style={getItemStyle(isDragging, draggableProps.style)}
                        >
                          <Field
                            id={fieldId}
                            onRemove={handleFieldRemove}
                            {...rest}
                          />
                        </StyledItem>
                      )}
                    </Draggable>
                  )
                )}
                {placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </StyledLayout>
    </StyledWrapper>
  );
};

export { Fieldset };
