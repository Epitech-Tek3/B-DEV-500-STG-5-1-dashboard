import { Youtube } from "@components/appIcons/Youtube";
import { useTranslation } from "@hooks/useTranslation";
import { useYoutube } from "@hooks/useYoutube";
import { makeSerieNumber } from "@utils/makekey";
import React from "react";
import { Box, Flex, Text } from "rebass";

export const ProjectCard = () => {
  const me = useYoutube("channels", "part=snippet&mine=true");
  const { text } = useTranslation();

  return (
    <>
      <Flex alignItems="center" sx={{ svg: { fill: "grey" } }}>
        <Youtube width={25} />
        <Text as="span" ml={3}>
          {text.channelInfo}
        </Text>
        <Flex flexGrow={1} />
      </Flex>
      <Box ml="41px">
        {[
          { label: text.channelName, value: me && me[0].snippet.title },
          { label: text.channelId, value: me && me[0].id }
        ].map(({ label, value }) => (
          <React.Fragment key={makeSerieNumber(5)}>
            <Box mt={1} fontSize={0}>
              <Text as="p" fontWeight="900">
                {label}
              </Text>
              <Text as="p" color="grey">
                {value}
              </Text>
            </Box>
          </React.Fragment>
        ))}
      </Box>
      <Flex pt={2} mt={3} sx={{ borderTop: "solid 1px lightGrey" }}>
        <Text ml="41px" as="span" fontSize={1} sx={{ textTransform: "uppercase" }}>
          {text.accessChannel}
        </Text>
      </Flex>
    </>
  );
};
