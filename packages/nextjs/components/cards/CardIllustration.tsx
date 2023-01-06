import Link from "next/link";
import React from "react";
import { Box, Image, Text } from "rebass";

interface IProps {
  image: string;
  alt: string;
  blank?: boolean;
  title?: string;
  linkLabel?: string;
  linkHref: string;
  linkTitle?: string;
}

export const CardIllustration = ({ image, alt, blank, title, linkHref, linkTitle, linkLabel }: IProps) => {
  return (
    <>
      <Link href={linkHref} passHref>
        <Box mx={[0, 3]} as="a" display="block" mb={3} flex={1} target={blank && "_blank"} title={linkTitle}>
          <Image src={image} alt={alt} sx={{ borderRadius: 5 }} />
          {title && (
            <Text as="h4" fontSize={[2, 3, 4]} my={2}>
              {title}
            </Text>
          )}
          {linkHref && linkLabel && (
            <Text as="p" color="blue" fontWeight="700" fontSize={[1, 1, 2]}>
              {linkLabel}
            </Text>
          )}
        </Box>
      </Link>
    </>
  );
};
