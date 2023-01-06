// Unable to destructure process.env variables due to the webpack DefinePlugin
export const HOSTNAME = process.env.HOSTNAME;

export const IS_DEV = true;

export const IS_EDIT = false;

export const DRIVE = process.env.DRIVE_CLOUD_IMAGE;

// API cloud function
export const FUNCTION_STRIPE = IS_DEV ? process.env.FUNCTION_STRIPE_DEV : process.env.FUNCTION_STRIPE;
export const FUNCTION_CALENDAR = IS_DEV ? process.env.FUNCTION_CALENDAR_DEV : process.env.FUNCTION_CALENDAR;
export const FUNCTION_RESOURCE_MANAGER = IS_DEV
  ? process.env.FUNCTION_RESOURCE_MANAGER_DEV
  : process.env.FUNCTION_RESOURCE_MANAGER;
export const FUNCTION_USER = IS_DEV ? process.env.FUNCTION_USER_DEV : process.env.FUNCTION_USER;

export const firebaseConfig = {
  apiKey: process.env.API_KEY,
  appId: process.env.APP_ID,
  authDomain: process.env.AUTH_DOMAIN,
  measurementId: process.env.MEASUREMENT_ID,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  projectId: process.env.PROJECT_ID,
  storageBucket: IS_DEV ? process.env.STORAGE_BUCKET_DEV : process.env.STORAGE_BUCKET
};

export const ALGOLIA_KEY = process.env.ALGOLIA_SEACH_ONLY_API_KEY;

export const ALGOLIA_APP_ID = process.env.ALGOLIA_APP_ID;

export const RECAPTCHA_KEY = process.env.RECAPTCHA_KEY;

export const STRIPE_PUBLIC_KEY = IS_DEV ? process.env.STRIPE_PUPLIC_KEY_DEV : process.env.STRIPE_PUPLIC_KEY;

export const OVH_APP_ID = process.env.OVH_APP_ID;
export const OVH_SECRET = process.env.OVH_SECRET;
