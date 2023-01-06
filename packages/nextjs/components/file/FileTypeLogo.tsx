import React from "react";
import { Flex, Image } from "rebass";
import { Doc } from "../appIcons/fileType/Doc";
import { Gif } from "../appIcons/fileType/Gif";
import { Jpg } from "../appIcons/fileType/Jpg";
import { Pdf } from "../appIcons/fileType/Pdf";
import { Png } from "../appIcons/fileType/Png";
import { Svg } from "../appIcons/fileType/Svg";
import { Txt } from "../appIcons/fileType/Txt";
import ContentLoader from "react-content-loader";

const Item = ({ Icon, ...props }) => {
  return (
    <>
      {!Icon ? (
        <ContentLoader
          viewBox="0 0 fit-content calc(100% - 55px)"
          height="calc(100% - 55px)"
          color="#f3f3f3"
          style={{ height: "100%", width: "100%" }}
        >
          <rect x="0" y="0" width="fit-content" height="200" />
        </ContentLoader>
      ) : (
        <Flex m="auto" width="fit-content" py={3} height="calc(100% - 55px)" {...props}>
          <Icon />
        </Flex>
      )}
    </>
  );
};

export const FileTypeLogo = ({ extension, url = undefined, icon = false, ...props }) => {
  return extension == "png" ||
    extension == "jpg" ||
    extension == "jpeg" ||
    extension == "webp" ||
    extension == "gif" ? (
    icon ? (
      <Item
        Icon={() =>
          extension == "png" ? <Png width={100} /> : extension == "gif" ? <Gif width={100} /> : <Jpg width={100} />
        }
        {...props}
      />
    ) : (
      <Image src={url} width="100%" sx={{ userDrag: "none", userSelect: "none" }} {...props} />
    )
  ) : extension == "pdf" ? (
    <Item Icon={() => <Pdf width={100} />} {...props} />
  ) : extension == "doc" || extension == "docx" || extension == "odt" ? (
    <Item Icon={() => <Doc width={100} />} {...props} />
  ) : extension == "svg" ? (
    <Item Icon={() => <Svg width={100} />} {...props} />
  ) : (
    <Item Icon={() => <Txt width={100} />} {...props} />
  );
};
