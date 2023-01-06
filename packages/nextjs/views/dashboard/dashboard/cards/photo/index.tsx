import { Box, Flex, Image, Text } from "rebass";
import { Button } from "@components/buttons/button";
import { makeSerieNumber } from "@utils/makekey";
import { PhotoCamera } from "@material-ui/icons";
import { useGooglePhoto } from "@hooks/useGooglePhoto";
import { useTime } from "@hooks/useTimeline";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import ImageViewer from "react-simple-image-viewer";
import React from "react";
import Typography from "@mui/material/Typography";
import { useTranslation } from "@hooks/useTranslation";

const PhotoCard = ({ src, title, onClick, datetime }) => {
  return (
    <Card sx={{ my: 2 }}>
      <CardMedia component="img" height="140" image={src} alt="green iguana" />
      <CardContent>
        <Text
          as="p"
          fontSize={3}
          display="-webkit-box"
          overflow="hidden"
          sx={{ textOverflow: "ellipsis", WebkitLineClamp: 1, overflow: "hidden", "-webkit-box-orient": "vertical" }}
        >
          {title}
        </Text>
        <Typography variant="body2" color="text.secondary">
          {datetime}
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="text" size="small" onClick={onClick}>
          Voir
        </Button>
      </CardActions>
    </Card>
  );
};

export const PhotosCard = () => {
  const albums = useGooglePhoto("mediaItems");
  const [album, setAlbum] = React.useState(null);
  const [occurence, setOccurence] = React.useState(0);
  const { text } = useTranslation();

  return (
    <>
      <Flex alignItems="center" sx={{ svg: { fill: "grey" } }}>
        <PhotoCamera width={25} />
        <Text as="span" ml={3}>
          Photos
        </Text>
        <Flex flexGrow={1} />
      </Flex>
      {albums?.length ? (
        albums?.map(
          (alb, i) =>
            i <= 3 && (
              <PhotoCard
                key={makeSerieNumber(5)}
                onClick={() => {
                  setAlbum(alb);
                  setOccurence(i);
                }}
                src={alb.baseUrl}
                title={alb.filename}
                datetime={useTime(new Date(alb.mediaMetadata.creationTime).toString())}
              />
            )
        )
      ) : (
        <Image
          mt={3}
          width="100%"
          src="https://www.gstatic.com/identity/boq/accountsettingsmobile/family_scene_316x112_a655f3069fb52d4f013de2d3773be6c7.png"
        />
      )}
      <Flex pt={2} mt={3} sx={{ borderTop: "solid 1px lightGrey" }}>
        <Text ml="41px" as="span" fontSize={1} sx={{ textTransform: "uppercase" }}>
          {text.accessPhoto}
        </Text>
      </Flex>
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
    </>
  );
};
