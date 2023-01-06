import { useTheme } from "@hooks/useTheme";
import Link from "next/link";
import React from "react";
import { Box } from "rebass";
import { Brand } from "./Brand";
import { BrandWhite } from "./BrandWhite";
import { Logo } from "./Logo";
import { LogoWhite } from "./LogoWhite";

export const FullBrand = ({ size = 100 }) => {
  const { isDark } = useTheme();

  return (
    <Link href={`/`} passHref>
      <Box as="a" display="flex" aria-label="azinove" height="100%" sx={{ transition: "0.5s", cursor: "pointer" }}>
        {isDark ? (
          <>
            <LogoWhite width={size - 80} />
            <BrandWhite width={size} />
          </>
        ) : (
          <>
            <Logo width={size - 80} />
            <Brand width={size} />
          </>
        )}
      </Box>
    </Link>
  );
};
