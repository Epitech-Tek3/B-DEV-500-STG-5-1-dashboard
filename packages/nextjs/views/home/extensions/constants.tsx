import React from "react";
import { Youtube } from "@components/appIcons/Youtube";
import { YoutubeStudio } from "@components/appIcons/logo/YoutubeStudio";
import { Calendar } from "@components/appIcons/logo/Calendar";
import { GooglePhoto } from "@components/appIcons/logo/GooglePhoto";
import { Gmail } from "@components/appIcons/logo/Gmail";
import { Drive } from "@components/appIcons/logo/Drive";

export type Module = {
  onClick: () => void;
  id: string;
  title: string;
  desc: string;
  Icon: JSX.Element;
};

export const modules = (text, onClick): Module[] => [
  {
    onClick,
    id: "youtubeChannel",
    title: "Youtube Channel",
    desc: text.youtubeChannel,
    Icon: <Youtube fill="red" width="40px" height="40px" />
  },
  {
    onClick,
    id: "youtubeStudio",
    title: "Youtube Studio",
    desc: text.youtubeStudio,
    Icon: <YoutubeStudio width="40px" height="40px" />
  },
  {
    onClick,
    id: "calendar",
    title: "Calendar",
    desc: text.calendar,
    Icon: <Calendar width="40px" height="40px" />
  },
  {
    onClick,
    id: "googlePhoto",
    title: "Google Photo Library",
    desc: text.googlePhoto,
    Icon: <GooglePhoto width="40px" height="40px" />
  },
  {
    onClick,
    id: "gmail",
    title: "Gmail",
    desc: text.gmail,
    Icon: <Gmail width="40px" height="40px" />
  },
  {
    onClick,
    id: "drive",
    title: "Google Drive",
    desc: text.drive,
    Icon: <Drive width="40px" height="40px" />
  }
];
