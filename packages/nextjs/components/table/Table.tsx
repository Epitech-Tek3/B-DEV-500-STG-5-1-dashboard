import { Box, Flex, FlexProps } from "rebass";
import { BoxShadowed } from "@components/containers/BoxShadowed";
import { Columns } from "./Columns";
import { Header } from "./Header";
import { Rows } from "./Rows";
import React, { useCallback, useEffect, useRef, useState } from "react";

export function camelize(str) {
  return str
    ?.replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
      return index === 0 ? word.toLowerCase() : word.toUpperCase();
    })
    .replace(/\s+/g, "");
}

const createHeaders = (headers) => {
  return headers.map((item) => ({
    text: item,
    ref: useRef()
  }));
};

export type Rows = {
  editable?: boolean;
  type: "text" | "email" | "checkbox" | "progress" | "boolean" | "avatar";
  value: any;
  label: string;
};

interface TableProps {
  columns: string[];
  button?: boolean;
  rows: Rows[][];
  minCellWidth: number;
  containerProps?: Omit<FlexProps, "css">;
}

export const Table: React.FC<TableProps> = ({ columns, button, containerProps, rows, minCellWidth }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [hiddenColumns, setHiddenColumns] = useState<string[]>([""]);
  // const [density, setDensity] = useState<"Compact" | "Standard" | "Comfortable">("Standard");
  const tableElement = useRef(null);
  const col = createHeaders(["box", ...columns]);

  useEffect(() => {
    rows = [[{ type: "checkbox", value: false, editable: false, label: "" }], ...rows.map((row) => row)];
  }, []);

  const mouseMove = useCallback(
    (e) => {
      const gridColumns = col.map((col, i) => {
        if (i === activeIndex) {
          const width = e.clientX - col?.ref.current.offsetLeft;

          if (width >= minCellWidth) {
            return `${width}px`;
          }
        }
        return `${col?.ref.current.offsetWidth}px`;
      });

      tableElement.current.style.gridTemplateColumns = `${gridColumns.join(" ")}`;
    },
    [activeIndex, col, minCellWidth]
  );

  const removeListeners = useCallback(() => {
    window.removeEventListener("mousemove", mouseMove);
    window.removeEventListener("mouseup", removeListeners);
  }, [mouseMove]);

  const mouseUp = useCallback(() => {
    setActiveIndex(null);
    removeListeners();
  }, [setActiveIndex, removeListeners]);

  useEffect(() => {
    if (activeIndex !== null) {
      window.addEventListener("mousemove", mouseMove);
      window.addEventListener("mouseup", mouseUp);
    }

    return () => {
      removeListeners();
    };
  }, [activeIndex, mouseMove, mouseUp, removeListeners]);

  const reapetGrid = [...new Array(col.length - hiddenColumns?.length + 1)]
    .map((_, i) => (i == 0 ? "49px" : minCellWidth + "%"))
    .toString();

  return (
    <Flex width="100%" {...containerProps}>
      <BoxShadowed
        overflow="hidden"
        width="100%"
        p={0}
        sx={{
          borderRadius: 7,
          background: "#fff"
        }}
      >
        <Header
          labels={columns}
          button={button}
          onUpdateShowColumns={(label, checked) =>
            !checked
              ? setHiddenColumns([...hiddenColumns, camelize(label)])
              : setHiddenColumns([...hiddenColumns.filter((col) => col != camelize(label))])
          }
          onHiddeAll={() => setHiddenColumns([...columns.map((col) => camelize(col))])}
          onShowAll={() => setHiddenColumns([""])}
          showColumns={hiddenColumns}
        />
        <Box
          width="100%"
          display="grid"
          overflow="auto"
          flexWrap="nowrap"
          ref={tableElement}
          sx={{
            gridTemplateColumns: `${reapetGrid.replaceAll(",", " ")}`
          }}
        >
          <Columns
            activeIndex={activeIndex}
            columns={col}
            hiddenColumns={hiddenColumns}
            onMouseDown={(index) => setActiveIndex(index)}
          />
          <Rows rows={rows} hiddenColumns={hiddenColumns} />
        </Box>
      </BoxShadowed>
    </Flex>
  );
};
