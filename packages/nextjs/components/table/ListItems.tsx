import { Button } from "@components/buttons/button";
import { Divider } from "@material-ui/core";
import { ArrowForwardIos } from "@material-ui/icons";
import React from "react";
import ContentLoader from "react-content-loader";
import { Flex, Text, TextProps } from "rebass";

export interface ListItemsProps {
  label: string;
  loading?: boolean;
  noDivider?: boolean;
  onClick?: (item) => void;
  Icon?: JSX.Element;
  valueProps?: Omit<TextProps, "css">;
  value?: string | string[];
}

export const ListItems: React.FC<ListItemsProps> = ({ onClick = () => null, ...props }) => {
  return (
    <>
      <Flex
        alignItems="center"
        onClick={() => onClick(props)}
        sx={{
          "& > button": {
            width: "100%",
            px: [3, 4],
            py: 3,
            borderRadius: 0,
            textTransform: "unset",
            m: 0,
            textAlign: "left"
          }
        }}
      >
        <Button>
          <Flex width="95%" sx={{ "@media screen and (max-width: 560px)": { display: "block" } }}>
            <Flex
              alignItems="center"
              width={props.value ? "25%" : "fit-content"}
              overflow="hidden"
              sx={{ textOverflow: "ellipsis", "@media screen and (max-width: 560px)": { width: "100%" } }}
            >
              {props.Icon}
              <Text
                as="p"
                color={props.value ? "grey" : "black"}
                fontSize={props.value ? 0 : 2}
                fontWeight="500"
                {...props.valueProps}
                sx={{
                  textTransform: props.value ? "uppercase" : "none",
                  ...props.valueProps?.sx,
                  whiteSpace: "nowrap"
                }}
              >
                {props.label}
              </Text>
            </Flex>
            {props.value && (
              <Text
                as="p"
                fontSize={2}
                width="70%"
                overflow="hidden"
                sx={{ textOverflow: "ellipsis", "@media screen and (max-width: 560px)": { width: "100%" } }}
              >
                {props.loading ? (
                  <ContentLoader color="#f3f3f3" height={17}>
                    <rect x="0" y="0" width="200px" height="30px" />
                  </ContentLoader>
                ) : typeof props.value == "object" ? (
                  props.value.map((v) => (
                    <Text as="span" display="block" key={v}>
                      {v}
                    </Text>
                  ))
                ) : (
                  props.value
                )}
              </Text>
            )}
          </Flex>
          <ArrowForwardIos style={{ width: 16, fill: "grey" }} />
        </Button>
      </Flex>
      {!props.noDivider && <Divider />}
    </>
  );
};
