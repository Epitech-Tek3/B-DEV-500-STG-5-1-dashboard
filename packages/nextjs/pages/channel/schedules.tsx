import { CalendarAppointment } from "@components/calendar";
import { storage } from "@libraries/firebase";
import { GetStaticProps } from "next";
import { NextSeo } from "next-seo";
import React from "react";

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

const SchedulesPage = () => {
  return (
    <>
      <NextSeo canonical="https://dashboard-epitech-fdb56.web.app/" title="Schedules - Dashboard" />
      <CalendarAppointment dateCloseAllDay={dateCloseAllDay} />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const locale = "fr";
  const text = await fetch(
    await storage.refFromURL(`gs://dashboard-epitech-fdb56.appspot.com/lang/${locale}/index.json`).getDownloadURL()
  );

  return {
    props: { text: await text.json(), locale, projectMenu: true, home: true, login: true }
  };
};

export default SchedulesPage;
