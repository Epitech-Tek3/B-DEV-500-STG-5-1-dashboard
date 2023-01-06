import { Absolute, Relative } from "@components/common/Position";
import { FormCheckbox } from "@components/form/FormCheckbox";
import React from "react";
import { Box, Text } from "rebass";
import { camelize } from "./Table";

export interface ColumnsProps {
  activeIndex: number;
  columns: any[];
  hiddenColumns: string[];
  onMouseDown: (index: number) => void;
}

export const Columns = ({ activeIndex, columns, hiddenColumns, onMouseDown }: ColumnsProps) => {
  return (
    <Box display="contents">
      <Box display="contents">
        {columns.map(
          ({ ref, text }, i) =>
            !hiddenColumns?.find((e) => e == camelize(text)) && (
              <Relative ref={ref} key={text} fontSize="14px" textAlign="left" p="16px 20px" pl={2} minWidth="30px">
                {i != 0 ? (
                  <Text
                    as="span"
                    display="block"
                    overflow="hidden"
                    textAlign="left"
                    ml={2}
                    fontWeight="700"
                    sx={{ whiteSpace: "nowrap", textOverflow: "ellipsis", textTransform: "capitalize" }}
                  >
                    {text}
                  </Text>
                ) : (
                  <FormCheckbox ref={null} name="" id="" />
                )}
                {i != columns.length && (
                  <Absolute
                    width="7px"
                    height="14px"
                    right={0}
                    top={0}
                    my="auto"
                    bottom={0}
                    sx={{
                      zIndex: 1,
                      borderRight: "2px solid lightGrey",
                      cursor: "col-resize",
                      ":hover": { borderColor: "black" },
                      ":active": { borderColor: "black" }
                    }}
                    onMouseDown={() => onMouseDown(i)}
                    className={`resize-handle ${activeIndex === i ? "active" : "idle"}`}
                  />
                )}
              </Relative>
            )
        )}
      </Box>
    </Box>
  );
};
