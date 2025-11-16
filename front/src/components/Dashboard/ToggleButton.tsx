import { Charts } from "@/components/Charts";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { useState } from "react";

interface Props {
  filter: "semana" | "mes" | "ano";
  setFilter: React.Dispatch<React.SetStateAction<"semana" | "mes" | "ano">>;
}
//Componente que exibe o gráfico com base no valor selecionado
export function ToggleButton({ filter /*setFilter*/ }: Props) {
  const [chartType, setChartType] = useState<"barChart" | "lineChart">(
    "barChart",
  );

  return (
    <div className="space-x-1">
      <div className="flex justify-end">
        <ToggleGroup
          type="single"
          value={chartType}
          onValueChange={(value) => {
            if (value) setChartType(value as "barChart" | "lineChart");
          }}
        >
          <ToggleGroupItem value="barChart" className="bg-purple-500">
            Gráfico de Barras
          </ToggleGroupItem>
          <ToggleGroupItem
            className="bg-purple-500 text-black"
            value="lineChart"
            disabled={chartType === "barChart" ? false : true}
          >
            Gráfico de Linhas
          </ToggleGroupItem>
        </ToggleGroup>
      </div>

      {/* Exibe o gráfico com base no valor selecionado */}
      <div className="mt-4 h-auto">
        <Charts filter={filter} tipo={chartType} />
      </div>
    </div>
  );
}
