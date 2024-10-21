export interface Project {
  name: string;
  tvl: number;
  chain: string;
  stage: number;
  type: string;
}

export interface VisualisedData {
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

export interface PiechartProps {
  groupByKey: keyof Project; // Key to group by (e.g., "stage")
  operation: "sum" | "count"; // Operation to perform (e.g., "count", "sum")
  baseColor: string; // Base color for generating the palette
  chartTitle: string; // Title for the chart (e.g., "Projects by Stage")
  labelValueDescription: string; // The description below the value (e.g., "Level Two")
}
