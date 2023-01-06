import React from "react";
import { Head, Html, Main, NextScript } from "next/document";

const CustomDocument = () => (
  <Html>
    <Head>
      <meta content="IE=edge,chrome=1" httpEquiv="X-UA-Compatible" />
      <meta name="theme-color" content="#ffffff" />
      <link key="apple-touch-icon" rel="apple-touch-icon" sizes="180x180" href="/static/icons/apple-touch-icon.png" />
      <link key="favicon-32x32" rel="icon" type="image/png" sizes="32x32" href="/static/icons/favicon-32x32.png" />
      <link key="favicon-16x16" rel="icon" type="image/png" sizes="16x16" href="/static/icons/favicon-16x16.png" />
      <link key="mask-icon" rel="mask-icon" href="/static/icons/safari-pinned-tab.svg" color="#ffffff" />
      <link key="favicon-small" rel="shortcut icon" href="/static/icons/favicon.ico" />
      <meta key="ms-titleColor" name="msapplication-TileColor" content="#ffffff" />
      <meta key="ms-application-config" name="msapplication-config" content="/static/icons/browserconfig.xml" />
      <meta key="android theme color" name="theme-color" content="#ffffff" />
      <link rel="stylesheet" type="text/css" href="/static/css/nprogress.css" />
      <link rel="stylesheet" type="text/css" href="/static/css/svg/404.css" />
      <link rel="stylesheet" type="text/css" href="/static/css/ocean.css" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <script src="https://apis.google.com/js/api.js"></script>
    </Head>
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default CustomDocument;
