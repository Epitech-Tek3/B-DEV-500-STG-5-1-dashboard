import { FirebaseDate, firestore } from "../firebase";
import { uuid } from "uuidv4";
import dayjs from "dayjs";

interface IMessage {
  id: string;
  convId: string;
  prevMessage: "own" | "other";
  message: string;
  senderId: string;
  createdAt: Date | FirebaseDate;
}

const addMessage = async (message) => {
  return await firestore.collection("messages").add(message);
};

export const upMessages = async (): Promise<void> => {
  const message: IMessage[] = [
    {
      message: "Salut Noa.",
      prevMessage: "own",
      convId: "84feeec3-15f9-4d28-81fb-f615d5181fad",
      id: uuid(),
      senderId: "80eba300-7634-4158-9c89-5a4ad87f89f8",
      createdAt: dayjs("2021-04-24").hour(12).minute(15).second(20).toDate()
    },
    {
      message: "Holà Elio, ça va ?",
      prevMessage: "own",
      convId: "81ff3d2f-902d-447e-8879-19a4e4c78dc9",
      id: uuid(),
      senderId: "4a32c8d5-6e23-48f9-b79d-759ab3d2a51f",
      createdAt: dayjs("2021-04-24").hour(12).minute(15).second(20).toDate()
    }
  ];

  await Promise.all(message.map(async (message) => await addMessage(message)));
};
