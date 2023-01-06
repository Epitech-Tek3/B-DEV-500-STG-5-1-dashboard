import { storage } from "@libraries/firebase";
import { Drive } from "@views/dashboard/drive";
import { GetStaticProps } from "next";
import { NextSeo } from "next-seo";
import React from "react";

const DrivePage = () => {
  return (
    <>
      <NextSeo canonical="https://dashboard-epitech-fdb56.web.app/" title="Dashboard - Dashboard" />
      <Drive />
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

export default DrivePage;
