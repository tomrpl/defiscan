// Define the risk matrix lookup

import { Sentiment } from "../types";

// TODO: update with real texts
const riskMatrix = {
  Chain: {
    H: "Protocol is not upgradeable or upgrades cannot materially change the expected performance.",
    M: "Possible protocol upgrades can result in interruptions or otherwise materially change the expected performance of the protocol.",
    L: "Possible protocol upgrades can result in loss or temporary freezing of assets.",
  },
  Upgradeability: {
    H: "There is no timelock to delay contract upgrades.",
    M: "Contract upgradeability has moderate checks.",
    L: "Contracts have stringent timelocks for upgradeability.",
  },
  Autonomy: {
    H: "Users can lose access to core protocol functions at any time.",
    M: "Access to protocol functions may be temporarily disrupted.",
    L: "Users are unlikely to lose access to core protocol functions.",
  },
  ExitWindow: {
    H: "User assets can be frozen without notice.",
    M: "Possible temporary freezing of assets.",
    L: "Low likelihood of assets being frozen.",
  },
  Accessibility: {
    H: "No exit window is provided during major changes.",
    M: "An exit window exists, but with limited notice.",
    L: "Users are guaranteed an exit window for all major changes.",
  },
};

// Define the risk categories and levels from the input array
const risks = "['H','L','L','L','M']";

// Parse the risks string into an array

type Level = "H" | "M" | "L";

// Define a mapping from Level to Sentiment
const levelToSentimentMap: Record<Level, Sentiment> = {
  H: "high",
  M: "medium",
  L: "low",
};

type Category =
  | "Chain"
  | "Upgradeability"
  | "Autonomy"
  | "ExitWindow"
  | "Accessibility";

const categories = Object.keys(riskMatrix) as Category[];

// TODO: update to include "sentiment" and "warning"
// what are they actually for
// sentiment has something to do sentimentToFillColor

// Create a function to get risk descriptions
export function getRiskDescriptions(risks: string): {
  name: string;
  sentiment: Sentiment;
  description: string;
}[] {
  const parsedRisks = JSON.parse(risks.replace(/'/g, '"'));
  return parsedRisks.map((level: Level, index: number) => {
    const category = categories[index];
    return {
      name: category,
      sentiment: levelToSentimentMap[level],
      description: riskMatrix[category][level], // No more error here
    };
  });
}

// Get the risk descriptions for each category and level
const riskDescriptions = getRiskDescriptions(risks);

console.log(riskDescriptions);
