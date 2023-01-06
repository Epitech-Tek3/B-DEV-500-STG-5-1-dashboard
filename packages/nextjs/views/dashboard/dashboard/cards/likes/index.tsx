import { Absolute, Relative } from "@components/common/Position";
import { convertDuration } from "@utils/convertDuration";
import { Flex, Image, Text } from "rebass";
import { makeSerieNumber } from "@utils/makekey";
import { ThumbUp } from "@material-ui/icons";
import { useYoutube } from "@hooks/useYoutube";
import React from "react";
import { PictureInPicture } from "@components/video/pictureInPicture";
import router from "next/router";
import { useTranslation } from "@hooks/useTranslation";

interface PlaylistCardProps {
  title: string;
  time: string;
  channel: string;
  miniature: string;
  onClick: () => void;
}

const LikeCard = ({ title, time, channel, miniature, onClick }: PlaylistCardProps) => {
  return (
    <Relative display="flex" mt={3} onClick={onClick} sx={{ cursor: "pointer" }}>
      <Image
        src={miniature}
        width={110}
        height={62}
        sx={{
          borderRadius: 3,
          objectFit: "cover",
          boxShadow: "rgba(0, 0, 0, 0.12) 0 1px 6px, rgba(0, 0, 0, 0.12) 0 1px 4px"
        }}
      />
      <Absolute left={70} bottom={1} width={36} p={0} py="3px" sx={{ bg: "#000c", borderRadius: 3 }}>
        <Text
          as="p"
          color="white"
          fontSize="12px"
          fontWeight="700"
          alignContent="center"
          alignItems="center"
          textAlign="center"
        >
          {time}
        </Text>
      </Absolute>
      <Flex flexDirection="column" ml={3} justifyContent="center" flex={1}>
        <Text
          as="p"
          fontSize={1}
          display="-webkit-box"
          sx={{ WebkitLineClamp: 2, overflow: "hidden", "-webkit-box-orient": "vertical" }}
        >
          {title}
        </Text>
        <Text
          as="p"
          fontSize={1}
          color="grey"
          overflow="hidden"
          sx={{ textOverflow: "ellipsis", whiteSpace: "nowrap" }}
        >
          {channel}
        </Text>
      </Flex>
    </Relative>
  );
};

export const LikesCard = () => {
  const likes = useYoutube("videos", "part=snippet,contentDetails&mine=true&maxResults=4&myRating=like");
  const [playedVideo, setPlayedVideo] = React.useState(null);
  const { text } = useTranslation();

  return (
    <>
      <Flex alignItems="center" sx={{ svg: { fill: "grey" } }}>
        <ThumbUp width={25} />
        <Text as="span" ml={3}>
          {text.likes}
        </Text>
        <Flex flexGrow={1} />
      </Flex>
      {likes?.map(({ snippet, contentDetails, id }) => (
        <LikeCard
          key={makeSerieNumber(5)}
          onClick={() => setPlayedVideo(id)}
          channel={snippet.channelTitle}
          time={convertDuration(contentDetails.duration)}
          title={snippet.title || "Untitle"}
          miniature={snippet.thumbnails.default.url}
        />
      ))}
      <Flex pt={2} mt={3} sx={{ borderTop: "solid 1px lightGrey" }}>
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
      <PictureInPicture src={playedVideo} onClose={() => setPlayedVideo(null)} />
    </>
  );
};
