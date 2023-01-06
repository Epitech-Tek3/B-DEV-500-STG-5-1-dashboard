import { storage } from "../firebase";
import { indexEn, indexFr } from "../locales/constants";

const process = async (d, lang) => {
  await storage.refFromURL(`gs://default-bucket/lang/${lang}/index.json`).put(Buffer.from(JSON.stringify(d)));
};

export const upLangs = async (): Promise<void> => {
  await process(indexEn, "en");
  await process(indexFr, "fr");
};
