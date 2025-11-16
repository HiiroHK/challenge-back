"use client";

import { Pie, PieChart } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";
export const description = "A pie chart with a custom label";
const chartData = [
  { course: "on-Line", valor: 275, fill: "var(--color-onLine)" },
  { course: "presencial", valor: 200, fill: "var(--color-presencial)" },
];
const chartConfig = {
  valor: {
    label: "Valor",
  },
  onLine: {
    label: "On-Line",
    color: "var(--chart-1)",
  },
  presencial: {
    label: "Presencial",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig;
export function ChartRevenueByCourseType() {
  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Receita por tipo de curso</CardTitle>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px] px-0"
        >
          <PieChart>
            <ChartTooltip
              content={<ChartTooltipContent nameKey="valor" hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="valor"
              labelLine={false}
              label={({ payload, ...props }) => {
                return (
                  <text
                    cx={props.cx}
                    cy={props.cy}
                    x={props.x}
                    y={props.y}
                    textAnchor={props.textAnchor}
                    dominantBaseline={props.dominantBaseline}
                    fill="hsla(var(--foreground))"
                  >
                    {payload.course}
                  </text>
                );
              }}
              nameKey="course"
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
