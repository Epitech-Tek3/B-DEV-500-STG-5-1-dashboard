import { ButtonIcon } from "@components/buttons/ButtonIcon";
import { Absolute, Relative } from "@components/common/Position";
import { colors } from "@libraries/theme";
import moment from "moment";
import React from "react";
import { Flex, Text } from "rebass";

export interface DaysHeaderProps {
  calendar: moment.Moment[];
}

export const CalendarDaysHeader: React.FC<DaysHeaderProps> = ({ calendar }) => {
  const now = moment().clone();

  return (
    <Flex px={3} bg="white" width="calc(100% - 5px)">
      {calendar.map((day, i) => (
        <Relative
          key={i}
          width="calc((100% / 7) - 5px)"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          height={84}
          ml={i == 0 && "35px"}
          sx={{
            borderBottom: "solid 1px lightGrey",
            "p:nth-of-type(1)": {
              color: now.format("D").toString() == day.format("D").toString() ? "blue" : "grey"
            },
            "p:nth-of-type(2)": {
              color: "grey"
            }
          }}
        >
          <Text as="p" color="blue" fontSize={0} sx={{ textTransform: "uppercase" }}>
            {day.format("ddd").toString()}
          </Text>
          {now.format("D").toString() == day.format("D").toString() ? (
            <Flex
              sx={{
                button: { width: 33, bg: "blue", ":hover": { bg: "blue" } },
                p: { color: colors.persistanteWhite }
              }}
            >
              <ButtonIcon tooltipTitle="Ajourd'hui" size="small">
                <Text as="p" fontSize={4} fontWeight="500" color="white !important">
                  {day.format("D").toString()}
                </Text>
              </ButtonIcon>
            </Flex>
          ) : (
            <Text as="p" fontSize={4} fontWeight="500">
              {day.format("D").toString()}
            </Text>
          )}
          <Absolute right={0} bottom={0} sx={{ borderLeft: i != 6 && "solid 1px lightGrey", height: 20 }} />
        </Relative>
      ))}
    </Flex>
  );
};
