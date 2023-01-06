import React from "react";
import { Box, Text } from "rebass";

interface IProps {
  title: string;
  progress: number;
}

export const ConsumptionBar = ({ title, progress, ...props }: IProps) => {
  return (
    <Box my={2} {...props}>
      <Box width="100%" height="5px" mb={2} bg="lightGrey" overflow="hidden" sx={{ borderRadius: 5 }}>
        <Box
          bg="blue"
          height="100%"
          width={`${progress}%`}
          sx={{ borderTopRightRadius: 5, borderBottomRightRadius: 5 }}
        />
      </Box>
      <Text as="p" color="grey" fontSize={1}>
        {title}
      </Text>
    </Box>
  );
};
