import {
  Bar,
  BarChart,
  CartesianGrid,
  LabelList,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
} from "recharts";
import {
  ChartContainer,
  ChartLegend,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { useEffect, useState } from "react";
import axios from "axios";
import { parseISO, format, getISOWeek } from "date-fns";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type Sale = {
  id: string;
  nome: string;
  curso: string;
  valor: number;
  data: string;
};
type Expense = {
  id: string;
  descricao: string;
  valor: number;
  data: string;
  tipo: string;
  formaPagamento: string;
};
type Props = {
  filter: "semana" | "mes" | "ano";
  tipo: "barChart" | "lineChart";
};

export function Charts({ filter, tipo }: Props) {
  // Buscar os dados da API
  const [dados, setDados] = useState<
    { periodo: string; totalVendas: number; totalDespesas: number }[]
  >([]);

  useEffect(() => {
    Promise.all([
      axios.get<Sale[]>("http://localhost:3000/Vendas"),
      axios.get<Expense[]>("http://localhost:3000/despesas"),
    ])
      .then(([resVendas, resDespesas]) => {
        const vendas: Sale[] = resVendas.data;
        const despesas: Expense[] = resDespesas.data;
        // Agrupar por mês (formato MM/yyyy)
        const agrupado = (items: { data: string; valor: number }[]) => {
          return items.reduce((acc: Record<string, number>, item) => {
            const data = parseISO(item.data);

            let chave = "";
            if (filter === "mes") {
              chave = format(data, "MM/yyyy");
            } else if (filter === "semana") {
              const semana = getISOWeek(data);
              chave = `Semana ${semana} - ${format(data, "MM/yyyy")}`;
            } else if (filter === "ano") {
              chave = format(data, "yyyy");
            }

            acc[chave] = (acc[chave] || 0) + item.valor;
            return acc;
          }, {});
        };
        const vendasAgrupadas = agrupado(vendas);
        const despesasAgrupadas = agrupado(despesas);
        const todosPeriodos = new Set([
          ...Object.keys(vendasAgrupadas),
          ...Object.keys(despesasAgrupadas),
        ]);

        const dadosFormatados = Array.from(todosPeriodos).map((periodo) => {
          let dataSort: Date;

          if (filter === "ano") {
            dataSort = parseISO(`01/01/${periodo}`);
          } else if (filter === "mes") {
            // periodo = "MM/yyyy"
            dataSort = parseISO(`01/${periodo}`);
          } else {
            // periodo = "Semana 3 - 01/2024"
            const partes = periodo.split(" - ")[1]; // "01/2024"
            dataSort = parseISO(`01/${partes}`);
          }

          return {
            periodo,
            totalVendas: vendasAgrupadas[periodo] || 0,
            totalDespesas: despesasAgrupadas[periodo] || 0,
            balanco:
              (vendasAgrupadas[periodo] || 0) -
              (despesasAgrupadas[periodo] || 0),
            dataSort,
          };
        });

        // Ordenar por data real (de forma crescente)
        dadosFormatados.sort(
          (a, b) => a.dataSort.getTime() - b.dataSort.getTime(),
        );

        setDados(dadosFormatados);
      })
      .catch((error) => console.error("Erro ao buscar dados:", error));
  }, [filter]);

  function ChartLegendContent() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "1rem",
          padding: 0,
          margin: 0,
          fontSize: 12,
        }}
      >
        <span style={{ color: "#10B981" }}>⬤ Total de Vendas </span>
        <span style={{ color: "#EF4444" }}>⬤ Total de Despesas </span>
        <span style={{ color: "#6366F1" }}>⬤ Saldo Líquido</span>
      </div>
    );
  }

  return (
    <>
      {tipo === "barChart" && (
        <Card className="max-w-full overflow-x-auto">
          <CardHeader>
            <CardTitle>Receitas vs Despesas vs Lucro </CardTitle>
          </CardHeader>
          <CardContent className="w-full">
            <ChartContainer config={{}} className="min-h-[200px] w-full">
              {/* Passo 4: Exibir os dados usando BarChart */}

              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={dados}>
                  <CartesianGrid vertical={false} />
                  <XAxis dataKey="periodo" />

                  <ChartLegend content={<ChartLegendContent />} />
                  <Bar dataKey="totalVendas" fill="#10B981" name="Vendas" />
                  <Bar dataKey="totalDespesas" fill="#F87171" name="Despesas" />
                  <Bar dataKey="balanco" fill="#6366F1" name="Balanco" />
                </BarChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>
      )}
      {tipo === "lineChart" && (
        <Card className="max-w-full overflow-x-auto">
          <CardHeader>
            <CardTitle>Tendência de Crescimento</CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer config={{}}>
              <LineChart
                data={dados}
                margin={{
                  top: 20,
                  left: 12,
                  right: 12,
                }}
              >
                <CartesianGrid vertical={false} />
                <XAxis dataKey="periodo" />
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent indicator="line" />}
                />

                <Line
                  dataKey="totalVendas"
                  type="natural"
                  stroke="#10B981"
                  strokeWidth={2}
                  dot={{
                    fill: "var(--color-desktop)",
                  }}
                >
                  <LabelList
                    position="top"
                    offset={12}
                    className="fill-foreground"
                    fontSize={12}
                  />
                </Line>
              </LineChart>
            </ChartContainer>
          </CardContent>
        </Card>
      )}
    </>
  );
}
