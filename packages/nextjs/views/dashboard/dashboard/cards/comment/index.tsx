import { Avatar } from "@material-ui/core";
import { ButtonIcon } from "@components/buttons/ButtonIcon";
import { MoreVert, Subscriptions } from "@material-ui/icons";
import { Flex, Text, Image } from "rebass";
import { makeSerieNumber } from "@utils/makekey";
import { useYoutube } from "@hooks/useYoutube";
import React from "react";
import { useTranslation } from "@hooks/useTranslation";

export const CommentCard = () => {
  const { text } = useTranslation();
  const subscriptions = useYoutube("subscriptions", "part=snippet&maxResults=4&mine=true");

  return (
    <>
      <Flex alignItems="center" sx={{ svg: { fill: "grey" } }}>
        <Subscriptions width={25} />
        <Text as="span" ml={3}>
          {text.subscriptions}
        </Text>
        <Flex flexGrow={1} />
      </Flex>
      {subscriptions?.length ? (
        subscriptions.map(({ snippet }) => (
          <Flex
            as="a"
            href={`https://youtube.com/channel/${snippet.resourceId.channelId}`}
            target="_blank"
            key={makeSerieNumber(5)}
            alignItems="center"
            my={3}
            sx={{ svg: { fill: "grey" } }}
          >
            <Avatar src={snippet.thumbnails.default.url} />
            <Text as="span" ml={4}>
              {snippet.title}
            </Text>
            <Flex flexGrow={1} />
            <Flex bg="blue" mr={3} width={5} height={5} sx={{ borderRadius: 100 }} />
            <ButtonIcon tooltipTitle="More options" size="small">
              <MoreVert />
            </ButtonIcon>
          </Flex>
        ))
      ) : (
        <Flex flexDirection="column">
          <Image
            src="https://www.gstatic.com/youtube/img/creator/no_match_illustration_v3_darkmode.svg"
            mx="auto"
            size={200}
          />
          <Text as="p" textAlign="center" fontWeight="700">
            {text.noSubscriptions}
          </Text>
        </Flex>
      )}
      <Flex pt={2} mt={3} sx={{ borderTop: "solid 1px lightGrey" }}>
        <Text ml="41px" as="span" fontSize={1} sx={{ textTransform: "uppercase" }}>
          {text.accessSubscriptions}
        </Text>
      </Flex>
    </>
  );
};
