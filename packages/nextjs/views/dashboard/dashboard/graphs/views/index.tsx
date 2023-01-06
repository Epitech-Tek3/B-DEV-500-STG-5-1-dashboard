import { Line } from "@components/graphs/Line";
import { useTranslation } from "@hooks/useTranslation";
import { Visibility } from "@material-ui/icons";
import React from "react";
import { Flex, Text } from "rebass";

export const ViewsGraph = () => {
  const { text } = useTranslation();

  return (
    <>
      <Flex alignItems="center" mb={3} sx={{ svg: { fill: "grey" } }}>
        <Visibility width={25} />
        <Text as="span" ml={3}>
          {text.view}
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
            data: [0, 0, 0, 0, 0, 0, 0, 1, 2, 3, 4, 5, 6] // don't paid attention of all value after 0. It's just for the precision
          },
          {
            color: "#1a73e8",
            label: "Last week",
            borderWidth: 2,
            data: [0, 0, 0, 0, 0, 0, 0, 1, 2, 3, 4, 5, 6], // don't paid attention of all value after 0. It's just for the precision
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
