"use client";

import { Pie, PieChart } from "recharts";
import tailwindcss from "tailwindcss/colors";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";
export const description = "A pie chart with a custom label";
const chartData = [
  { gastos: "Aluguel", valor: 275, fill: tailwindcss.purple[500] },
  { gastos: "Folha de Pagamento", valor: 200, fill: tailwindcss.red[500] },
  { gastos: "Energia", valor: 187, fill: tailwindcss.yellow[500] },
  { gastos: "Internet", valor: 173, fill: tailwindcss.green[500] },
  { gastos: "Manutenção", valor: 90, fill: tailwindcss.blue[500] },
  { gastos: "Suprimentos", valor: 45, fill: tailwindcss.indigo[500] },
  { gastos: "Marketing", valor: 30, fill: tailwindcss.emerald[500] },
  { gastos: "Outros", valor: 10, fill: tailwindcss.zinc[500] },
];
const chartConfig = {
  valor: {
    label: "Valor",
  },
  aluguel: {
    label: "Aluguel",
    color: "var(--chart-1)",
  },
  "Folha-de Pagamento": {
    label: "Folha de Pagamento",
    color: "var(--chart-2)",
  },
  Energia: {
    label: "Energia",
    color: "var(--chart-3)",
  },
  internet: {
    label: "Internet",
    color: "var(--chart-4)",
  },
  manutenção: {
    label: "Manutenção",
    color: "var(--chart-5)",
  },
  suprimentos: {
    label: "Suprimentos",
    color: "var(--chart-6)",
  },
  marketing: {
    label: "Marketing",
    color: "var(--chart-7)",
  },
  outros: {
    label: "Outros",
    color: "var(--chart-8)",
  },
} satisfies ChartConfig;
export function ChartExpenseDistribution() {
  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Distribuição de Gastos</CardTitle>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px] text-[10px] lg:w-100"
        >
          <PieChart>
            <ChartTooltip
              content={<ChartTooltipContent nameKey="valor" hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="valor"
              labelLine={false}
              label={({ ...props }) => {
                return (
                  <text
                    cx={props.cx}
                    cy={props.cy}
                    x={props.x}
                    y={props.y}
                    textAnchor={props.textAnchor}
                    dominantBaseline={props.dominantBaseline}
                    fill="hsla(var(--foreground))"
                  ></text>
                );
              }}
              nameKey="gastos"
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
