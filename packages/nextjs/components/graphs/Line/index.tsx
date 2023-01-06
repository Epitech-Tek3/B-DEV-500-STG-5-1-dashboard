import React from "react";
import { Flex, FlexProps } from "rebass";
import { Line as LineChartjs } from "react-chartjs-2";

export type Datasets = {
  label: string;
  dashed?: boolean;
  data: any[];
  borderWidth?: number;
  color?: string;
};

export interface LineProps extends Omit<FlexProps, "css"> {
  labels: string[];
  type?: "number" | "pourcentage";
  noAxes?: boolean;
  datasets: Datasets[];
}

export const Line: React.FC<LineProps> = ({ labels, type = "number", noAxes, datasets, ...props }) => {
  return (
    <Flex height="100%" {...props}>
      <LineChartjs
        data={{
          labels,
          datasets: datasets.map((data) => ({
            ...data,
            backgroundColor: data.color,
            borderColor: data.color,
            borderDash: data.dashed && [5, 5]
          }))
        }}
        options={{
          maintainAspectRatio: false,
          beginAtZero: true,
          scales: {
            x: {
              grid: {
                display: false
              },
              ticks: {
                callback: function (value) {
                  return value == 0 ? labels[0] : value == 6 ? labels[6] : "";
                },
                // @ts-ignore
                beginAtZero: true
              }
            },
            y:
              type == "pourcentage"
                ? {
                    beginAtZero: true,
                    ticks: {
                      callback: function (value) {
                        return value == 100 || value == 50 ? value + "%" : "";
                      }
                    }
                  }
                : {
                    beginAtZero: true,
                    grid: {
                      display: noAxes ? false : true
                    }
                  }
          },
          plugins: {
            legend: {
              display: false
            }
          },
          elements: {
            point: {
              radius: 2
            }
          }
        }}
      />
    </Flex>
  );
};
