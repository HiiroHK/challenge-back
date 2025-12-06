import { useState, useEffect } from "react";
import { AllExpenses } from "@/http/expenses/allExpenses";

export type Gastos = {
  id: string;
  title: string;
  description: string;
  data: string;
  fixed: string;
  Appellant: string;
  value: number;
};

export type FilterType = "all" | "Fixa" | "Variável";
export type FilterPeriod = "semana" | "mes" | "ano";

/**
 * Hook para gerenciar gastos e totais
 * @param fixedFilter - opcional: "Fixa", "Variável" ou "all"
 * @param periodFilter - opcional: "semana", "mes" ou "ano"
 */
export function useExpenses(
  fixedFilter: FilterType = "all",
  periodFilter: FilterPeriod = "mes",
) {
  const [expensesList, setExpensesList] = useState<Gastos[]>([]);
  const [totais, setTotais] = useState({
    totalFixas: 0,
    totalVariaveis: 0,
    totalGastos: 0,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadExpenses() {
      setLoading(true);
      setError(null);
      try {
        const resp: any[] = await AllExpenses();
        const mapped: Gastos[] = resp.map((e) => ({
          id: e.id,
          title: e.name ?? e.title ?? "Despesa",
          description: e.description ?? "",
          data: e.date ? new Date(e.date).toISOString() : "",
          fixed: e.type === "Fixa" ? "Fixa" : "Variável",
          Appellant: e.appellant ?? "",
          value: Number(e.value ?? e.valor ?? 0),
        }));

        // Filtrar por período
        const filteredByPeriod = mapped.filter((g) => {
          const today = new Date();
          const gastoDate = new Date(g.data);
          switch (periodFilter) {
            case "semana":
              const weekAgo = new Date();
              weekAgo.setDate(today.getDate() - 7);
              return gastoDate >= weekAgo && gastoDate <= today;
            case "mes":
              const monthAgo = new Date();
              monthAgo.setMonth(today.getMonth() - 1);
              return gastoDate >= monthAgo && gastoDate <= today;
            case "ano":
              const yearAgo = new Date();
              yearAgo.setFullYear(today.getFullYear() - 1);
              return gastoDate >= yearAgo && gastoDate <= today;
            default:
              return true;
          }
        });

        // Filtrar por tipo de gasto
        const filteredByType =
          fixedFilter === "all"
            ? filteredByPeriod
            : filteredByPeriod.filter((g) => g.fixed === fixedFilter);

        // Calcular totais
        const totalFixas = filteredByType
          .filter((g) => g.fixed === "Fixa")
          .reduce((acc, curr) => acc + curr.value, 0);
        const totalVariaveis = filteredByType
          .filter((g) => g.fixed === "Variável")
          .reduce((acc, curr) => acc + curr.value, 0);
        const totalGastos = totalFixas + totalVariaveis;

        setExpensesList(filteredByType);
        setTotais({ totalFixas, totalVariaveis, totalGastos });
      } catch (err) {
        console.error(err);
        setError("Erro ao carregar despesas");
      } finally {
        setLoading(false);
      }
    }

    loadExpenses();
  }, [fixedFilter, periodFilter]);

  return { expensesList, totais, loading, error };
}
