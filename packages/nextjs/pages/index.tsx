import { NextSeo } from "next-seo";
import React from "react";
import { Extensions } from "@views/home/extensions";
import { Home } from "@views/home/logout";
import { useAuth } from "@hooks/useAuth";
import { GetStaticProps } from "next";
import router from "next/router";
import { storage } from "@libraries/firebase";
import { useTranslation } from "@hooks/useTranslation";

const IndexPage = () => {
  const { currentUser } = useAuth();
  const { text } = useTranslation();

  React.useEffect(() => {
    if (currentUser && currentUser.isComplete) router.push("/channel/dashboard");
  }, [currentUser]);

  console.log(text);
  return (
    <>
      <NextSeo canonical="https://dashboard-epitech-fdb56.web.app/" title="Home - Dashboard" />
      {currentUser ? currentUser.isComplete ? <></> : <Extensions native /> : <Home />}
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const locale = "fr";
  const text = await fetch(
    await storage.refFromURL(`gs://dashboard-epitech-fdb56.appspot.com/lang/${locale}/index.json`).getDownloadURL()
  );

  return {
    props: { text: await text.json(), locale, menu: true, home: true }
  };
};

export default IndexPage;
