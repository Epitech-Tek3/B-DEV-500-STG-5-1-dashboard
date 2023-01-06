import { Line } from "@components/graphs/Line";
import { useTranslation } from "@hooks/useTranslation";
import { WatchLater } from "@material-ui/icons";
import React from "react";
import { Flex, Text } from "rebass";

export const ViewingGraph = () => {
  const { text } = useTranslation();

  return (
    <>
      <Flex alignItems="center" mb={3} sx={{ svg: { fill: "grey" } }}>
        <WatchLater width={25} />
        <Text as="span" ml={3}>
          {text.viewing}
        </Text>
        <Flex flexGrow={1} />
        {/* <ButtonIcon tooltipTitle="More options" size="small">
          <MoreVert />
        </ButtonIcon> */}
      </Flex>
      <Line
        key={1}
        height="250px"
        sx={{
          "@media screen and (max-width: 700px)": {
            height: "100px"
          }
        }}
        datasets={[
          {
            color: "#1a73e8",
            label: "Loyalty",
            borderWidth: 2,
            data: [0, 0, 0, 0, 0, 0, 0]
          },
          {
            color: "#1a73e8",
            label: "Last week",
            borderWidth: 2,
            data: [0, 0, 0, 0, 0, 0, 0],
            dashed: true
          }
        ]}
        type="number"
        labels={["20 Août", "21 Août", "22 Août", "23 Août", "24 Août", "25 Août", "26 Août"]}
        noAxes
      />
    </>
  );
};
