import { Box, Flex, Text } from "rebass";
import { Container } from "@components/containers/Container";
import { Divider } from "@material-ui/core";
import { Grid } from "@components/grid";
import { LockOutlined } from "@material-ui/icons";
import { makeSerieNumber } from "@utils/makekey";
import { PlaylistCard } from "../dashboard/cards/playlists";
import { useYoutube } from "@hooks/useYoutube";
import { WorkingOn } from "@components/state/WorkingOn";
import React from "react";
import router from "next/router";
import { useAuth } from "@hooks/useAuth";
import { useTranslation } from "@hooks/useTranslation";

const Content = () => {
  const playlists = useYoutube("playlists", "part=snippet,contentDetails,status&mine=1");
  const { text } = useTranslation();

  return (
    <Container px={4} width="80%">
      <Text as="h3" mt={4}>
        {text.createdPlaylists}
      </Text>
      <Grid widthItems="200px">
        {playlists?.map(({ snippet, contentDetails, id, status }) => (
          <Box
            key={makeSerieNumber(5)}
            sx={{
              "#playlistCardContainer": {
                display: "block",
                div: { ml: 0, pt: 2 },
                "p:nth-of-type(1)": { fontSize: 2 }
              },
              "#playlistCardContent": { width: 100, height: 112, left: 100 },
              "#playlistCardImg": { width: 200, height: 112 }
            }}
          >
            <PlaylistCard
              items={contentDetails.itemCount}
              onClick={() => router.push({ pathname: "/channel/playlist/list", query: { query: id } })}
              title={snippet.title || "Untitle"}
              description={snippet.description || "No description"}
              miniature={snippet.thumbnails.maxres.url}
            />
            <Text as="span" fontSize={0} bg="lightGrey" p={1} sx={{ borderRadius: 5 }}>
              <LockOutlined style={{ fill: "grey", width: 15, height: 15, marginRight: 5 }} />
              {status.privacyStatus}
            </Text>
          </Box>
        ))}
      </Grid>
      <Divider style={{ marginTop: 24, marginBottom: 24 }} />
      {playlists && (
        <>
          <Text as="h3">{text.registeredPlaylists}</Text>
          <Flex
            sx={{
              "#playlistCardContainer": {
                display: "block",
                div: { ml: 0, pt: 2 },
                "p:nth-of-type(1)": { fontSize: 2 }
              },
              "#playlistCardContent": { width: 200, height: 252, left: 200 },
              "#playlistCardImg": { width: 400, height: 252 }
            }}
          >
            <PlaylistCard
              items={playlists[0].contentDetails.itemCount}
              onClick={() => router.push({ pathname: "/channel/playlist/list", query: { query: playlists[0].id } })}
              title={playlists[0].snippet.title || "Untitle"}
              description={playlists[0].snippet.description || "No description"}
              miniature={playlists[0].snippet.thumbnails.maxres.url}
            />
          </Flex>
        </>
      )}
    </Container>
  );
};

export const Playlists = () => {
  const { currentUser } = useAuth();

  return currentUser.modules.youtubeChannel.state ? <Content /> : <WorkingOn />;
};
