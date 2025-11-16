"use client";
import { GitCommitVertical } from "lucide-react";
import { CartesianGrid, Line, LineChart, XAxis } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";
export const description = "A line chart with custom dots";
const chartData = [
  { month: "January", receitas: 186, despesas: 80, lucro: 106 },
  { month: "February", receitas: 305, despesas: 200, lucro: 105 },
  { month: "March", receitas: 237, despesas: 120, lucro: 117 },
  { month: "April", receitas: 73, despesas: 190, lucro: -117 },
  { month: "May", receitas: 209, despesas: 130, lucro: 179 },
  { month: "June", receitas: 214, despesas: 140, lucro: 174 },
];
const chartConfig = {
  receitas: {
    label: "Receitas",
    color: "var(--chart-1)",
  },
  despesas: {
    label: "Despesas",
    color: "var(--chart-2)",
  },
  lucro: {
    label: "Lucro",
    color: "var(--chart-3)",
  },
} satisfies ChartConfig;
export function ChartTrendAnalysis() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Analise de tendência</CardTitle>
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
              dataKey="receitas"
              type="natural"
              stroke="var(--color-receitas)"
              strokeWidth={2}
              dot={({ cx, cy, payload }) => {
                const r = 24;
                return (
                  <GitCommitVertical
                    key={payload.month}
                    x={cx - r / 2}
                    y={cy - r / 2}
                    width={r}
                    height={r}
                    fill="hsl(var(--background))"
                    stroke="var(--color-receitas)"
                  />
                );
              }}
            />
            <Line
              dataKey="despesas"
              type="natural"
              stroke="var(--color-despesas)"
              strokeWidth={2}
              dot={({ cx, cy, payload }) => {
                const r = 24;
                return (
                  <GitCommitVertical
                    key={payload.month}
                    x={cx - r / 2}
                    y={cy - r / 2}
                    width={r}
                    height={r}
                    fill="hsl(var(--background))"
                    stroke="var(--color-despesas)"
                  />
                );
              }}
            />
            <Line
              dataKey="lucro"
              type="natural"
              stroke="var(--color-lucro)"
              strokeWidth={2}
              dot={({ cx, cy, payload }) => {
                const r = 24;
                return (
                  <GitCommitVertical
                    key={payload.month}
                    x={cx - r / 2}
                    y={cy - r / 2}
                    width={r}
                    height={r}
                    fill="hsl(var(--background))"
                    stroke="var(--color-lucro)"
                  />
                );
              }}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
