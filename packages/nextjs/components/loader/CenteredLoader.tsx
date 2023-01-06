import { Container } from "@components/containers/Container";
import { CircularProgress } from "@material-ui/core";
import React from "react";

export const CenteredLoader = ({ ...props }) => {
  return (
    <Container my="auto" alignItems="center" {...props}>
      <CircularProgress style={{ color: "lightGrey" }} />
    </Container>
  );
};
