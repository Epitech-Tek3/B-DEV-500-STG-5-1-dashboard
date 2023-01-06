import { Text } from "@components/text";
import { Label } from "@rebass/forms";
import React from "react";
import { Box } from "rebass";
import { FormInputI } from ".";
import { FormError } from "../FormError";

export interface FormInputLabelProps extends FormInputI {
  isError: boolean;
  dataAzinoveId?: string;
  errorRequired?: boolean;
  errorMaxLength?: boolean;
  errorMinLength?: boolean;
}

export const FormInputLabel: React.FC<FormInputLabelProps> = ({ ...props }) => {
  const errorCommonProps = { onError: (e) => props.onError && props.onError(e), ml: "3px" };

  return (
    <Label display="flex" flexWrap="wrap" htmlFor={props.id} mb={2} alignItems="center">
      <Text
        as="span"
        dataAzinoveId={props.dataAzinoveId}
        m="auto 0"
        color={props.isError ? "error" : "grey"}
        fontSize={[0, 1]}
        sx={{ whiteSpace: "nowrap", "&:first-letter": { textTransform: "capitalize" } }}
      >
        {props.label}
      </Text>
      {props.display != "none" && (
        <Box overflow="hidden" sx={{ textOverflow: "ellipsis" }}>
          <FormError
            state={!props.disabled && props.errorRequired}
            message="- Ce champ est obligatoire"
            {...errorCommonProps}
          />
          <FormError
            state={!props.disabled && props.errorMaxLength}
            message="- Ce champ est trop long"
            {...errorCommonProps}
          />
          <FormError
            state={!props.disabled && props.errorMinLength}
            message="- Ce champ est trop court"
            {...errorCommonProps}
          />
          <FormError
            state={!props.disabled && props?.triggerError?.state}
            message={" - " + props.triggerError?.message}
            {...errorCommonProps}
          />
        </Box>
      )}
    </Label>
  );
};
