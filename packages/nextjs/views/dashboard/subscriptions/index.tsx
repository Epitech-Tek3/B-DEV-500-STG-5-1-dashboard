import { Flex, Image, Text } from "rebass";
import { Button } from "@components/buttons/button";
import { Container } from "@components/containers/Container";
import { Grid } from "@components/grid";
import { makeSerieNumber } from "@utils/makekey";
import { useYoutube } from "@hooks/useYoutube";
import React from "react";
import { WorkingOn } from "@components/state/WorkingOn";
import { useAuth } from "@hooks/useAuth";
import { useTranslation } from "@hooks/useTranslation";

const SubscriptionCard = ({ channelId, src, name }) => {
  const { text } = useTranslation();

  return (
    <Flex
      as="a"
      href={`https://youtube.com/channel/${channelId}`}
      target="_blank"
      flexDirection="column"
      justifyContent="center"
    >
      <Image src={src} width={90} height={90} mx="auto" sx={{ borderRadius: 50 }} />
      <Text
        as="p"
        textAlign="center"
        display="-webkit-box"
        sx={{ WebkitLineClamp: 1, overflow: "hidden", "-webkit-box-orient": "vertical" }}
      >
        {name}
      </Text>
      <Text as="p" textAlign="center" fontSize={0}>
        X M {text.dsubscribers}
      </Text>
      <Button display="grid !important" mx={0} mt={2} px={0} variant="text" width="100%">
        {text.subscribers}
      </Button>
    </Flex>
  );
};

const Content = () => {
  const subscriptions = useYoutube("subscriptions", "part=snippet&maxResults=25&mine=true");
  const { text } = useTranslation();

  return (
    <Container width="95%">
      <Text as="h1" textAlign="center" my={4}>
        {text.mySubscriptions}
      </Text>
      <Grid widthItems="150px">
        {subscriptions?.map(({ snippet }) => (
          <SubscriptionCard
            key={makeSerieNumber(5)}
            channelId={snippet.resourceId.channelId}
            src={snippet.thumbnails.default.url}
            name={snippet.title}
          />
        ))}
      </Grid>
    </Container>
  );
};

export const Subscriptions = () => {
  const { currentUser } = useAuth();

  return currentUser.modules.youtubeChannel.state ? <Content /> : <WorkingOn />;
};
