import { Box, Flex, Text as TextRebass } from "rebass";
import { Facebook } from "../appIcons/socialNetwork/Facebook";
import { Features } from "./Features";
import { Linkedin } from "../appIcons/socialNetwork/Linkedin";
import { Text } from "@components/text";
import { useTheme } from "@hooks/useTheme";
import React from "react";
import { useTranslation } from "react-i18next";
import { NavList } from "./NavList";

export const Footer = () => {
  const { t } = useTranslation();
  const { isDark } = useTheme();

  return (
    <Box as="footer" px={4} pt={3} mt={5}>
      <Flex
        mb={4}
        sx={{
          "@media screen and (max-width: 600px)": {
            display: "block"
          }
        }}
      >
        <Flex>
          <Text as="p" dataAzinoveId="footerFollowUs" color="black" fontWeight="600" sx={{ whiteSpace: "nowrap" }}>
            {t("footerFollowUs")}
          </Text>
          <TextRebass as="p" color="black" ml={4} sx={{ "@media screen and (max-width: 350px)": { display: "none" } }}>
            |
          </TextRebass>
          <Flex width={200} justifyContent="space-evenly">
            <Linkedin width={20} fill={isDark ? "lightGrey" : "#333333"} />
            <Facebook width={20} fill={isDark ? "lightGrey" : "#333333"} />
          </Flex>
        </Flex>
        <Text
          as="p"
          dataAzinoveId="footerRoyalties"
          fontSize={1}
          color="black"
          m="auto"
          mr={0}
          sx={{
            whiteSpace: "nowrap",
            "@media screen and (max-width: 600px)": {
              display: "block"
            }
          }}
        >
          {t("footerRoyalties")}
        </Text>
      </Flex>
      <Features />
      <NavList />
    </Box>
  );
};
