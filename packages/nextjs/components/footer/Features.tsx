import { OpenableBoxLabeled } from "@components/openableBox/OpenableBoxLabeled";
import { Text } from "@components/text";
import { Link } from "@components/link/Link";
import { useWindowDimensions } from "@hooks/useWindowDimensions";

import React from "react";
import { Box, Flex } from "rebass";
import { itemsFooter } from "./constants";
import { useTranslation } from "react-i18next";

export const Features = () => {
  const [resourcesOpen, setResourcesOpen] = React.useState(false);
  const { width } = useWindowDimensions();
  const { t } = useTranslation();

  return (
    <Flex
      py={4}
      pb={2}
      sx={{ borderTop: "solid 1px lightGrey", "@media screen and (max-width: 500px)": { display: "block" } }}
    >
      {itemsFooter(t).map(({ label, dataAzinoveId, items }, i) => (
        <React.Fragment key={`${dataAzinoveId}-${i}`}>
          {width > 500 ? (
            <Flex flexDirection="column" mb={2} ml={5}>
              <Text as="p" dataAzinoveId={dataAzinoveId} fontSize={2} color="grey" fontWeight="600">
                {label}
              </Text>
              {items.map(({ value, dataAzinoveId, href }) => (
                <Link
                  key={dataAzinoveId}
                  dataAzinoveId={dataAzinoveId}
                  pathname={href}
                  boxProps={{
                    color: "black",
                    mb: 2,
                    fontSize: 1,
                    fontWeight: "500"
                  }}
                >
                  {value}
                </Link>
              ))}
            </Flex>
          ) : (
            <>
              <OpenableBoxLabeled
                open={resourcesOpen}
                onClose={() => setResourcesOpen(resourcesOpen ? false : true)}
                label={label}
              >
                <Flex
                  flexDirection="column"
                  mb={2}
                  ml={5}
                  sx={{ "@media screen and (max-width: 500px)": { ml: "0 !important" } }}
                >
                  {items.map(({ value, dataAzinoveId, href }) => (
                    <Link dataAzinoveId={dataAzinoveId} key={`${dataAzinoveId}-openable`} pathname={href}>
                      {value}
                    </Link>
                  ))}
                </Flex>
              </OpenableBoxLabeled>
              <Box mb={30} sx={{ borderBottom: "solid 1px lightGrey" }} />
            </>
          )}
        </React.Fragment>
      ))}
    </Flex>
  );
};
