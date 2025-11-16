"use client";

import { CartesianGrid, Line, LineChart, XAxis } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";
export const description = "A linear line chart";
const chartData = [
  { month: "January", lucro: 186 },
  { month: "February", lucro: 305 },
  { month: "March", lucro: 237 },
  { month: "April", lucro: 73 },
  { month: "May", lucro: 209 },
  { month: "June", lucro: 214 },
];
const chartConfig = {
  lucro: {
    label: "Lucro",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig;
export function ChartProfitEvolution() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Evolução do Lucro</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Line
              dataKey="lucro"
              type="linear"
              stroke="var(--color-lucro)"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
