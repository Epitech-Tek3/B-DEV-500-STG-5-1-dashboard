import React from "react";
import { Box, Flex } from "rebass";

export const LeftIntroBg = (props: React.SVGAttributes<SVGElement>) => (
  <Flex
    sx={{
      "& > svg": {
        "@media screen and (max-width: 760px)": {
          width: "130px"
        }
      }
    }}
  >
    <svg
      className="left-intro-bg"
      version="1.0"
      width="192"
      height="546"
      viewBox="0 0 1920 5460"
      preserveAspectRatio="xMidYMid meet"
      {...props}
    >
      <g fill="rgb(238,39,58)">
        <path d="M0 2823 l0 -2513 23 -5 c12 -2 355 -45 762 -95 l739 -91 52 0 51 0 35 14 c19 8 51 29 71 46 l36 32 21 45 22 44 0 58 -1 57 -866 2400 c-476 1320 -870 2411 -876 2425 -5 14 -23 41 -39 60 l-29 35 -1 -2512z"></path>
      </g>
      <Box as="g" id="ldwwVHYGBTO5FrRyuRpszv" sx={{ fill: "white" }}>
        <path d="M1 2290 l-1 -1346 350 -39 350 -39 56 18 56 18 43 42 42 43 18 52 17 53 -5 47 -4 46 -453 1205 c-248 663 -456 1214 -460 1225 l-9 20 0 -1345z"></path>
      </Box>
    </svg>
  </Flex>
);
