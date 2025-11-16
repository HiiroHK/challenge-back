import { Button } from "../ui/button";
import { Funnel } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

type Filter = "semana" | "mes" | "ano";
type Props = {
  value: Filter;
  onChange: (filter: Filter) => void;
};
//Componente de filtro que exibe o grafico de acordo com o que foi selecionado no filtro
export function FiltroPorPeriodo({ value, onChange }: Props) {
  const filters: Filter[] = ["semana", "mes", "ano"];

  return (
    <Popover>
      <PopoverTrigger>
        <Button variant="outline" className="cursor-pointer">
          <Funnel className="mr-2 h-4 w-4" />
          Visualizar por
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-64">
        <div className="flex justify-between gap-2">
          {filters.map((filter) => (
            <Button
              key={filter}
              variant={value === filter ? "default" : "outline"}
              className="flex-1 capitalize"
              onClick={() => onChange(filter)}
            >
              {filter}
            </Button>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
}
