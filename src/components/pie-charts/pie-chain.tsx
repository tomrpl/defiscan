"use client";

import React, { useState, useEffect } from "react";

import { protocols } from "#site/content";

import { Label, Pie, PieChart } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { fetchProtocolTVL } from "../table/page";
import {
  aggregateByKey,
  extendWithColor,
  groupBy,
  PiechartProps,
  Project,
  VisualisedData,
} from "./shared/functions";

export const description = "A donut chart with text";

const chartConfig = {} satisfies ChartConfig;

export function PiechartChain({
  groupByKey,
  operation,
  baseColor,
  chartTitle,
  labelValueDescription,
}: PiechartProps) {
  const [data, setData] = React.useState<any>(null);

  const fetchData = async () => {
    const data = await fetchProtocolTVL();
    // filter
    const filtered = data
      .map((val) => {
        const res = protocols.find(
          (protocol) => protocol.defillama_slug == val.slug
        );
        if (res)
          return {
            name: res.protocol,
            tvl: val.tvl,
            chain: res.chain,
            stage: res.stage,
          } as Project;
        return null;
      })
      .filter((el) => el !== null);

    // group
    const groupedBy = groupBy(filtered, groupByKey); // Parameterized here for groupByKey
    const aggregated = aggregateByKey(groupedBy, operation); // Parameterized here for aggregateByKey
    const coloredResults = extendWithColor(aggregated, baseColor); // Parameterized here for baseColor

    // set
    setData(coloredResults);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="">
      <Card className="flex flex-col">
        <CardHeader className="items-center p-2 -mb-2">
          <CardTitle className="text-md">{chartTitle}</CardTitle>{" "}
          {/* Parameterized here for chartTitle */}
          {/* <CardDescription>January - June 2024</CardDescription>  */}
        </CardHeader>
        <CardContent className="flex-1 pb-0">
          <ChartContainer
            config={chartConfig}
            className="mx-auto aspect-square h-[120px]"
          >
            <PieChart>
              <ChartTooltip
                cursor={false}
                content={
                  <ChartTooltipContent hideLabel className="min-w-[8rem]" />
                }
              />
              <Pie
                data={data}
                dataKey="value"
                nameKey="key"
                innerRadius={35}
                strokeWidth={5}
              >
                <Label
                  content={({ viewBox }) => {
                    if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                      return (
                        <text
                          x={viewBox.cx}
                          y={viewBox.cy}
                          textAnchor="middle"
                          dominantBaseline="middle"
                          className="-mb-8"
                        >
                          <tspan
                            x={viewBox.cx}
                            y={(viewBox.cy || 0) - 2}
                            className="fill-foreground text-md font-bold"
                          >
                            {
                              data.reduce(
                                (
                                  max: VisualisedData,
                                  current: VisualisedData
                                ) => {
                                  return current.value > max.value
                                    ? current
                                    : max;
                                },
                                data[0]
                              ).key
                            }
                          </tspan>
                          <tspan
                            x={viewBox.cx}
                            y={(viewBox.cy || 0) + 10}
                            className="fill-muted-foreground"
                          >
                            {labelValueDescription}{" "}
                            {/* Parameterized here for labelValueDescription */}
                          </tspan>
                        </text>
                      );
                    }
                  }}
                />
              </Pie>
            </PieChart>
          </ChartContainer>
        </CardContent>
        {/* <CardFooter className="flex-col gap-2 text-sm">
          <div className="flex items-center gap-2 font-medium leading-none">
            Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
          </div>
          <div className="leading-none text-muted-foreground">
            Showing total visitors for the last 6 months
          </div>
        </CardFooter> */}
      </Card>
    </div>
  );
}
