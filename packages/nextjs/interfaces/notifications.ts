export type NotifInfoType = "payment" | "welcome" | "information" | "message";

export type NotifType = {
  title: string;
  hasOpened?: Boolean;
  link?: string;
  createdAt?: any;
  id: any;
  type: NotifInfoType;
};
