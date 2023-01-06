export const getOrderByTypeLocalStorage = (): "asc" | "desc" => {
  if (typeof window !== "undefined" && "localStorage" in window && window["localStorage"] !== null) {
    return (localStorage.getItem("driveOrderByType") as "asc" | "desc") ?? null;
  }
  return null;
};

export const setOrderByLocalStorage = (value: string) => {
  if (typeof window !== "undefined" && "localStorage" in window && window["localStorage"] !== null) {
    localStorage.setItem("driveOrderBy", value);
  }
};

export const getOrderByLocalStorage = () => {
  if (typeof window !== "undefined" && "localStorage" in window && window["localStorage"] !== null) {
    return localStorage.getItem("driveOrderBy") ?? null;
  }
  return null;
};

export const setOrderByTypeLocalStorage = (value: string) => {
  if (typeof window !== "undefined" && "localStorage" in window && window["localStorage"] !== null) {
    localStorage.setItem("driveOrderByType", value);
  }
};

export const getDrisplayModeLocalStorage = (): "grid" | "list" => {
  if (typeof window !== "undefined" && "localStorage" in window && window["localStorage"] !== null) {
    return (localStorage.getItem("driveDisplayMode") as "grid" | "list") ?? null;
  }
  return null;
};

export const setDrisplayModeLocalStorage = (value: string) => {
  if (typeof window !== "undefined" && "localStorage" in window && window["localStorage"] !== null) {
    localStorage.setItem("driveDisplayMode", value);
  }
};
