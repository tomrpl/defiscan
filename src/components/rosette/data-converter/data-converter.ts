// Define the risk matrix lookup

import { Sentiment } from "../types";

// TODO: update with real texts
const riskMatrix = {
  Chain: {
    H: "Chain is sufficiently decentralized.",
    M: "Chain is on the journey to become sufficiently decentralized.",
    L: "Chain is not sufficiently decentralized.",
  },
  Upgradeability: {
    H: "Protocol is not upgradeable or upgrades cannot materially change the expected performance.",
    M: "Possible protocol upgrades can result in interruptions or otherwise materially change the expected performance of the protocol. This includes loss or freezing of unclaimed yield.",
    L: "Possible protocol upgrades can result in loss or temporary freezing of assets.",
  },
  Autonomy: {
    H: "Protocol does not have external dependencies, has independent fallbacks in place or failure does not materially change the expected performance.",
    M: "Failure of a protocol dependency can result in interruptions or otherwise materially change the expected performance of the protocol.",
    L: "Failure of a protocol dependency can result in the loss or temporary freezing of assets.",
  },
  ExitWindow: {
    H: "Contracts are not upgradable or a sufficiently long exit window is enforced.",
    M: "An exit window is enforced but is not sufficiently long.",
    L: "Users have no window to exit in case of an unwanted upgrade or change because contracts can be upgraded or changes made instantaneously.",
  },
  Accessibility: {
    H: "Users are able to access the protocol through multiple, independent user interfaces (websites, wallets, local apps).",
    M: "A single user interface exists with access to backup solutions such as a self-hosting app.",
    L: "Only a single user interface exists without a backup solution.",
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
