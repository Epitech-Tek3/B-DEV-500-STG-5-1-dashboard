import { Box, Image, Text } from "rebass";
import { Container } from "@components/containers/Container";
import { Grid } from "@components/grid";
import { makeSerieNumber } from "@utils/makekey";
import { useGooglePhoto } from "@hooks/useGooglePhoto";
import { WorkingOn } from "@components/state/WorkingOn";
import ImageViewer from "react-simple-image-viewer";
import React from "react";
import { useAuth } from "@hooks/useAuth";
import { useTranslation } from "@hooks/useTranslation";

export const Content = () => {
  const albums = useGooglePhoto("mediaItems", "pageSize=100");
  const [album, setAlbum] = React.useState(null);
  const [occurence, setOccurence] = React.useState(0);
  const { text } = useTranslation();

  return (
    <Container width="95%">
      <Text as="h1" textAlign="center" my={4}>
        {text.photo}
      </Text>
      <Grid widthItems="400px">
        {albums?.map((alb, i) => (
          <Box height={211} key={makeSerieNumber(5)} overflow="hidden">
            <Image
              width="100%"
              src={alb.baseUrl}
              sx={{ objectFit: "contain" }}
              onClick={() => {
                setAlbum(alb);
                setOccurence(i);
              }}
            />
          </Box>
        ))}
      </Grid>
      {album && (
        <Box sx={{ "& > *": { zIndex: 2000000 } }}>
          <ImageViewer
            src={albums?.map(({ baseUrl }) => baseUrl)}
            currentIndex={occurence}
            onClose={() => setAlbum(null)}
            disableScroll={false}
            backgroundStyle={{
              backgroundColor: "rgba(0,0,0,0.9)"
            }}
            closeOnClickOutside={true}
          />
        </Box>
      )}
    </Container>
  );
};

export const Photo = () => {
  const { currentUser } = useAuth();

  return currentUser.modules.googlePhoto.state ? <Content /> : <WorkingOn />;
};
