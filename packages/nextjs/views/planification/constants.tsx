import React from "react";
import {
  AccountTreeRounded,
  LanguageRounded,
  InfoRounded,
  GestureRounded,
  VisibilityRounded,
  PlaylistAddCheckRounded
} from "@material-ui/icons/";

export const stepsInfo = (t) => {
  return [
    {
      title: t("specificationStepInfoDirectiveTitle"),
      description: "",
      Icon: <AccountTreeRounded style={{ width: 30, height: 30 }} />
    },
    {
      title: t("specificationStepInfoYourProjectTitle"),
      description: t("specificationStepInfoYourProjectDesc"),
      Icon: <AccountTreeRounded style={{ width: 30, height: 30 }} />
    },
    {
      title: t("specificationStepInfoHostingTitle"),
      description: t("specificationStepInfoHostingDesc"),
      Icon: <LanguageRounded style={{ width: 30, height: 30 }} />
    },
    {
      title: t("specificationStepInfoAbout1Title"),
      description: t("specificationStepInfoAbout1Desc"),
      Icon: <InfoRounded style={{ width: 30, height: 30 }} />
    },
    {
      title: t("specificationStepInfoAbout2Title"),
      description: t("specificationStepInfoAbout2Desc"),
      Icon: <InfoRounded style={{ width: 30, height: 30 }} />
    },
    // {
    //   title: "Les contenus",
    //   description:
    //     "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    //   Icon: <TocRounded style={{ width: 30, height: 30 }} />
    // },
    {
      title: t("specificationStepInfoDesignTitle"),
      description: t("specificationStepInfoDesignDesc"),
      Icon: <GestureRounded style={{ width: 30, height: 30 }} />
    },
    {
      title: t("specificationStepInfoVisibilityTitle"),
      description: t("specificationStepInfoVisibilityDesc"),
      Icon: <VisibilityRounded style={{ width: 30, height: 30 }} />
    },
    // {
    //   title: "Les contraintes",
    //   description:
    //     "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    //   Icon: <BlockRounded style={{ width: 30, height: 30 }} />
    // },
    {
      title: t("specificationStepInfoConclusionTitle"),
      description: t("specificationStepInfoConclusionDesc"),
      Icon: <PlaylistAddCheckRounded style={{ width: 30, height: 30 }} />
    }
  ];
};

export const siteTypePrices = {
  vitrine: 700,
  portfolio: 1500,
  ecommerce: 3300,
  blog: 1800,
  other: 0
};

export const dateCloseAllDay = [
  // Holiday in France for 2021-2022-2023
  // 2021
  new Date("2021/01/01"),
  new Date("2021/04/02"),
  new Date("2021/04/05"),
  new Date("2021/05/01"),
  new Date("2021/05/08"),
  new Date("2021/05/13"),
  new Date("2021/05/24"),
  new Date("2021/07/14"),
  new Date("2021/08/15"),
  new Date("2021/11/01"),
  new Date("2021/11/11"),
  new Date("2021/12/25"),
  new Date("2021/12/26"),
  new Date("2021/09/05"),
  // 2022
  new Date("2022/01/01"),
  new Date("2022/04/02"),
  new Date("2022/04/05"),
  new Date("2022/05/01"),
  new Date("2022/05/08"),
  new Date("2022/05/13"),
  new Date("2022/05/24"),
  new Date("2022/07/14"),
  new Date("2022/08/15"),
  new Date("2022/11/01"),
  new Date("2022/11/11"),
  new Date("2022/12/25"),
  new Date("2022/12/26"),
  // 2023
  new Date("2023/01/01"),
  new Date("2023/04/02"),
  new Date("2023/04/05"),
  new Date("2023/05/01"),
  new Date("2023/05/08"),
  new Date("2023/05/13"),
  new Date("2023/05/24"),
  new Date("2023/07/14"),
  new Date("2023/08/15"),
  new Date("2023/11/01"),
  new Date("2023/11/11"),
  new Date("2023/12/25"),
  new Date("2023/12/26"),
  new Date("2023/09/05")
];
