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
      <TooltipTrigger className="flex size-12/12 items-center justify-start">
        <PizzaRosetteIcon
          values={props.values}
          className="size-8 md:size-10"
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
