const cors = require("cors");
const express = require("express");
import { IS_DEV } from "../utils/constants";
import * as functions from "firebase-functions";
import YoutubeRouter = require("../api/youtube");
import GmailRouter = require("../api/gmail");
import DriveRouter = require("../api/drive");
import PhotoRouter = require("../api/photo");

export const appYoutube = express();
export const appGmail = express();
export const appDrive = express();
export const appPhoto = express();

const corsOptions = {
  origin: "*",
  methods: IS_DEV && "GET,HEAD,PUT,PATCH,POST,DELETE",
  preflightContinue: false,
  optionsSuccessStatus: 204
};

appYoutube.use(cors(corsOptions));
appGmail.use(cors(corsOptions));
appDrive.use(cors(corsOptions));
appPhoto.use(cors(corsOptions));

export const youtube = functions.region("europe-west1").https.onRequest(appYoutube);
export const gmail = functions.region("europe-west1").https.onRequest(appGmail);
export const drive = functions.region("europe-west1").https.onRequest(appDrive);
export const photo = functions.region("europe-west1").https.onRequest(appPhoto);

appYoutube.use("/", YoutubeRouter);
appGmail.use("/", GmailRouter);
appDrive.use("/", DriveRouter);
appPhoto.use("/", PhotoRouter);
