import { functions } from "./firebase";

export const getDriveData = async (accessToken: string) => {
  return await (
    await functions.httpsCallable(`drive`)({ accessToken })
  ).data;
};
