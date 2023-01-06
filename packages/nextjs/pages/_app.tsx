import React from "react";
import NProgress from "nprogress";
import { DefaultSeo } from "next-seo";
import { Router } from "next/router";
import { ThemeFunc } from "../containers/theme";
import { AuthProvider } from "@contexts/AuthContext";
import { ThemeProvider } from "contexts/ThemeContext";
import { DefaultCon, DefaultConProps } from "@containers/default";
import { GetStaticPropsContext, PreviewData } from "next";
import { NextParsedUrlQuery } from "next/dist/server/request-meta";
import { SWRConfig } from "swr";
import { LanguageContext } from "@contexts/LanguageContext";

export type AppProps = GetStaticPropsContext<NextParsedUrlQuery, PreviewData> &
  DefaultConProps & {
    pageLocalization: any;
    namespaces: string[];
    otherNamespace: string;
    initialApolloState: any;
  } & { text: any };

interface MyAppProps {
  Component: any;
  pageProps: AppProps;
  err?: any;
}

NProgress.configure({ showSpinner: false });
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

const MyApp = ({ Component, pageProps, err }: MyAppProps) => {
  React.useEffect(() => {
    document.documentElement.lang = pageProps.locale;
  }, [pageProps.locale]);

  return (
    <>
      <DefaultSeo
        canonical="https://dashboard.com/"
        title="Administrer votre chaine YouTube."
        description="Administrer votre chaine YouTube."
        openGraph={{
          type: "website",
          locale: pageProps.locale,
          url: "https://dashboard.com",
          title: "Administrer votre chaine YouTube.",
          description: "Administrer votre chaine YouTube.",
          defaultImageWidth: 1200,
          defaultImageHeight: 630,
          images: [
            {
              url: "https://dashboard.com/static/images/cover-1200x630.webp",
              width: 1200,
              height: 630,
              alt: "Dashboard - Administrer votre chaine YouTube."
            }
          ],
          site_name: "Dashboard"
        }}
      />
      <AuthProvider>
        <ThemeProvider>
          <LanguageContext.Provider value={{ text: pageProps.text }}>
            <ThemeFunc>
              <SWRConfig value={{ provider: () => new Map() }}>
                <DefaultCon {...pageProps}>
                  <Component {...pageProps} err={err} />
                </DefaultCon>
              </SWRConfig>
            </ThemeFunc>
          </LanguageContext.Provider>
        </ThemeProvider>
      </AuthProvider>
    </>
  );
};

export default MyApp;
