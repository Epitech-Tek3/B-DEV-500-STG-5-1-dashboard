import { useTranslation } from "react-i18next";
import Link from "next/link";
import React from "react";
import { Box, Text } from "rebass";

interface IProps {
  title?: string;
  desc?: string;
  label?: string;
  link?: string;
}

export const Card = ({ title, desc, label, link }: IProps) => {
  const { t } = useTranslation();

  return (
    <Box m="auto" mx={2} flex="1" height="100%" minWidth={["fit-content", "200px"]}>
      {label && (
        <Text
          as="span"
          bg="blue"
          color="white"
          px={3}
          display="flex"
          m="auto"
          width="fit-content"
          mb={3}
          sx={{ borderRadius: 5, cursor: "default" }}
        >
          {label}
        </Text>
      )}
      <Box
        p={3}
        height="100%"
        width="100%"
        sx={{ boxShadow: "rgba(0, 0, 0, 0.12) 0 1px 6px, rgba(0, 0, 0, 0.12) 0 1px 4px", borderRadius: 8 }}
      >
        {title && (
          <Text as="span" fontSize={4} fontWeight="700" width="55%">
            {title}
          </Text>
        )}
        {desc && (
          <Text as="p" fontSize={2} mt={3}>
            {desc}
          </Text>
        )}
        {link && (
          <Link href="/about">
            <Text as="p" color="blue" fontSize={2} fontWeight="700" mt={2} sx={{ cursor: "pointer" }}>
              {t("aboutSeeMore")} ➜
            </Text>
          </Link>
        )}
      </Box>
    </Box>
  );
};
