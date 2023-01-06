import { firebaseApp, FirebaseDate, firestore } from "../firebase";
import { uuid } from "uuidv4";
import dayjs from "dayjs";

type NotifInfoType = "payment" | "welcome" | "information" | "message";

interface INotification {
  title: string;
  hasOpened: Boolean;
  link?: string;
  createdAt: Date | FirebaseDate;
  id: string;
  userId: string;
  type: NotifInfoType;
}

const addNotification = async (notification) => {
  return await firestore.collection("notifications").add(notification);
};

export const upNotifications = async (): Promise<void> => {
  const notification: INotification[] = [
    // {
    //   title: "Nouveau message de Patrick",
    //   hasOpened: false,
    //   link: `http://localhost:3000/message`,
    //   createdAt: dayjs("2021-03-21").toDate(),
    //   userId: "80eba300-7634-4158-9c89-5a4ad87f89f8",
    //   id: uuid(),
    //   type: "message"
    // }
  ];

  await Promise.all(notification.map(async (notification) => await addNotification(notification)));
};
