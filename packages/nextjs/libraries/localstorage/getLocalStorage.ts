export const getLocalStorage = (name: string) => {
  if (typeof window !== "undefined" && "localStorage" in window && window["localStorage"] !== null) {
    return localStorage.getItem(name);
  }
};
