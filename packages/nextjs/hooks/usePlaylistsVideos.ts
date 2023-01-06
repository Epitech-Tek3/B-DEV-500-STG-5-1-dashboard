import { getYoutubeData } from "@libraries/youtube";
import React from "react";
import { useAuth } from "./useAuth";

export type usePlaylistsVideoProps = {
  videos: any[];
  setVideos: React.Dispatch<React.SetStateAction<any[]>>;
};

export interface usePlaylistVideoProps {
  playlistId: string;
}

const request = async (currentUser, playlistId) =>
  await getYoutubeData(
    currentUser.accessToken,
    "playlistItems",
    `part=snippet,contentDetails&playlistId=${playlistId}&maxResults=25`
  );

export const usePlaylistsVideos = ({ playlistId }: usePlaylistVideoProps): usePlaylistsVideoProps => {
  const [videos, setVideos] = React.useState(null);
  const { currentUser } = useAuth();

  React.useEffect(() => {
    request(currentUser, playlistId).then((data) => {
      setVideos([...data.items]);
      setInterval(
        () => request(currentUser, playlistId).then((data) => setVideos([...data.items])),
        currentUser.modules.youtubeChannel.timer * 1000
      );
    });
  }, [playlistId]);
  return { videos, setVideos };
};
