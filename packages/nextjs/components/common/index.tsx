import Link from "next/link";
import React from "react";
import { Box, Card, Heading, Image, Link as Anchor, Text } from "rebass";

export const App = (props) => <Box color="text" {...props} />;

export const Container = (props: any) => (
  <Box
    {...props}
    sx={{
      maxWidth: 1024,
      mx: "auto",
      px: [2, 3],
      position: "relative"
    }}
  />
);

export const SmallHeading = (props) => (
  <Heading
    color="subText"
    fontSize={1}
    fontWeight="normal"
    textAlign="center"
    variant="caps"
    mt={[4, 5]}
    mb={[3, 4]}
    {...props}
  />
);

export const ContainerFluid = (props: any) => {
  return <Box {...props} mx="auto" px={[1, 2]} />;
};

export const Badge = (props: any) => (
  <Card
    {...props}
    color="white"
    bg="blue"
    px={3}
    py={1}
    sx={{
      borderRadius: 9999
    }}
    css={{
      display: "inline-block"
    }}
  />
);

export const Avatar = (props) => <Image width={48} height={48} sx={{ borderRadius: 9999 }} {...props} />;

export const BlockLink = (props) => (
  <Anchor
    color="inherit"
    {...props}
    css={{
      display: "block",
      textDecoration: "none"
    }}
  />
);

export const ExternalNavLink = (props) => <Anchor px={2} py={1} color="link" {...props} />;

export const NavLink = ({ href = "/", ...rest }) => (
  <Link passHref={true} href={href} prefetch={typeof href === "string" && href.startsWith("https") ? false : undefined}>
    <Anchor px={2} py={1} color="link" {...rest} />
  </Link>
);

export const Embed = (props) => (
  <Box
    {...props}
    width={1}
    css={{
      height: 0,
      paddingBottom: `${9 / 16} %`,
      position: "relative",
      overflow: "hidden",
      "& > iframe": {
        position: "absolute",
        width: "100%",
        height: "100%",
        top: 0,
        bottom: 0,
        left: 0,
        border: 0
      }
    }}
  />
);

export const Divider = (props) => (
  <Box
    {...props}
    as="hr"
    bg="lightGrey"
    sx={{
      border: 0,
      height: "1px"
    }}
  />
);

export const Caps = (props) => (
  <Text
    fontSize={1}
    {...props}
    css={{
      textTransform: "uppercase",
      letterSpacing: "0.2em"
    }}
  />
);

export const UnderlinedLink = ({ href = "/", ...rest }) => (
  <Link passHref={true} href={href}>
    <Anchor
      px={2}
      py={1}
      color="link"
      {...rest}
      css={{
        transition: "all .15s linear",
        display: "inline-block",
        fontWeight: "bold",
        lineHeight: "28px",
        borderBottom: "3px solid #ee273a",
        "&:hover": {
          color: "#5e6070"
        }
      }}
    />
  </Link>
);

export const Section = (props) => <Box as="section" style={{ border: "solid transparent" }} {...props} />;

export const BoringSection = (props) => (
  <Text
    {...props}
    as="section"
    bg="white"
    my={[2, 3]}
    mx="auto"
    p={[2, 3]}
    textAlign="justify"
    css={{
      maxWidth: "900px",
      borderRadius: "20px",
      h1: {
        textAlign: "center"
      },
      h3: {
        textAlign: "center"
      }
    }}
  />
);
