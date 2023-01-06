import React from "react";
import { getGooglePhotoData } from "@libraries/googlePhoto";
import { useAuth } from "./useAuth";

export const useGooglePhoto = (section: string, filters?: string) => {
  const [adata, setData] = React.useState(null);
  const { currentUser } = useAuth();

  React.useEffect(() => {
    getGooglePhotoData(currentUser.accessToken, section, filters).then((data) => {
      setData([...(data?.mediaItems ?? [])]);
      setInterval(
        () =>
          getGooglePhotoData(currentUser.accessToken, section, filters).then((data) =>
            setData([...(data?.mediaItems ?? [])])
          ),
        currentUser.modules.googlePhoto.timer * 1000
      );
    });
  }, [0]);

  return adata;
};
