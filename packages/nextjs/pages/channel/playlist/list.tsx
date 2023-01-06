import { storage } from "@libraries/firebase";
import { PlaylistList } from "@views/dashboard/playlists/list";
import { GetStaticProps } from "next";
import { NextSeo } from "next-seo";
import router from "next/router";
import React from "react";

const PlaylistsVideoPage = () => {
  return (
    <>
      <NextSeo canonical="https://dashboard-epitech-fdb56.web.app/" title="Playlists liste - Dashboard" />
      {router.query.query && <PlaylistList playlistId={router.query.query} />}
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

export default PlaylistsVideoPage;
