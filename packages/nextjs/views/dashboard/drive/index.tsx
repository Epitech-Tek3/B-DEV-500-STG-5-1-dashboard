import { Box, Flex, Image, Text } from "rebass";
import { BoxShadowed } from "@components/containers/BoxShadowed";
import { Container } from "@components/containers/Container";
import { Folder, InsertDriveFile } from "@material-ui/icons";
import { Grid } from "@components/grid";
import { makeSerieNumber } from "@utils/makekey";
import { useAuth } from "@hooks/useAuth";
import { useDrive } from "@hooks/useDrive";
import { WorkingOn } from "@components/state/WorkingOn";
import ArticleIcon from "@mui/icons-material/Article";
import React from "react";
import { useTranslation } from "@hooks/useTranslation";

export const Content = () => {
  const { files } = useDrive();
  const { text } = useTranslation();

  return (
    <Container width="95%">
      <Text as="h1" textAlign="center" my={4}>
        {text.myDrive}
      </Text>
      <Text as="p" color="grey" mb={2}>
        {text.folder}
      </Text>
      <Grid widthItems="250px" gap="20px">
        {files
          ?.filter((file) => file.mimeType === "application/vnd.google-apps.folder")
          .map(({ name }) => (
            <BoxShadowed display="flex" key={makeSerieNumber(5)} width="100%">
              <Folder style={{ fill: "grey" }} />
              <Text
                as="p"
                ml={2}
                fontSize={1}
                overflow="hidden"
                display="-webkit-box"
                sx={{ WebkitLineClamp: 1, overflow: "hidden", "-webkit-box-orient": "vertical" }}
              >
                {name}
              </Text>
            </BoxShadowed>
          ))}
      </Grid>
      <Text as="p" color="grey" mb={2} mt={4}>
        {text.file}
      </Text>
      <Grid widthItems="250px" gap="20px">
        {files
          ?.filter((file) => file.mimeType !== "application/vnd.google-apps.folder")
          .map(({ name, thumbnailLink, exportLinks }) => (
            <BoxShadowed p={0} key={makeSerieNumber(5)} width="100%">
              <a href={exportLinks ? exportLinks["application/zip"] : null} target="_blank" rel="noreferrer">
                <Box overflow="hidden" height="118px" p={2} pb={0} bg="lightGrey">
                  {thumbnailLink ? (
                    <Image src={thumbnailLink} width="100%" />
                  ) : (
                    <Flex justifyContent="center" alignItems="center">
                      <InsertDriveFile style={{ fill: "#1B72E8", width: 90, height: 90 }} />
                    </Flex>
                  )}
                </Box>
                <Flex px={3} py={2} alignItems="center" sx={{ borderTop: "solid 1px lightGrey" }}>
                  <ArticleIcon style={{ fill: "#1B72E8" }} />
                  <Text
                    as="p"
                    ml={2}
                    fontSize={1}
                    overflow="hidden"
                    display="-webkit-box"
                    sx={{ WebkitLineClamp: 1, overflow: "hidden", "-webkit-box-orient": "vertical" }}
                  >
                    {name}
                  </Text>
                </Flex>
              </a>
            </BoxShadowed>
          ))}
      </Grid>
    </Container>
  );
};

export const Drive = () => {
  const { currentUser } = useAuth();

  return currentUser.modules.drive.state ? <Content /> : <WorkingOn />;
};
