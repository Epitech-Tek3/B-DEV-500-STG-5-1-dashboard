import { FormControlLabel } from "@material-ui/core";
import { FormInput, FormInputI } from "./input";
import { FormInputTag } from "./InputTags";
import { Box, FlexProps, Text } from "rebass";
import React, { useState } from "react";
import { Tag } from "./InputTags/Tags";
import { Checkbox } from "@rebass/forms";
import { FormInputLabel } from "./input/Label";

export type CheckboxDataT = {
  name: string;
  id: string;
  label: string;
  checked: boolean;
  onChecked?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  defaultValue?: any;
  ref?: React.Ref<any>;
};

type OtherT = FormInputI & {
  errorMessage?: string;
  info?: boolean;
  infoMessage?: string;
  minimum?: number;
};

interface IProps extends Omit<FlexProps, "data" | "css"> {
  data: CheckboxDataT[];
  inputType?: "inputTag" | "inputText";
  triggerError?: { state: boolean; message: string };
  inline?: boolean;
  other?: OtherT;
}

export const FormCheckboxList: React.FC<IProps & { ref }> = React.forwardRef(({ ...props }: IProps, ref) => {
  const [tags, setTags] = useState<Tag[]>(
    props.other?.defaultValue
      ? (props.other?.defaultValue as string)
          ?.split(",")
          .map((s): Tag => ({ text: s, id: Math.floor(Math.random() * 1000).toString() }))
      : []
  );

  return (
    <Box {...(props as Omit<IProps, "data">)}>
      <FormInputLabel
        label={props.label}
        id={props.id}
        isError={props.triggerError?.state}
        name={props.name}
        triggerError={props.triggerError}
      />
      {props.data.map((data, i) => (
        <FormControlLabel
          key={data.id + i}
          style={{ userSelect: "none", marginLeft: 0 }}
          control={
            <Checkbox
              checked={data.checked}
              ref={ref}
              name={data.name}
              id={data.id}
              onChange={(e) => data?.onChecked && data?.onChecked(e)}
              data-test-id={data.id}
            />
          }
          label={data.label}
        />
      ))}
      {props.other && (
        <>
          {props.inputType == "inputTag" ? (
            <FormInputTag
              tags={tags}
              ref={ref}
              onAddition={(tag) => setTags([...tags, tag])}
              onRemove={(i) => setTags(tags.filter((_, index) => i !== index))}
              onError={(e) => props.other.onError && props.other.onError(e)}
              onChange={() => {
                props.other.onChange && props.other.onChange(null);
              }}
              {...props.other}
            />
          ) : props.inputType == "inputText" ? (
            <FormInput
              ref={ref}
              reset
              mt={2}
              onError={(e) => props.other.onError && props.other.onError(e)}
              onChange={() => props.other.onChange && props.other.onChange(null)}
              {...props.other}
            />
          ) : null}
          {props.other.info && (
            <Text as="span" color="grey" ml={2}>
              {props.other.infoMessage ?? "Veuillez à séparer vos valeurs par une virgule"}
            </Text>
          )}
        </>
      )}
    </Box>
  );
});

FormCheckboxList.displayName = "FormCheckboxList";
