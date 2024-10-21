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
import { fetchProtocolTVL, Protocol } from "../table";
import { PiechartProps } from "./shared/functions";

export const description = "A donut chart with text";

interface Project {
  name: string;
  tvl: number;
  chain: string;
  stage: number;
  type: string;
}

interface VisualisedData {
  key: string;
  value: number;
  fill: string;
}

/**
 *
 * @param array of projects fetched and filtered (covered by defi collective)
 * @param key chain, stage or type
 * @returns
 */
export const groupBy = (
  array: Project[],
  key: keyof Project
): Record<string, Project[]> => {
  return array.reduce(
    (result, currentValue) => {
      const groupKey = currentValue[key];
      if (!result[groupKey]) {
        result[groupKey] = [];
      }
      result[groupKey].push(currentValue);
      return result;
    },
    {} as Record<string, Project[]>
  );
};

/**
 * submit the result of `groupBy(array, key)`
 * @param groupedData
 * @param operation sum for tvl, count group category, counting elements per key
 * @returns
 */
export const aggregateByKey = (
  groupedData: Record<string, Project[]>,
  operation: "sum" | "count"
): { key: string; value: number }[] => {
  return Object.entries(groupedData).map(([key, projects]) => {
    if (operation === "sum") {
      // Sum TVL for each group
      const totalTvl = projects.reduce((sum, project) => sum + project.tvl, 0);
      return { key, value: totalTvl };
    } else if (operation === "count") {
      // Count number of projects in each group
      return { key, value: projects.length };
    }
    return { key, value: 0 };
  });
};

// Function to generate a dynamic palette of colors
export const generateColorPalette = (
  baseColor: string,
  numColors: number
): string[] => {
  const colors = [];

  // Helper function to adjust color brightness
  const shadeColor = (color: string, percent: number): string => {
    const num = parseInt(color.slice(1), 16);
    const amt = Math.round(2.55 * percent);
    const R = (num >> 16) + amt;
    const G = ((num >> 8) & 0x00ff) + amt;
    const B = (num & 0x0000ff) + amt;

    return `#${(
      0x1000000 +
      (R < 255 ? (R < 1 ? 0 : R) : 255) * 0x10000 +
      (G < 255 ? (G < 1 ? 0 : G) : 255) * 0x100 +
      (B < 255 ? (B < 1 ? 0 : B) : 255)
    )
      .toString(16)
      .slice(1)
      .toUpperCase()}`;
  };

  // Create different shades by varying brightness
  for (let i = 0; i < numColors; i++) {
    const percent = (i / numColors) * 50 - 25; // Distribute across light to dark
    colors.push(shadeColor(baseColor, percent));
  }

  return colors;
};

export const extendWithColor = (
  aggregatedData: { key: string; value: number }[],
  baseColor: string
): VisualisedData[] => {
  // Generate dynamic color palette based on the number of categories
  const colorPalette = generateColorPalette(baseColor, aggregatedData.length);

  return aggregatedData.map((data, index) => {
    return {
      ...data,
      fill: colorPalette[index % colorPalette.length], // Cycle through the palette
    };
  });
};

const chartConfig = {} satisfies ChartConfig;

export function PiechartType({
  groupByKey,
  operation,
  baseColor,
  chartTitle,
  labelValueDescription,
}: PiechartProps) {
  const [data, setData] = React.useState<any>(null);
  const [projectCount, setProjectCount] = React.useState<number>(0);

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
            type: res.type,
          } as Project;
        return null;
      })
      .filter((el) => el !== null);

    setProjectCount(filtered.length);
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
    <div className="w-1/3">
      <Card className="flex flex-col -mt-8">
        <CardHeader className="items-center pb-0">
          <CardTitle>{chartTitle}</CardTitle>{" "}
          {/* Parameterized here for chartTitle */}
          {/* <CardDescription>January - June 2024</CardDescription>  */}
        </CardHeader>
        <CardContent className="flex-1 pb-0">
          <ChartContainer
            config={chartConfig}
            className="mx-auto aspect-square max-h-[190px]"
          >
            <PieChart>
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel />}
              />
              <Pie
                data={data}
                dataKey="value"
                nameKey="key"
                innerRadius={60}
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
                        >
                          <tspan
                            x={viewBox.cx}
                            y={viewBox.cy}
                            className="fill-foreground text-3xl font-bold"
                          >
                            {projectCount}
                          </tspan>
                          <tspan
                            x={viewBox.cx}
                            y={(viewBox.cy || 0) + 24}
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
