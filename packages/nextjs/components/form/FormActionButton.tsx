import { Button } from "@components/buttons/button";
import { CircularProgress } from "@material-ui/core";
import React from "react";
import { Flex, FlexProps } from "rebass";

export interface FormActionButtonProps extends Omit<FlexProps, "css"> {
  onClick?: () => void;
  disabled?: boolean;
  prevDisabled?: boolean;
  isLoading?: boolean;
  title?: string;
  noPrev?: boolean;
}

export const Previous = (props) => {
  return (
    <Flex
      width="100%"
      sx={{ "& > button": { bg: "white", color: "grey", fontWeight: "700", ":hover": { bg: "white" } } }}
      mr={3}
    >
      <Button bg="persistanteWhite" color="white" fullWidth {...props}>
        {props.children}
      </Button>
    </Flex>
  );
};

export const SubmitNext = (props) => {
  return (
    <Flex
      width="100%"
      sx={{ "& > button": { bg: "secondary", color: "white", fontWeight: "700", ":hover": { bg: "secondary" } } }}
      {...props}
    >
      <Button type={props.isLoading ? "button" : "submit"} bg="secondary" width="100%" fullWidth>
        {props.children}
      </Button>
    </Flex>
  );
};

export const FormActionButton: React.FC<FormActionButtonProps> = ({
  noPrev,
  title = "Suivant",
  onClick = () => null,
  disabled,
  prevDisabled,
  isLoading,
  ...props
}) => {
  return (
    <Flex
      mb={3}
      {...props}
      sx={{
        "@media screen and (max-width: 500px)": {
          flexDirection: "column-reverse",
          "& > div": { mx: 0 },
          "& > div:nth-of-type(1)": { mt: 3 }
        }
      }}
    >
      {!noPrev && (
        <Previous
          data-test-id="navigate-prev"
          onClick={() => !isLoading && onClick()}
          disabled={prevDisabled || isLoading}
        >
          {isLoading ? <CircularProgress style={{ width: 15, height: 15, color: "white" }} /> : "Previous"}
        </Previous>
      )}
      <SubmitNext
        data-test-id="navigate-next"
        disabled={disabled ?? isLoading}
        ml={noPrev ? 0 : 2}
        isLoading={isLoading}
      >
        {isLoading ? <CircularProgress style={{ width: 15, height: 15, color: "white" }} /> : title}
      </SubmitNext>
    </Flex>
  );
};
