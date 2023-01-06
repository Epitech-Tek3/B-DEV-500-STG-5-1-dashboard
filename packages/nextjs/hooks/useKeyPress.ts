import { useState, useEffect } from "react";

interface UseKeyT {
  key: string;
  onKeyUp: (isPress: boolean) => void;
  onKeyDown: (isPress: boolean) => void;
}

export const useKeyPress = ({ key, onKeyUp, onKeyDown }: UseKeyT) => {
  const [isPressed, setPressed] = useState(false);

  useEffect(() => {
    const handleDown = (event) => {
      const { key: pressedKey } = event;
      if (key === pressedKey) {
        if (onKeyDown) onKeyDown(true);

        setPressed(true);
      }
    };

    const handleUp = (event) => {
      const { key: releasedKey } = event;
      if (key === releasedKey) {
        if (onKeyUp) onKeyUp(false);

        setPressed(false);
      }
    };

    window.addEventListener("keyup", handleUp);
    window.addEventListener("keydown", handleDown);

    return () => {
      window.removeEventListener("keyup", handleUp);
      window.removeEventListener("keydown", handleDown);
    };
  }, []);

  return isPressed;
};
