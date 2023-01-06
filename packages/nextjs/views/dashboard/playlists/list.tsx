import { Box, Flex, Image, Text } from "rebass";
import { makeSerieNumber } from "@utils/makekey";
import { PictureInPicture } from "@components/video/pictureInPicture";
import { usePlaylistsVideos } from "@hooks/usePlaylistsVideos";
import { useTime } from "@hooks/useTimeline";
import React from "react";
import { useYoutube } from "@hooks/useYoutube";
import { Avatar } from "@components/image/Avatar";
import { List, ListItem } from "@material-ui/core";
import { WorkingOn } from "@components/state/WorkingOn";
import { useAuth } from "@hooks/useAuth";

const Content = ({ playlistId }) => {
  const { videos } = usePlaylistsVideos({ playlistId: playlistId });
  const playlist = useYoutube("playlists", `part=snippet,contentDetails&id=${playlistId}`);
  const [playedVideo, setPlayedVideo] = React.useState(null);

  return (
    <>
      <Flex px={4} justifyContent="center" width="95%" mt={4}>
        <Box width="855px">
          {videos?.map(({ snippet }) => (
            <Flex key={makeSerieNumber(5)} my={2} onClick={() => setPlayedVideo(snippet.resourceId.videoId)}>
              <Image src={snippet.thumbnails.maxres.url} width="360px" height="202px" sx={{ cursor: "pointer" }} />
              <Box flex={1} ml={3}>
                <Text as="h3" sx={{ cursor: "pointer" }}>
                  {snippet.title}
                </Text>
                <Text as="p" fontSize={0} mb={3} sx={{ cursor: "pointer" }}>
                  {useTime(snippet.publishedAt)}
                </Text>
                <Flex alignItems="center" sx={{ cursor: "pointer" }}>
                  <Avatar src={snippet.thumbnails.medium.url} style={{ width: 25, height: 25 }} />
                  <Text as="p" ml={2} fontSize={0}>
                    {String(snippet.videoOwnerChannelTitle).replace("- Topic", "")}
                  </Text>
                </Flex>
                <Text
                  as="p"
                  fontSize={0}
                  mt={2}
                  display="-webkit-box"
                  sx={{ WebkitLineClamp: 2, overflow: "hidden", "-webkit-box-orient": "vertical", cursor: "pointer" }}
                >
                  {snippet.description}
                </Text>
              </Box>
            </Flex>
          ))}
        </Box>
        {videos && (
          <Box width="385px" height="300px" bg="#F1F1F1" ml="40px">
            <Flex p={3}>
              <Image
                src={playlist[0].snippet?.thumbnails?.medium.url}
                width={72}
                height={72}
                sx={{ borderRadius: 50, objectFit: "cover" }}
              />
              <Flex flexDirection="column" justifyContent="center" ml={3}>
                <Text as="p">{playlist[0].snippet?.title}</Text>
                <Text as="p" color="grey">
                  Musique/Vidéo
                </Text>
              </Flex>
            </Flex>
            <Flex width="100%">
              <Image
                src={videos[videos.length > 1 ? 1 : 0].snippet.thumbnails.medium.url}
                size={214}
                sx={{ objectFit: "cover", mr: 1 }}
              />
              <Box flex={1}>
                <Image
                  src={videos[videos.length > 2 ? 2 : 0].snippet.thumbnails.medium.url}
                  width={167}
                  height={105}
                  sx={{ objectFit: "cover" }}
                />
                <Image
                  src={videos[videos.length > 3 ? 3 : 0].snippet.thumbnails.medium.url}
                  width={167}
                  height={105}
                  sx={{ objectFit: "cover", mt: 1 }}
                />
              </Box>
            </Flex>
            <List>
              {videos.map(({ snippet }) => (
                <ListItem
                  key={makeSerieNumber(5)}
                  onClick={() => setPlayedVideo(snippet.resourceId.videoId)}
                  style={{ borderBottom: "1px solid #0000001a" }}
                  button
                >
                  <Flex>
                    <Box>
                      <Text as="p" fontWeight="700" fontSize={1}>
                        {snippet.title}
                      </Text>
                      <Text as="p" fontSize={0} color="grey">
                        {useTime(snippet.publishedAt)}
                      </Text>
                    </Box>
                  </Flex>
                </ListItem>
              ))}
            </List>
          </Box>
        )}
      </Flex>
      <PictureInPicture src={playedVideo} onClose={() => setPlayedVideo(null)} />
    </>
  );
};

export const PlaylistList = ({ playlistId }) => {
  const { currentUser } = useAuth();

  return currentUser.modules.youtubeChannel.state ? <Content playlistId={playlistId} /> : <WorkingOn />;
};
