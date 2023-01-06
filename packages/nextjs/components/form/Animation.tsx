import { useTransition } from "react-spring";

export const errorTransition = (state: boolean) =>
  useTransition(state, {
    from: {
      opacity: 0,
      width: 0
    },
    enter: {
      opacity: 1,
      width: 500
    },
    leave: {
      opacity: 0,
      width: 0
    },
    trail: 0
  });
