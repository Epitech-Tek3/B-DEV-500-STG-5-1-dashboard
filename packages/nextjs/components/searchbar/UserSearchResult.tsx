import { Button } from "@material-ui/core";
import { scrollBar } from "@utils/style";
import React from "react";
import { Box, Flex, Image, Text } from "rebass";
import { Relative } from "../common/Position";

interface UserProps {
  user: any;
  onClick: (user: any) => Promise<void>;
}

const UserResult = ({ user, onClick }: UserProps) => (
  <Flex
    onClick={async () => await onClick(user)}
    sx={{
      "& > button": { p: 3, borderRadius: 0, textTransform: "unset", span: { justifyContent: "left" } },
      borderBottom: "solid 1px lightGrey"
    }}
  >
    <Button fullWidth>
      <Image src={user.picture} width={55} />
      <Box ml={3}>
        <Text as="p" color="grey" textAlign="left" fontWeight="900" overflow="hidden" sx={{ textOverflow: "ellipsis" }}>
          {user.title}
        </Text>
        <Text as="p" color="grey" fontSize={0} textAlign="left" overflow="hidden" sx={{ textOverflow: "ellipsis" }}>
          {user.provider}
        </Text>
        <Text
          as="p"
          color="grey"
          display="-webkit-box"
          mt={2}
          fontSize={0}
          textAlign="left"
          overflow="hidden"
          sx={{ textOverflow: "ellipsis", WebkitLineClamp: 1, overflow: "hidden", "-webkit-box-orient": "vertical" }}
        >
          {user.desc}
        </Text>
      </Box>
    </Button>
  </Flex>
);

interface Props {
  users: any[];
  none: boolean;
  onClick: (user: any) => Promise<void>;
}

export const SearchResults = ({ users, none = false, onClick }: Props) => {
  return (
    <Box
      mt={1}
      width="calc(100% - (2 * 8px))"
      maxHeight="40vh"
      bg="white"
      sx={{
        borderRadius: 5,
        boxShadow: "rgba(0, 0, 0, 0.12) 0 1px 6px, rgba(0, 0, 0, 0.12) 0 1px 4px;",
        position: ["fixed", "absolute"],
        zIndex: 1000,
        overflowY: "auto",
        left: [0, "unset"],
        ...scrollBar
      }}
    >
      <Relative height="100%">
        {none && (
          <Text as="p" p={3}>
            Aucun résultat
          </Text>
        )}
        {users && users.map((user) => <UserResult key={user.title} user={user} onClick={onClick} />)}
      </Relative>
    </Box>
  );
};
