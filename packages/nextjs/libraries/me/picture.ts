import { database } from "../firebase";

export const getUserPicture = async (userId) => {
  return (await database.user.doc(userId).get()).data();
};
