import { Tooltip, TooltipContent, TooltipTrigger } from "./tooltip/tooltip";
import { type RosetteValue } from "./types";
import { PizzaRosetteIcon } from "./rosette-icon";
import { PizzaRosetteTooltip } from "./rosette-tooltip";
import { RosetteTooltipContextProvider } from "./rosette-tooltip-context";

export interface PizzaRosetteCellProps {
  values: RosetteValue[];
  isUnderReview?: boolean;
}

export function PizzaRosetteCell(props: PizzaRosetteCellProps) {
  const isUnderReview =
    !!props.isUnderReview ||
    props.values.some((value) => value.sentiment === "UnderReview");

  return (
    <Tooltip>
      <TooltipTrigger className="flex size-full items-center justify-start pl-2">
        <PizzaRosetteIcon
          values={props.values}
          className="size-6 md:size-8"
          isUnderReview={isUnderReview}
          background={false}
        />
      </TooltipTrigger>
      <TooltipContent fitContent>
        <PizzaRosetteTooltip
          values={props.values}
          isUnderReview={isUnderReview}
        />
      </TooltipContent>
    </Tooltip>
  );
}
