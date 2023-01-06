// @ts-check
require("dotenv").config();
const path = require("path");
const webpack = require("webpack");
const withPlugins = require("next-compose-plugins");
const offline = require("next-offline");
const optimizedImages = require("next-optimized-images");
const withCustomBabelConfig = require("next-plugin-custom-babel-config");
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true"
});

const nextConfig = {
  env: {
    API_KEY: process.env.API_KEY,
    APP_ID: process.env.APP_ID,
    AUTH_DOMAIN: process.env.AUTH_DOMAIN,
    DATABASE_URL: process.env.DATABASE_URL,
    MEASUREMENT_ID: process.env.MEASUREMENT_ID,
    MESSAGING_SENDER_ID: process.env.MESSAGING_SENDER_ID,
    PROJECT_ID: process.env.PROJECT_ID,
    STORAGE_BUCKET: process.env.STORAGE_BUCKET,
    STORAGE_BUCKET_DEV: process.env.STORAGE_BUCKET_DEV,
    DRIVE_CLOUD_IMAGE: process.env.DRIVE_CLOUD_IMAGE,
    HOSTNAME: process.env.HOSTNAME,
    FUNCTION_STRIPE: process.env.FUNCTION_STRIPE,
    FUNCTION_STRIPE_DEV: process.env.FUNCTION_STRIPE_DEV,
    FUNCTION_RESOURCE_MANAGER: process.env.FUNCTION_RESOURCE_MANAGER,
    FUNCTION_RESOURCE_MANAGER_DEV: process.env.FUNCTION_RESOURCE_MANAGER_DEV,
    STRIPE_PUPLIC_KEY: process.env.STRIPE_PUPLIC_KEY,
    STRIPE_PUPLIC_KEY_DEV: process.env.STRIPE_PUPLIC_KEY_DEV,
    FUNCTION_CALENDAR: process.env.FUNCTION_CALENDAR,
    FUNCTION_CALENDAR_DEV: process.env.FUNCTION_CALENDAR_DEV,
    SEGMENT_WRITE_KEY: process.env.SEGMENT_WRITE_KEY,
    ALGOLIA_SEACH_ONLY_API_KEY: process.env.ALGOLIA_SEACH_ONLY_API_KEY,
    ALGOLIA_APP_ID: process.env.ALGOLIA_APP_ID,
    RECAPTCHA_KEY: process.env.RECAPTCHA_KEY,
    OVH_APP_ID: process.env.OVH_APP_ID,
    OVH_SECRET: process.env.OVH_SECRET
  },
  trailingSlash: true,
  compress: true,
  plugins: [["styled-components", { ssr: true, displayName: true }]],
  webpack(cfg) {
    const originalEntry = cfg.entry;
    cfg.entry = async () => {
      const entries = await originalEntry();
      if (entries["main.js"] && !entries["main.js"].includes("./polyfills")) {
        entries["main.js"].unshift("./polyfills");
      }
      return entries;
    };
    cfg.plugins = cfg.plugins || [];
    return cfg;
  },
  swcLoader: true
  // swcMinify: true
};

module.exports = withPlugins(
  [
    withBundleAnalyzer,
    {
      key: "X-Frame-Options",
      value: "SAMEORIGIN"
    },
    {
      key: "X-XSS-Protection",
      value: "1; mode=block"
    },
    {
      key: "Access-Control-Allow-Origin",
      value: "*"
    },
    {
      key: "Referrer-Policy",
      value: "SAMEORIGIN"
    },
    [
      offline,
      {
        maximumFileSizeToCacheInBytes: 4 * 1024 * 1024, // 4Mb
        transformManifest: (manifest) => ["/"].concat(manifest), // add the homepage to the cache
        generateInDevMode: false,
        workboxOpts: {
          runtimeCaching: [
            {
              urlPattern: /\.(?:png|gif|jpg|jpeg|svg|webp)$/,
              handler: "CacheFirst",
              options: {
                cacheName: "images",
                expiration: {
                  maxEntries: 60,
                  maxAgeSeconds: 30 * 24 * 60 * 60,
                  purgeOnQuotaError: true
                }
              }
            },
            {
              urlPattern: /^https:\/\/(use|p)\.typekit\.net\/.+$/,
              handler: "StaleWhileRevalidate",
              options: {
                cacheName: "typekit-cache",
                cacheableResponse: {
                  statuses: [0, 200]
                }
              }
            },
            {
              urlPattern: /^https?.*/,
              handler: "NetworkFirst",
              options: {
                cacheName: "offlineCache",
                expiration: {
                  maxEntries: 200
                },
                cacheableResponse: {
                  statuses: [0, 200]
                }
              }
            }
          ]
        }
      }
    ],
    [
      optimizedImages,
      {
        handleImages: ["gif", "jpeg", "png", "svg", "webp"]
      }
    ]
    // [withCustomBabelConfig, { babelConfigFile: path.resolve("../../babel.config.js") }]
  ],
  nextConfig
);
