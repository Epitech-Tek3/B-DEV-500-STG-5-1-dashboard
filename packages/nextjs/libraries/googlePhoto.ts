import { functions } from "./firebase";

export const getGooglePhotoData = async (accessToken: string, section: string, filters: string) => {
  return await (
    await functions.httpsCallable(`photo`)({ accessToken, section, filters })
  ).data;
};
