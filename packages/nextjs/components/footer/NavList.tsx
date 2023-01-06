import { FullBrand } from "@components/appIcons/FullBrand";
import { ButtonTransparent } from "@components/buttons/ButtonTransparent";

import { useTranslation } from "react-i18next";
import React from "react";
import { Flex } from "rebass";

export const NavList = () => {
  const { t } = useTranslation();

  return (
    <Flex
      flexDirection="row"
      py={3}
      sx={{
        borderTop: "solid 1px lightGrey",
        "@media screen and (max-width: 540px)": {
          flexDirection: "column-reverse",
          "& > div: nth-of-type(1)": {
            mt: 3
          }
        }
      }}
    >
      <Flex my="auto">
        <FullBrand />
      </Flex>
      <Flex
        width="100%"
        ml={3}
        sx={{
          "@media screen and (max-width: 540px)": {
            ml: 0
          }
        }}
      >
        <Flex
          sx={{
            "& > *": { mr: "16px !important" },
            "@media screen and (max-width: 820px)": {
              "& > *": { fontSize: 1 }
            }
          }}
          flexWrap="wrap"
        >
          <ButtonTransparent dataAzinoveId="footerAbout" title={t("footerAbout")} noLink={true} href="/about" />
          <ButtonTransparent dataAzinoveId="footerProducts" title={t("footerProducts")} noLink={true} />
          <ButtonTransparent dataAzinoveId="footerPrivate" title={t("footerPrivate")} noLink={true} />
          <ButtonTransparent
            dataAzinoveId="footerConditions"
            title={t("footerConditions")}
            href="/policies/legal-mention"
          />
        </Flex>
      </Flex>
    </Flex>
  );
};
