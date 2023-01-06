import { firestore } from "@libraries/firebase";
import { NotifInfoType } from "../interfaces/notifications";
import firebase from "firebase/app";

interface Props {
  title: string;
  type: NotifInfoType;
  userId: any;
  link?: string;
  hasOpened: boolean;
  createdAt?: firebase.firestore.Timestamp;
}

export const useCreateNotification = async (props: Props) => {
  const notifRef = firestore.collection("notification");

  props.createdAt = firebase.firestore.Timestamp.now();
  await notifRef.doc().set(props);
};
