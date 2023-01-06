import { Checkbox, FormControlLabel } from "@material-ui/core";
import React from "react";
import { Box, Text } from "rebass";
import { Input } from "@rebass/forms";

interface Props {
  data: {
    name?: string;
    id: string;
    label: string;
    buttonState: boolean;
  }[];
  error: string;
  setError: React.Dispatch<any>;
  state: any;
  register: any;
  onChange: (any) => void;
  buttonOtherState?: boolean;
  otherName?: string;
  info?: boolean;
  other?: boolean;
}

export const Breadcrumb = ({
  register,
  onChange,
  error,
  setError,
  state,
  data,
  buttonOtherState,
  otherName,
  info,
  other = false
}: Props) => {
  return (
    <>
      {data.map((data) => (
        <FormControlLabel
          key={data.id}
          control={
            <Checkbox
              checked={data.buttonState}
              defaultValue={state.labelHeader}
              ref={register}
              name={data.name}
              id={data.id}
              onChange={onChange}
              data-test-id={data.id}
            />
          }
          label={data.label}
        />
      ))}
      {error && (
        <Text as="p" color="red" mb={2} ml={2}>
          {error}
        </Text>
      )}
      {other && (
        <Box my={4}>
          <Input
            type="text"
            disabled={buttonOtherState ? false : true}
            defaultValue={state.labelHeaderOther}
            name={otherName}
            placeholder="Vos valeurs..."
            onChange={() => setError(undefined)}
            ref={register}
            ml={2}
            mb={2}
            sx={{
              borderColor: !buttonOtherState ? "lightGrey" : !error ? "blue" : "error",
              ":focus": {
                borderColor: !error ? "blue" : "error"
              },
              ":hover": {
                cursor: !buttonOtherState ? "not-allowed" : "unset"
              }
            }}
          />
          {info && (
            <Text as="p" color="grey" ml={2}>
              Veillez à séparer vos valeurs par une virgule
            </Text>
          )}
        </Box>
      )}
    </>
  );
};
