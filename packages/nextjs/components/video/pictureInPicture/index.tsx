import { Fixed } from "@components/common/Position";
import React from "react";
import { Flex, Text } from "rebass";
import ReactDOM from "react-dom";

export interface PictureInPicture {
  src: string;
  type?: "video" | "playlist";
  onClose: () => void;
}

export const PictureInPicture: React.FC<PictureInPicture> = ({ src, type = "video", onClose }) => {
  return ReactDOM.createPortal(
    src && (
      <Fixed bottom={10} right={10}>
        <Flex>
          <Flex flexGrow={1} />
          <Flex onClick={onClose}>
            <Text
              as="span"
              px={3}
              py={1}
              bg="white"
              fontSize={0}
              sx={{
                boxShadow: "rgba(0, 0, 0, 0.12) 0 1px 6px, rgba(0, 0, 0, 0.12) 0 1px 4px",
                cursor: "pointer",
                borderTopLeftRadius: 5,
                borderTopRightRadius: 5
              }}
            >
              close
            </Text>
          </Flex>
        </Flex>
        <iframe
          width="450"
          height="250"
          src={
            type == "video"
              ? `https://www.youtube-nocookie.com/embed/${src}?controls=0&autoplay=1`
              : `https://www.youtube.com/embed/?listType=playlist&list=${src}&controls=0&autoplay=1`
          }
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </Fixed>
    ),
    document.body
  );
};
