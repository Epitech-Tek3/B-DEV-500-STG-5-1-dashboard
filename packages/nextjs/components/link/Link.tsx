import LinkNext, { LinkProps as LinkNextProps } from "next/link";
import React from "react";
import { Box, BoxProps } from "rebass";
import { ParsedUrlQueryInput } from "querystring";

export interface LinkProps extends Omit<LinkNextProps, "href"> {
  boxProps?: Omit<BoxProps, "css">;
  pathname: string;
  dataAzinoveId?: string;
  query?: string | ParsedUrlQueryInput;
}

export const Link: React.FC<LinkProps> = React.forwardRef(
  ({ pathname, query, dataAzinoveId, boxProps, as, ...props }, _ref) => {
    const localized = `/${pathname}`;

    return (
      <LinkNext {...props} href={{ pathname: localized, query }} passHref>
        <Box
          as="a"
          height="fit-content"
          ref={(tmp) => tmp?.current?.setAttributes("data-azinove-id", dataAzinoveId)}
          {...boxProps}
        >
          {props.children}
        </Box>
      </LinkNext>
    );
  }
);

Link.displayName = "Link";
