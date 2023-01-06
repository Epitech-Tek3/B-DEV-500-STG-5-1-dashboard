import React, { useState } from "react";
import { Flex, Box, FlexProps } from "rebass";
import { Relative } from "@components/common/Position";
const PopOverDescription = dynamic<PopoverDescriptionProps>(() =>
  import("@components/popOver/PopOverDescription").then((mod) => mod.PopOverDescription)
);
import dynamic from "next/dynamic";
import { PopoverDescriptionProps } from "@components/popOver/PopOverDescription";

export interface FormStepperProps extends Omit<FlexProps, "css"> {
  activeStep: number;
  stepsTitle: string[];
  onClickStep: (step: number) => void;
}

export const FormStepper: React.FC<FormStepperProps> = ({ onClickStep, stepsTitle, activeStep, ...props }) => {
  const [showHover, setShowHover] = useState({ active: false, id: 0 });
  const stepNumber = stepsTitle.length;

  return (
    <Flex width="100%" {...props}>
      {[...Array(stepsTitle.length)].map((_, i) => (
        <Box
          key={`step-` + i}
          width="100%"
          p={0}
          height="15px"
          ml={i != 0 ? 2 : 0}
          my="auto"
          id={`step-${i}`}
          sx={{ cursor: "pointer" }}
          onClick={() => activeStep > i && onClickStep(i)}
        >
          <Relative
            width="100%"
            height="100%"
            bg="lightGrey"
            id={`stepbar-${i}-item`}
            onMouseEnter={() => setShowHover({ active: true, id: i })}
            onMouseLeave={() => setShowHover({ active: false, id: 0 })}
            overflow="hidden"
            sx={{
              borderTopLeftRadius: i == 0 ? 20 : 0,
              borderBottomLeftRadius: i == 0 ? 20 : 0,
              borderTopRightRadius: i == stepNumber - 1 ? 20 : 0,
              borderBottomRightRadius: i == stepNumber - 1 ? 20 : 0
            }}
          >
            <Box
              width={i < activeStep ? 1 : 0}
              height="100%"
              bg="primary"
              sx={{
                position: "absolute",
                transition: ".5s"
              }}
            />
          </Relative>
          <PopOverDescription
            description={stepsTitle[i]}
            open={showHover.id == i && showHover.active}
            anchorEl={document.getElementById(`step-${i}`)}
            anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
          />
        </Box>
      ))}
    </Flex>
  );
};
