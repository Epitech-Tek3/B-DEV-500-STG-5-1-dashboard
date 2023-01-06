import { functions } from "./firebase";

export const getMailData = async (accessToken: string) => {
  return await (
    await functions.httpsCallable(`gmail`)({ accessToken })
  ).data;
};
