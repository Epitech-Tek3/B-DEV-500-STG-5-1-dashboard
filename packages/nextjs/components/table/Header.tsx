import { Button } from "@components/buttons/button";
import { Menu, MenuItem, Switch } from "@material-ui/core";
import { ViewColumnRounded, FilterListRounded, SaveAltOutlined } from "@material-ui/icons";
import React, { useState } from "react";
import { Flex, Text } from "rebass";
import { camelize } from "./Table";

export interface HeaderProps {
  onUpdateShowColumns: (label, checked) => void;
  onHiddeAll: () => void;
  onShowAll: () => void;
  showColumns: string[];
  button?: boolean;
  labels: string[];
}

export const Header: React.FC<HeaderProps> = ({
  onUpdateShowColumns,
  onHiddeAll,
  onShowAll,
  button,
  showColumns,
  ...props
}) => {
  const [columnsOpen, setColumnsOpen] = useState(false);

  return (
    <Flex p={1} justifyContent="flex-start" sx={{ borderBottom: "solid 1px lightGrey" }}>
      <Button variant="text" id="columnsTableHeader" onClick={() => setColumnsOpen(!columnsOpen)} width="fit-content">
        <ViewColumnRounded style={{ fill: "#1a73e8" }} />
        <Text as="span" fontSize={0} color="blue" ml={2} fontWeight="600" sx={{ textTransform: "uppercase" }}>
          columns
        </Text>
      </Button>
      <Menu
        open={columnsOpen}
        onClose={() => {
          setColumnsOpen(false);
        }}
        anchorEl={document.getElementById("columnsTableHeader")}
        PaperProps={{
          style: {
            transform: "translateX(0) translateY(60px)"
          }
        }}
      >
        {props.labels.map((label) => (
          <MenuItem key={label} style={{ minWidth: "300px" }}>
            <Switch
              onChange={(v) => {
                onUpdateShowColumns(label, v.currentTarget.checked);
              }}
              checked={showColumns.find((e) => e == camelize(label)) ? false : true}
            />
            <Text as="span">{label}</Text>
          </MenuItem>
        ))}
        <Flex justifyContent="space-between" px={1}>
          <Button onClick={onHiddeAll}>
            <Text as="span" color="blue" fontWeight="600" fontSize={0}>
              hide all
            </Text>
          </Button>
          <Button onClick={onShowAll}>
            <Text as="span" color="blue" fontWeight="600" fontSize={0}>
              show all
            </Text>
          </Button>
        </Flex>
      </Menu>
      <Button variant="text" width="fit-content">
        <FilterListRounded style={{ fill: "#1a73e8" }} />
        <Text as="span" fontSize={0} color="blue" ml={2} fontWeight="600" sx={{ textTransform: "uppercase" }}>
          filters
        </Text>
      </Button>
      <Button variant="text" width="fit-content">
        <ViewColumnRounded style={{ fill: "#1a73e8", transform: "rotate(90deg)" }} />
        <Text as="span" fontSize={0} color="blue" ml={2} fontWeight="600" sx={{ textTransform: "uppercase" }}>
          density
        </Text>
      </Button>
      <Button variant="text" width="fit-content">
        <SaveAltOutlined style={{ fill: "#1a73e8" }} />
        <Text as="span" fontSize={0} color="blue" ml={2} fontWeight="600" sx={{ textTransform: "uppercase" }}>
          export
        </Text>
      </Button>
      {button && (
        <Flex flexDirection="row-reverse" flex={1}>
          <Button
            variant="contained"
            style={{ backgroundColor: "#1a73e8", color: "white", fontWeight: 700, textTransform: "none" }}
          >
            Ajouter un membre
          </Button>
        </Flex>
      )}
    </Flex>
  );
};
