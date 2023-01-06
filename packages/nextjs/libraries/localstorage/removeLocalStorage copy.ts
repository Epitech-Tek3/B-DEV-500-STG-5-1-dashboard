export const removeLocalStorage = (name: string) => {
  if (typeof window !== "undefined" && "localStorage" in window && window["localStorage"] !== null) {
    return localStorage.removeItem(name);
  }
};
