import Close from "@material-ui/icons/Close";
import React from "react";
import { Box, FlexProps, Text, Flex } from "rebass";

export type Tag = {
  id: string;
  text: string;
};

interface TagsIProps extends Omit<FlexProps, "css"> {
  tags: Tag[];
  onRemove?: (i: number) => void;
}

export const Tags: React.FC<TagsIProps> = ({ tags, onRemove, ...props }) => {
  return (
    <Flex
      {...props}
      display="grid"
      flexDirection="row"
      flexWrap="wrap"
      sx={{
        gridTemplateColumns: `repeat(auto-fill, minmax(250px, 1fr))`,
        gridGap: "10px"
      }}
    >
      {tags.map((tag, i) => (
        <Flex
          key={tag.id}
          px={2}
          py={1}
          sx={{
            borderRadius: 5,
            boxShadow: "rgba(0, 0, 0, 0.12) 0 1px 6px, rgba(0, 0, 0, 0.12) 0 1px 4px",
            cursor: "pointer",
            maxWidth: 300,
            width: "auto"
          }}
        >
          <Text
            as="p"
            sx={{
              overflow: "hidden",
              textOverflow: "ellipsis"
            }}
          >
            {tag.text}
          </Text>
          <Box
            display="contents"
            ml={3}
            width={20}
            sx={{
              "& > svg": {
                fill: "grey",
                width: 20
              }
            }}
            onClick={() => onRemove(i)}
          >
            <Close />
          </Box>
        </Flex>
      ))}
    </Flex>
  );
};
