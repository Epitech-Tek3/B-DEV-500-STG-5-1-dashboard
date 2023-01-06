import { Absolute } from "@components/common/Position";
import useClickAway from "@hooks/useClickAway";
import { useKeyPress } from "@hooks/useKeyPress";
import { Input } from "@rebass/forms";
import React, { useRef, useState } from "react";
import { Text } from "rebass";
import { TdProps } from "..";

export const TextTd: React.FC<TdProps> = ({ ...props }) => {
  const [edit, setEdit] = useState(false);
  const [value, setValue] = useState(props.value);
  const ref = useRef();

  useClickAway(ref, () => setEdit(false));
  useKeyPress({
    key: "Enter",
    onKeyDown: () => {
      setEdit(false);
    },
    onKeyUp: () => null
  });
  useKeyPress({
    key: "Escape",
    onKeyDown: () => {
      setEdit(false);
    },
    onKeyUp: () => null
  });

  return (
    <Absolute
      ref={ref}
      width="100%"
      height="100%"
      top={0}
      left={0}
      display="flex"
      alignItems="center"
      onDoubleClick={() => props.editable && setEdit(!edit)}
    >
      {edit ? (
        <Input
          type="text"
          height="100%"
          sx={{
            borderColor: "#1a73e8",
            borderRadius: 0
          }}
          value={value}
          onChange={(v) => setValue(v.currentTarget.value)}
          autoFocus
        />
      ) : (
        <Text as="span" overflow="hidden" ml={2} sx={{ textOverflow: "ellipsis" }}>
          {value ?? "-"}
        </Text>
      )}
    </Absolute>
  );
};
