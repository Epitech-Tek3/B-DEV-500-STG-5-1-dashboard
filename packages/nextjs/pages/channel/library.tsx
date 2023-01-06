import { storage } from "@libraries/firebase";
import { Photo } from "@views/dashboard/photo";
import { GetStaticProps } from "next";
import { NextSeo } from "next-seo";
import React from "react";

const LibraryPage = () => {
  return (
    <>
      <NextSeo canonical="https://dashboard-epitech-fdb56.web.app/" title="Dashboard - Dashboard" />
      <Photo />
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

export default LibraryPage;
