import { CalendarIcon } from "lucide-react";

import { Button } from "../ui/button";

import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import React from "react";
import { format } from "date-fns";
type DateRange = {
  to: Date;
  from: Date;
};
export function RangeCalendar() {
  const [date, setDate] = React.useState<DateRange>({
    to: new Date(),
    from: new Date(),
  });

  const formattedRange =
    date.from && date.to
      ? `${format(date.from, "dd/MM/yyyy")} - ${format(date.to, "dd/MM/yyyy")}`
      : "Selecionar período";

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className={cn(
            "w-full cursor-pointer justify-start text-left font-bold whitespace-nowrap lg:w-[14rem]",
            !date.from && "text-muted-foreground",
          )}
        >
          <CalendarIcon className="mr-1 h-4 w-4" />
          {formattedRange}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="range"
          selected={date}
          onSelect={(selected) => {
            setDate(selected as DateRange);
          }}
          numberOfMonths={1}
        />
      </PopoverContent>
    </Popover>
  );
}
