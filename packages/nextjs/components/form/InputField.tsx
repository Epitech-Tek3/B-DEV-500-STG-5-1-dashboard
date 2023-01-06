import React from "react";
import { Box } from "rebass";
import { BaseInput } from "./BaseField";

export const DayField = ({ errors, ...props }) => (
  <BaseInput
    type="tel"
    name="day"
    placeholder="Jour"
    aria-label="Jour"
    maxLength={2}
    isValid={!errors.birthDate}
    untouched
    {...props}
  />
);

export const YearField = ({ errors, ...props }) => (
  <BaseInput
    type="tel"
    name="year"
    placeholder="Année"
    aria-label="Année"
    maxLength={4}
    isValid={!errors.birthDate}
    untouched
    {...props}
  />
);

export const DateBox = (props) => <Box px={[1, 2]} width={1 / 3} {...props} />;
