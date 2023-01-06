import { Absolute, Relative } from "@components/common/Position";
import { FormCheckbox } from "@components/form/FormCheckbox";
import useClickAway from "@hooks/useClickAway";
import { CheckOutlined, ClearOutlined } from "@material-ui/icons";
import { Input } from "@rebass/forms";
import React, { useRef, useState } from "react";
import { BoxProps, Flex, Text } from "rebass";
import { AvatarTd } from "./type/Avatar";
import { EmailTd } from "./type/Email";
import { TextTd } from "./type/Text";

export interface TdProps extends Omit<BoxProps, "css"> {
  type?: any;
  value?: any;
  label?: string;
  editable?: boolean;
}

export const Td: React.FC<TdProps> = ({ ...props }) => {
  const [activeTd, setActiveTd] = useState(false);
  const [editeValue, setEditeValue] = useState(false);
  const ref = useRef();

  useClickAway(ref, () => {
    editeValue && setEditeValue(false);
    setActiveTd(false);
  });

  function getColor(value) {
    //value from 0 to 1
    const hue = ((1 - value) * 120).toString(10);
    return ["hsl(", hue, ",100%,50%)"].join("");
  }

  return (
    <Relative
      ref={ref}
      sx={{
        border: activeTd ? "solid 1px #1a73e8" : "solid 1px transparent",
        borderTop: !activeTd && "solid 1px lightGrey",
        textOverflow: "ellipsis",
        "& > *": { textOverflow: "ellipsis", overflow: "hidden", flexWrap: "nowrap", whiteSpace: "nowrap" }
      }}
      onClick={() => setActiveTd(!activeTd)}
      overflow="hidden"
      onDoubleClick={() => setEditeValue(true)}
      py={3}
      px={2}
      {...props}
    >
      {props.type == "email" ? (
        <EmailTd {...props} />
      ) : props.type == "avatar" ? (
        <AvatarTd {...props} />
      ) : props.type == "text" ? (
        <TextTd {...props} />
      ) : props.type == "checkbox" ? (
        <FormCheckbox id="" name="" ref={null} />
      ) : props.type == "progress" ? (
        <Relative width="100%" height="100%" sx={{ border: "solid 1px lightGrey" }}>
          <Absolute width={`${props.value}%`} height="100%" bg={getColor((100 - props.value) / 100)} />
          <Absolute width="100%">
            <Text as="span" display="flex" justifyContent="center">
              {props.value + "%"}
            </Text>
          </Absolute>
        </Relative>
      ) : props.type == "boolean" ? (
        <Flex justifyContent="center">
          {props.value == false ? (
            <ClearOutlined style={{ fill: "grey" }} />
          ) : (
            <CheckOutlined style={{ fill: "grey" }} />
          )}
        </Flex>
      ) : !editeValue ? (
        props.children
      ) : (
        <Input autoFocus sx={{ border: "none" }} />
      )}
    </Relative>
  );
};
