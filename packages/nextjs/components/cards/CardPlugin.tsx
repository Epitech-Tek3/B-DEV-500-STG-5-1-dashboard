import { Box, Flex, Text } from "rebass";
import { BoxShadowed, BoxShadowedProps } from "@components/containers/BoxShadowed";
import { Checkbox } from "@rebass/forms";
import { CheckRounded } from "@material-ui/icons";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";

export interface CardPluginProps extends BoxShadowedProps {
  bg: string;
  description: string;
  title: string;
  price: number;
  Icon: JSX.Element;
}

export const CardPlugin: React.FC<CardPluginProps & { ref }> = React.forwardRef(({ ...props }, ref) => {
  const [hover, setHover] = useState(false);
  const [checked, setChecked] = useState(props.checked ?? false);
  const { t } = useTranslation();

  return (
    <BoxShadowed
      p={0}
      height="100%"
      width="100%"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      overflow="hidden"
      {...props}
      onClick={(e) => {
        setChecked(!checked);
        props.onClick && props.onClick(e);
      }}
      sx={{
        cursor: "pointer",
        borderRadius: 8,
        transition: ".2s",
        ":hover": { filter: "brightness(90%)" },
        userSelect: "none",
        ...props.sx
      }}
      bg={props.bg}
    >
      <Checkbox display="none !important" ref={ref} name={props.name} readOnly checked={checked} />
      {hover ? (
        <Flex m="auto" height={136} p={2}>
          <Text as="p" m="auto" textAlign="center" color="persistanteWhite" fontWeight="700">
            {props.description}
          </Text>
        </Flex>
      ) : (
        <Box margin="auto" height={136} p={2}>
          <Box p={4} m="auto" width="fit-content">
            <Box bg="persistanteWhite" p={3} sx={{ borderRadius: 100 }}>
              {props.Icon}
            </Box>
          </Box>
        </Box>
      )}
      <Box p={3} sx={{ borderTop: "solid 1px white" }}>
        <Flex m="auto" mr={0}>
          <Text as="p" color="persistanteWhite" fontWeight="700" fontSize={3} lineHeight={1}>
            {props.title}
          </Text>
          <Flex m="auto" mr={0}>
            <Text as="p" color="persistanteWhite" fontWeight="700" fontSize={2} sx={{ whiteSpace: "nowrap" }}>
              {props.price} €
            </Text>
          </Flex>
        </Flex>
        <Flex m="auto" mr={0} mt={2}>
          <Text as="p" color="persistanteWhite" fontWeight="700" fontSize={2}>
            {checked ? t("specificationCardFeatureEnable") : t("specificationCardFeatureDisable")}
          </Text>
          {checked && (
            <Flex m="auto" mr={0}>
              <CheckRounded style={{ fill: "#5cb85c", width: 20, height: 20 }} />
            </Flex>
          )}
        </Flex>
      </Box>
    </BoxShadowed>
  );
});

CardPlugin.displayName = "CardPlugin";
