import { useTransition } from "react-spring";

export const transition = (state: boolean) => {
  return useTransition(state, {
    from: {
      opacity: 0
    },
    enter: {
      opacity: 1
    },
    leave: {
      opacity: 0
    },
    config: {
      duration: 200
    }
  });
};
