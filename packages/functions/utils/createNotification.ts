import { db, FirebaseDate, now } from "../db";

export type NotifType = "payment" | "welcome" | "information";

export interface NotifIProps {
  createdAt?: FirebaseDate;
  hasOpened?: boolean;
  link?: string;
  title: string;
  type: NotifType;
  userId: any;
}

/**
 * Create a notification for a specific user
 * @param {NotifType} props - Informations about the notifications
 */
export const createNotification = async (props: NotifIProps) => {
  const notifRef = db.collection("notification");

  // props.hasOpened = false;
  props.createdAt = now;
  await notifRef.add(props);
};
