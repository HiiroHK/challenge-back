"use client";

import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";
export const description = "An area chart with a legend";
const chartData = [
  { month: "January", receita: 186, despesa: 80 },
  { month: "February", receita: 305, despesa: 200 },
  { month: "March", receita: 237, despesa: 120 },
  { month: "April", receita: 73, despesa: 190 },
  { month: "May", receita: 209, despesa: 130 },
  { month: "June", receita: 214, despesa: 140 },
];
const chartConfig = {
  receita: {
    label: "Receita",
    color: "var(--chart-1)",
  },
  despesa: {
    label: "Despesa",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig;
export function ChartSaleXEpxenses() {
  return (
    <div className="w-full">
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Receitas vs Despesas</CardTitle>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig}>
            <AreaChart
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
                content={<ChartTooltipContent indicator="line" />}
              />
              <Area
                dataKey="receita"
                type="natural"
                fill="var(--color-receita)"
                fillOpacity={0.4}
                stroke="var(--color-receita)"
                stackId="a"
              />
              <Area
                dataKey="despesa"
                type="natural"
                fill="var(--color-despesa)"
                fillOpacity={0.4}
                stroke="var(--color-despesa)"
                stackId="a"
              />
              <ChartLegend content={<ChartLegendContent />} />
            </AreaChart>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
  );
}
