import { Flex, Text } from "rebass";
import { GetStaticProps, NextPage } from "next";
import { LottieAnimation } from "@components/lottie";
import { NextSeo } from "next-seo";
import notFound from "@components/appIcons/animations/notFound.json";
import React from "react";

const Page404: NextPage = () => {
  return (
    <>
      <NextSeo canonical="https://azinove.com/404" title="Erreur 404" description="Erreur 404" noindex nofollow />
      <Flex>
        <Flex flexDirection="column" m="auto" width="100%" height="calc(100vh - 64px)" justifyContent="center">
          <Text as="h1" textAlign="center">
            <Text as="p" color="primary" fontWeight="700">
              Oops!
            </Text>
            Aucune page n&apos;a été trouvé
          </Text>
          <Flex
            id="lottie-not-found"
            sx={{
              "@media screen and (max-width: 710px)": {
                "& > div": {
                  height: "350px",
                  width: "500px"
                }
              }
            }}
          >
            <LottieAnimation lotti={notFound} height={550} width={700} />
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: { locale: "fr", projectMenu: true, footer: false }
  };
};

export default Page404;
