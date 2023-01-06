import React from "react";
import { Text as TextRebass } from "rebass";
import { TextProps as TextRebassProps } from "@interfaces/rebass";

export interface TextProps extends TextRebassProps {
  dataAzinoveId: string;
}

/**
 *
 * @param dataAzinoveId Label corresponding to the label of JSON text variable.
 * @example
 * ```js
 * const text = React.useContext(TextContext);
 *
 * <Text as="span" dataAzinoveId="homeHeadTitle">{text.homeHeadTitle}</Text>
 * ```
 */
export const Text: React.FC<TextProps> = ({ dataAzinoveId, ...props }) => {
  const ref = React.useRef<Text & { setAttribute: (l: string, v: string) => void }>();

  React.useEffect(() => {
    if (ref.current) ref.current.setAttribute("data-azinove-id", dataAzinoveId);
  }, [ref]);

  // if (!text && !text[dataAzinoveId]) throw new Error("bad value 😢 " + dataAzinoveId);
  return (
    <TextRebass {...props} ref={ref}>
      {props.children}
    </TextRebass>
  );
};
