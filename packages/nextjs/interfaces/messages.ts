import { FirebaseDate } from "../libraries/firebase";

export type MessageT = {
  id: string;
  convId: string;
  senderId: string;
  prevMessage: "own" | "other";
  message: string;
  createdAt: FirebaseDate;
};

export type ConversationT = {
  id: string;
  createdAt: FirebaseDate;
  updatedAt: FirebaseDate;
  membersId: string[];
  membersNames: string[];
  membersPictures: string[];
  lastMessage: string;
  hasSeenLastMessage: ("true" | "false")[];
};
