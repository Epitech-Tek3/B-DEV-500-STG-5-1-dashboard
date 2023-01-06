import { makeSerieNumber } from "@utils/makekey";
import React from "react";
import { Box } from "rebass";
import { Rows as RowsT } from "./Table";
import { Td } from "./td";
import { Tr } from "./Tr";

export interface RowsProps {
  rows: RowsT[][];
  hiddenColumns: string[];
}

export const Rows = ({ rows, hiddenColumns }: RowsProps) => {
  return (
    <Box display="contents">
      {rows.map((row) => (
        <Tr key={`rows-${makeSerieNumber(5)}`}>
          <Td type="checkbox" value={false} editable={false} label="" />
          {row.map((item) => {
            return (
              !hiddenColumns?.find((e) => e == item.label) && <Td key={item.value + makeSerieNumber(5)} {...item} />
            );
          })}
        </Tr>
      ))}
    </Box>
  );
};
