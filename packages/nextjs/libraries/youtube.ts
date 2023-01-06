import { functions } from "./firebase";

export const getYoutubeData = async (accessToken: string, section: string, filters: string) => {
  return await (
    await functions.httpsCallable(`youtube/${section}`)({ accessToken, section, filters })
  ).data;
};
