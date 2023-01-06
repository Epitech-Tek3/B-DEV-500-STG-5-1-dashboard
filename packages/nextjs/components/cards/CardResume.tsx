import { Relative, Absolute } from "@components/common/Position";
import { useTheme } from "@hooks/useTheme";
import { scrollBar } from "@utils/style";
import React from "react";
import { Flex, Text } from "rebass";

export interface ResumeCardProps {
  title: string;
  text: string;
}

export const ResumeCard: React.FC<ResumeCardProps> = ({ ...props }) => {
  const { isDark } = useTheme();

  return (
    <Relative bg={isDark ? "whiteNavbar" : "lightGrey"} mt={4} p={3} sx={{ borderRadius: 7, cursor: "default" }}>
      <Absolute top="-7px">
        <Text
          as="p"
          color="black"
          fontSize={0}
          fontWeight="600"
          sx={{ "&:first-letter": { textTransform: "capitalize" } }}
        >
          {props.title}
        </Text>
      </Absolute>
      <Flex overflow="auto" maxHeight={300} sx={{ ...scrollBar }}>
        <Text as="p" fontWeight="600" overflowY="auto" height="100%">
          {props.text}
        </Text>
      </Flex>
    </Relative>
  );
};
