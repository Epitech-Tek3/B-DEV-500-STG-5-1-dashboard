export const setLocalStorage = (name: string, value: string) => {
  if (typeof window !== "undefined" && "localStorage" in window && window["localStorage"] !== null) {
    localStorage.setItem(name, value);
  }
};
