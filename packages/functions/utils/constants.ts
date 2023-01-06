// const path = require("path");

// Copy the .env.example in the root into a .env file in this folder
require("dotenv").config();

if (process.env.error) {
  throw new Error(`Unable to load the .env file from /. Please copy .env.example to lib/`);
}

export const HOSTNAME = process.env.HOSTNAME;

export const IS_DEV = HOSTNAME == "http://localhost:3000";

export const FUNCTION_STRIPE = IS_DEV ? process.env.FUNCTION_STRIPE_DEV : process.env.FUNCTION_STRIPE;
export const FUNCTION_RESOURCE_MANAGER = IS_DEV
  ? process.env.FUNCTION_RESOURCE_MANAGER_DEV
  : process.env.FUNCTION_RESOURCE_MANAGER;

export const STRIPE_SECRET_KEY = IS_DEV ? process.env.STRIPE_SECRET_KEY_DEV : process.env.STRIPE_SECRET_KEY;

export const ORGANIZATION_ID = process.env.ORGANIZATION_ID;
export const ORGANIZATION_TYPE = process.env.ORGANIZATION_TYPE;

export const firebaseConfig = {
  apiKey: process.env.API_KEY!,
  appId: process.env.APP_ID!,
  authDomain: process.env.AUTH_DOMAIN!,
  databaseUrl: process.env.DATABASE_URL!,
  measurementId: process.env.MEASUREMENT_ID!,
  messagingSenderId: process.env.MESSAGING_SENDER_ID!,
  projectId: process.env.PROJECT_ID!,
  storageBucket: process.env.STORAGE_BUCKET!
};

export const ALGOLIA_KEY = process.env.ALGOLIA_SEACH_ONLY_API_KEY;

export const ALGOLIA_APP_ID = process.env.ALGOLIA_APP_ID;

export const OVH_APP_ID = process.env.OVH_APP_ID;
export const OVH_SECRET = process.env.OVH_SECRET;
