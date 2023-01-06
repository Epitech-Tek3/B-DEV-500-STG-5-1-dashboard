import { AmericanExpress } from "@components/appIcons/logo/bank/AmericanExpress";
import { Discover } from "@components/appIcons/logo/bank/Discover";
import { Mastercard } from "@components/appIcons/logo/bank/Mastercard";
import { Visa } from "@components/appIcons/logo/bank/Visa";
import { Button } from "@components/buttons/button";
import { Divider } from "@components/common";
import { BoxShadowed } from "@components/containers/BoxShadowed";

import { useTranslation } from "react-i18next";
import React from "react";
import { Box, Flex, Text } from "rebass";

export interface CreditCardProps {
  bank: "UnionPay" | "JCB" | "Diners" | "Club" | "Discover" | "amex" | "mastercard" | "visa";
  name: string;
  principal?: boolean;
  lastFour: string;
  expiry: string;
}

export const CreditCard: React.FC<CreditCardProps> = ({ bank, principal, name, lastFour, expiry }) => {
  const { t } = useTranslation();

  return (
    <BoxShadowed p={0} width="100%" height="calc(100% - 28px)">
      <Box p="24px">
        <Flex>
          <BoxShadowed width={80} px={1} py={0} justifyContent="center">
            <Flex width="fit-content" mx="auto">
              {bank == "mastercard" ? (
                <Mastercard height={51} />
              ) : bank == "visa" ? (
                <Visa height={51} />
              ) : bank == "amex" ? (
                <AmericanExpress height={51} />
              ) : bank == "Discover" ? (
                <Discover height={51} />
              ) : (
                <></>
              )}
            </Flex>
          </BoxShadowed>
          <Box ml={3}>
            <Text as="p" fontSize={2} fontWeight="600">
              {name} •••• {lastFour}
            </Text>
            <Text as="span" fontSize={1} color="grey">
              {`${t("creditCardEditExpiryDate")} :`}
            </Text>
            <Text as="span" fontSize={1} color="grey" ml={1}>
              {expiry}
            </Text>
          </Box>
        </Flex>
      </Box>
      <Divider />
      <Flex px="24px" py={2} alignItems="center">
        <Text as="span">{principal ? t("creditCardEditPrimaryType") : t("creditCardEditSecondaryType")}</Text>
        <Flex flexDirection="row-reverse" flex={1}>
          <Button variant="text" color="blue" width="fit-content">
            {t("creditCardEditSave")}
          </Button>
          <Button variant="text" color="blue" width="fit-content" mr={4}>
            {t("creditCardEditEdit")}
          </Button>
        </Flex>
      </Flex>
    </BoxShadowed>
  );
};
