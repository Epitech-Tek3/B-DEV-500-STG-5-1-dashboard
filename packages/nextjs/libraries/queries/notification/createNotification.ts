import { NotifInfoType } from "@interfaces/notifications";
import { database, FirebaseDate } from "../../firebase";

export interface NotifIProps {
  createdAt?: FirebaseDate;
  hasOpened?: boolean;
  link?: string;
  title: string;
  type: NotifInfoType;
  userId: any;
}

/**
 * Create a notification for a specific user
 * @param {NotifType} props - Informations about the notifications
 */
export const addNewNotification = async (notification: NotifIProps) => {
  return await database.notification.add({
    ...notification,
    hasOpened: false,
    createdAt: database.getCurrentTimestamp()
  });
};
