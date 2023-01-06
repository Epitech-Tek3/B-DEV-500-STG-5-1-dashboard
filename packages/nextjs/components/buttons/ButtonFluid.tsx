import { useAuth } from "@hooks/useAuth";
import React from "react";
import { Box, Text } from "rebass";

export const ButtonFluid = () => {
  const { currentUser } = useAuth();

  return (
    <>
      <Box className="loader" width={120} height={120}>
        <div className="loader-bg">
          <Text as="p" fontSize={5} fontWeight="900" color="white" sx={{ lineHeight: "120px" }}>
            {currentUser.displayName[0]}
          </Text>
        </div>
        <div className="drops">
          <div className="drop1"></div>
          <div className="drop2"></div>
        </div>
      </Box>
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width={0}>
        <defs>
          <filter id="liquid">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
              result="liquid"
            />
          </filter>
        </defs>
      </svg>
    </>
  );
};
