import { RefObject, useEffect, useRef } from "react";
import { off, on } from "../utils/eventListener";

const defaultEvents = ["mousedown", "touchstart"];

/**
 * React UI hook that triggers a callback when user clicks outside the target element.
 * @example
 * const Demo = () => {
    const ref = useRef(null);
    useClickAway(ref, () => {
      OUTSIDE CLICKED;
    });

    return (
      <div ref={ref} style={{
        width: 200,
        height: 200,
        background: 'red',
      }} />
    );
  };
  useClickAway(ref, onMouseEvent)
  useClickAway(ref, onMouseEvent, ['click'])
  useClickAway(ref, onMouseEvent, ['mousedown', 'touchstart'])
 */
const useClickAway = (
  ref: RefObject<HTMLElement | null>,
  onClickAway: (event: KeyboardEvent) => void,
  events: string[] = defaultEvents
) => {
  const savedCallback = useRef(onClickAway);
  useEffect(() => {
    savedCallback.current = onClickAway;
  }, [onClickAway]);
  useEffect(() => {
    const handler = (event) => {
      const { current: el } = ref;
      el && !el.contains(event.target) && savedCallback.current(event);
    };
    for (const eventName of events) {
      on(document, eventName, handler);
    }
    return () => {
      for (const eventName of events) {
        off(document, eventName, handler);
      }
    };
  }, [events, ref]);
};

export default useClickAway;
