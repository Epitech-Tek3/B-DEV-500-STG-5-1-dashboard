export const arrayToJson = (array: any[]) => {
  const translations = {};

  Object.keys(array.map((j) => Object.keys(j).map((r) => (translations[r] = j[r]))));
  return translations;
};
