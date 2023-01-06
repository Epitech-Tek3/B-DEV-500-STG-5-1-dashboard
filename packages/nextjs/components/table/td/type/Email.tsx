import { Absolute } from "@components/common/Position";
import useClickAway from "@hooks/useClickAway";
import { Input } from "@rebass/forms";
import React, { useRef, useState } from "react";
import { Text } from "rebass";
import { TdProps } from "..";

export const EmailTd: React.FC<TdProps> = ({ ...props }) => {
  const [edit, setEdit] = useState(false);
  const ref = useRef();

  useClickAway(ref, () => setEdit(false));

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
          defaultValue={props.value}
          autoFocus
        />
      ) : (
        <Text
          as="a"
          href={`mailto:${props.value}`}
          ml={2}
          sx={{ textDecoration: "underline !important", textOverflow: "ellipsis" }}
          overflow="hidden"
        >
          {props.value ?? "-"}
        </Text>
      )}
    </Absolute>
  );
};
