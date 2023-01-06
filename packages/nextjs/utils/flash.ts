export const flashEncode = (message: object) => {
  return encodeURIComponent(JSON.stringify(message));
};

export const flashDecode = (encoded: string) => {
  return JSON.parse(decodeURIComponent(encoded));
};
