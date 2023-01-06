import { Absolute, Relative } from "@components/common/Position";
import { Flex, Image, Text } from "rebass";
import { makeSerieNumber } from "@utils/makekey";
import { PictureInPicture } from "@components/video/pictureInPicture";
import { PlaylistPlay } from "@material-ui/icons";
import { useYoutube } from "@hooks/useYoutube";
import React from "react";
import router from "next/router";
import { useTranslation } from "@hooks/useTranslation";

interface PlaylistCardProps {
  title: string;
  description: string;
  onClick: () => void;
  miniature: string;
  items: number;
}

export const PlaylistCard = ({ title, items, onClick, description, miniature }: PlaylistCardProps) => {
  return (
    <Relative display="flex" id="playlistCardContainer" mt={3} onClick={onClick} sx={{ cursor: "pointer" }}>
      <Absolute
        id="playlistCardContent"
        left={60}
        bottom={0}
        top={0}
        color="white"
        height={62}
        width={50}
        p={0}
        sx={{ bg: "#000c", borderRadius: 5 }}
      >
        <Flex alignItems="center" flexDirection="column" mt={3}>
          <Text as="p" color="white" lineHeight="10px">
            {items}
          </Text>
          <PlaylistPlay />
        </Flex>
      </Absolute>
      <Image
        id="playlistCardImg"
        src={miniature}
        width={110}
        height={62}
        sx={{
          borderRadius: 5,
          objectFit: "cover",
          boxShadow: "rgba(0, 0, 0, 0.12) 0 1px 6px, rgba(0, 0, 0, 0.12) 0 1px 4px"
        }}
      />
      <Flex flexDirection="column" ml={3} justifyContent="center" flex={1}>
        <Text as="p" fontSize={1}>
          {title}
        </Text>
        <Text
          as="p"
          fontSize={1}
          color="grey"
          overflow="hidden"
          sx={{ textOverflow: "ellipsis", whiteSpace: "nowrap" }}
        >
          {description}
        </Text>
      </Flex>
    </Relative>
  );
};

export const PlaylistsCard = () => {
  const playlists = useYoutube("playlists", "part=snippet,contentDetails&mine=1");
  const [playedPlaylist, setPlayedPlaylist] = React.useState(null);
  const { text } = useTranslation();

  return (
    <>
      <Flex alignItems="center" sx={{ svg: { fill: "grey" } }}>
        <PlaylistPlay width={25} />
        <Text as="span" ml={3}>
          Playlists
        </Text>
        <Flex flexGrow={1} />
      </Flex>
      {playlists?.map(({ snippet, contentDetails, id }) => (
        <PlaylistCard
          key={makeSerieNumber(5)}
          items={contentDetails.itemCount}
          onClick={() => setPlayedPlaylist(id)}
          title={snippet.title || "Untitle"}
          description={snippet.description || "No description"}
          miniature={snippet.thumbnails.maxres.url}
        />
      ))}
      <Flex pt={2} mt={3} sx={{ borderTop: "solid 1px lightGrey", cursor: "pointer" }}>
        <Text
          ml="41px"
          as="span"
          fontSize={1}
          sx={{ textTransform: "uppercase" }}
          onClick={() => router.push("/channel/playlist")}
        >
          {text.accessPlaylists}
        </Text>
      </Flex>
      <PictureInPicture src={playedPlaylist} type="playlist" onClose={() => setPlayedPlaylist(null)} />
    </>
  );
};
