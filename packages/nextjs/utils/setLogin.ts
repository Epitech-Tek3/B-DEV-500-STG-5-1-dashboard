export const setLogin = (state: "true" | "false") => {
  if (typeof window !== "undefined" && "localStorage" in window && window["localStorage"] !== null) {
    localStorage.setItem("login", state);
  }
};
