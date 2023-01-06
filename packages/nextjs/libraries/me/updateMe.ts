import { MeT } from "../../interfaces/user";
import { database } from "../firebase";

export const updateMe = async (userId: string, data?: Omit<MeT, "id">) => {
  return await database.user.doc(userId).update({ ...data });
};
