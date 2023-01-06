import { BoxShadowed } from "@components/containers/BoxShadowed";
import { PositionProps } from "styled-system";
import React, { useState } from "react";
import { Flex } from "rebass";
import slugify from "slugify";
import {
  FormatAlignLeft,
  FormatAlignCenter,
  FormatAlignRight,
  FormatAlignJustify,
  FormatBold,
  FormatItalic,
  FormatUnderlined,
  FormatColorText
} from "@material-ui/icons";
import { ButtonIcon } from "@components/buttons/ButtonIcon";
import { Absolute } from "@components/common/Position";
import { makeSerieNumber } from "@utils/makekey";

interface TopBarProps {
  bold: number;
  italic: string;
  onChangeBold: (bold: number) => void;
  onChangeItalic: (italic: string) => void;
}

const TopBar = ({ bold, italic, onChangeBold, onChangeItalic }: TopBarProps) => {
  const [newBold, setBold] = useState(bold == 900);
  const [newItalic, setItalic] = useState(italic == "italic");

  const items = [
    {
      tooltip: "Bold",
      icon: <FormatBold />,
      onClick: () => {
        setBold(!newBold);
        onChangeBold(newBold ? 500 : 900);
      }
    },
    {
      tooltip: "Italic",
      icon: <FormatItalic />,
      onClick: () => {
        setItalic(!newItalic);
        onChangeItalic(newItalic ? "normal" : "italic");
      }
    },
    {
      tooltip: "Underline",
      icon: <FormatUnderlined />
    },
    {
      tooltip: "Color",
      icon: <FormatColorText />
    },
    {
      tooltip: "Align left",
      icon: <FormatAlignLeft />
    },
    {
      tooltip: "Align center",
      icon: <FormatAlignCenter />
    },
    {
      tooltip: "Align right",
      icon: <FormatAlignRight />
    },
    {
      tooltip: "Align justify",
      icon: <FormatAlignJustify />
    }
  ];

  return (
    <Flex>
      {items.map((item, i) => (
        <>
          <ButtonIcon
            key={slugify(`${item.tooltip}-${makeSerieNumber(5)}-${i}`, { lower: true })}
            tooltipTitle={item.tooltip}
            size="small"
            onClick={item.onClick}
          >
            {item.icon}
          </ButtonIcon>
          {i == 3 && <Flex pl={2} mr={2} sx={{ borderRight: "solid 1px lightGrey" }} />}
        </>
      ))}
    </Flex>
  );
};

const BottomBar = () => {
  return <Flex flex={1} bg="lightGrey"></Flex>;
};

export interface EditorProps {
  containerProps?: PositionProps;
  bold: any;
  italic: any;
  onChangeBold: (bold: number) => void;
  onChangeItalic: (italic: string) => void;
}

export const Editor: React.FC<EditorProps> = ({
  containerProps,
  onChangeBold,
  onChangeItalic,
  bold,
  italic,
  ...props
}) => {
  return (
    <Absolute top={-56} {...containerProps}>
      <BoxShadowed {...props}>
        <TopBar onChangeBold={onChangeBold} onChangeItalic={onChangeItalic} bold={bold} italic={italic} />
        <BottomBar />
      </BoxShadowed>
    </Absolute>
  );
};
