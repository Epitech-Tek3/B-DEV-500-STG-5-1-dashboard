import { useEffect, useState } from "react";

export const useClickPosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: null, y: null });

  const updateMousePosition = (ev) => {
    ev.preventDefault();
    setMousePosition({ x: ev.clientX, y: ev.clientY });
  };

  useEffect(() => {
    document.addEventListener("contextmenu", updateMousePosition);

    return () => document.removeEventListener("contextmenu", updateMousePosition);
  }, []);

  return mousePosition;
};
