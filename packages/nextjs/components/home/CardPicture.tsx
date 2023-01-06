import React from "react";
import { Box, Image, Text } from "rebass";
import { CommonStyle } from "../common/commonStyle";

interface Props {
  image: string;
  title: string;
}

export const CardPicture = ({ image, title }: Props) => (
  <Box flex="1" marginX="10px">
    <Text
      as="h2"
      fontFamily={CommonStyle.fontFamily.main}
      color={CommonStyle.colors.white}
      marginBottom="80px"
      className="anime-opacity"
      opacity="0"
      style={{ textTransform: "uppercase", transition: ".5s" }}
    >
      {title}
    </Text>
    <Text
      as="p"
      fontSize="19px"
      fontFamily={CommonStyle.fontFamily.main}
      color={CommonStyle.colors.lightGrey}
      marginBottom="80px"
      className="anime-opacity"
      opacity="0"
      style={{ transition: ".5s" }}
    >
      Développement d&apos;application mobile compatible Android & Ios pour rendre votre produit accessible à tous et
      partout
    </Text>
    <Box
      id="examples"
      style={{ cursor: "pointer", borderRadius: "3px" }}
      bg={CommonStyle.colors.white}
      display="flex"
      marginBottom="20px"
      paddingY="20px"
      paddingX="15px"
      width="50%"
    >
      <Box className="example" margin="auto" display="flex">
        <Text
          as="p"
          className="hover hover-1 anime-opacity"
          opacity="0"
          fontWeight="700"
          fontSize={CommonStyle.sizes[2]}
          fontFamily={CommonStyle.fontFamily.main}
          margin="auto"
          textAlign="center"
          style={{ textTransform: "uppercase", transition: ".5s" }}
        >
          En savoir plus
        </Text>
      </Box>
    </Box>
    <Image
      src={image}
      className="imageApp"
      width="100%"
      opacity="0"
      style={{ transition: ".5s", transform: "rotate(-10deg)" }}
    />
  </Box>
);
