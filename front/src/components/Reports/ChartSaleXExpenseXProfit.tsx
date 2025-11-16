"use client";
import tailwindcss from "tailwindcss/colors";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";
export const description = "A multiple bar chart";
const chartData = [
  { month: "January", receita: 186, despesa: 80, lucro: 106 },
  { month: "February", receita: 305, despesa: 200, lucro: 105 },
  { month: "March", receita: 237, despesa: 120, lucro: 117 },
  { month: "April", receita: 73, despesa: 190, lucro: -117 },
  { month: "May", receita: 209, despesa: 130, lucro: 79 },
  { month: "June", receita: 214, despesa: 140, lucro: 74 },
];
const chartConfig = {
  receita: {
    label: "Receita",
    color: tailwindcss.emerald[500],
  },
  despesa: {
    label: "Despesa",
    color: tailwindcss.red[500],
  },
  lucro: {
    label: "Lucro",
    color: tailwindcss.blue[500],
  },
} satisfies ChartConfig;
export function ChartSaleXExpenseXProfit() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Receitas vs Despesas vs Lucro</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <Bar dataKey="receita" fill="var(--color-receita)" radius={4} />
            <Bar dataKey="despesa" fill="var(--color-despesa)" radius={4} />
            <Bar dataKey="lucro" fill="var(--color-lucro)" radius={4} />
            <ChartLegend content={<ChartLegendContent />} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
