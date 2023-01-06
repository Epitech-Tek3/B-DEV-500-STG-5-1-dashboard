import { BoxShadowed } from "@components/containers/BoxShadowed";
import React from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { Box } from "rebass";

interface ListDraggableProps {
  list: any[];
}

export const ListDraggable = ({ list }: ListDraggableProps) => {
  const [overviews, setOverviews] = React.useState(list);
  const [dragging, setDragging] = React.useState(false);

  function handleOnDragEnd(result) {
    if (!result.destination) return;
    const items = Array.from(overviews);
    const [reorderedItem] = items.splice(result.source.index, 1);

    items.splice(result.destination.index, 0, reorderedItem);
    setOverviews(items);
  }

  return (
    <DragDropContext
      onDragEnd={(r) => {
        setDragging(false);
        handleOnDragEnd(r);
      }}
      onDragStart={() => setDragging(true)}
    >
      <Droppable droppableId="overviews">
        {(provided) => (
          <Box
            as="ul"
            className="overviews"
            {...provided.droppableProps}
            ref={provided.innerRef}
            sx={{ "& > li": { listStyle: "none" }, p: 0 }}
          >
            {overviews.map((overview, i) => (
              <Draggable key={"overview-" + i} draggableId={"overview-" + i} index={i}>
                {(provided) => (
                  <Box
                    as="li"
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    width="100%"
                    sx={{
                      border: "solid 1px transparent",
                      borderRadius: 7,
                      bg: dragging ? "lightGrey" : "white",
                      boxShadow: dragging && "rgba(0, 0, 0, 0.12) 0 1px 6px, rgba(0, 0, 0, 0.12) 0 1px 4px",
                      p: 1,
                      my: 2
                    }}
                  >
                    <BoxShadowed width="100%">{overview}</BoxShadowed>
                  </Box>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </Box>
        )}
      </Droppable>
    </DragDropContext>
  );
};
