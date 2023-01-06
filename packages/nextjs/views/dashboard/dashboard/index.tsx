const PlaylistsCard = dynamic(() => import("./cards/playlists").then((mod) => mod.PlaylistsCard), { ssr: false });
import { Box, Flex, Text } from "rebass";
import { CommentCard } from "./cards/comment";
import { Container } from "@components/containers/Container";
import { LikesCard } from "./cards/likes";
import { ListDraggable } from "./list";
import { PhotosCard } from "./cards/photo";
import { ProjectCard } from "./cards/project";
import { SubscriptionGraph } from "./graphs/subscription";
import { useAuth } from "@hooks/useAuth";
import { ViewingGraph } from "./graphs/viewing";
import { ViewsGraph } from "./graphs/views";
import dynamic from "next/dynamic";
import React from "react";
import { useTranslation } from "@hooks/useTranslation";

const overviewsList = [
  <ProjectCard key={0} />,
  <LikesCard key={3} />,
  <PlaylistsCard key={1} />,
  <CommentCard key={2} />
];

const overviewGraph = [<ViewsGraph key={5} />, <ViewingGraph key={6} />, <SubscriptionGraph key={7} />];

const overviewsPhoto = [<PhotosCard key={0} />];

export const Dashboard = () => {
  const { currentUser } = useAuth();
  const { text } = useTranslation();

  return (
    <Container width="90%">
      <Box>
        <Flex>
          {currentUser.modules.youtubeChannel.state && (
            <Box width={1 / 3}>
              <ListDraggable list={overviewsList} />
            </Box>
          )}
          {currentUser.modules.youtubeStudio.state && (
            <Box width={1 / 3}>
              <ListDraggable list={overviewGraph} />
            </Box>
          )}
          {currentUser.modules.googlePhoto.state && (
            <Box width={1 / 3}>
              <ListDraggable list={overviewsPhoto} />
            </Box>
          )}
        </Flex>
        {!currentUser.modules.youtubeChannel.state &&
          !currentUser.modules.youtubeStudio.state &&
          !currentUser.modules.googlePhoto.state && (
            <Container height="calc(100vh - 64px)">
              <Text as="h3" color="grey" m="auto">
                {text.noModuleFound}
              </Text>
            </Container>
          )}
      </Box>
    </Container>
  );
};
