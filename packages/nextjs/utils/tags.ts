import { Tag } from "@components/form/InputTags/Tags";

export const stringToTags = (value: string) => {
  if (!value) return [];
  return value?.split(",").map((s): Tag => ({ text: s, id: Math.floor(Math.random() * 1000).toString() }));
};
