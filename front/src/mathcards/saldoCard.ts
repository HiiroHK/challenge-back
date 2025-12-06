import { useState, useEffect } from "react";
import { AllSales } from "@/http/sales/allSales";
import { AllExpenses } from "@/http/expenses/allExpenses";

export type FilterPeriod = "semana" | "mes" | "ano";

export function useNetBalance(periodFilter: FilterPeriod = "mes") {
  const [saldoLiquido, setSaldoLiquido] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadBalance() {
      setLoading(true);
      setError(null);
      try {
        // Entradas (vendas)
        const salesResp: any[] = await AllSales();
        const entradas = salesResp.map((s) => ({
          valor: Number(s.valorLiquido ?? 0),
          data: s.dataVenda ? new Date(s.dataVenda).toISOString() : "",
        }));

        // Saídas (despesas)
        const expensesResp: any[] = await AllExpenses();
        const saidas = expensesResp.map((g) => ({
          valor: Number(g.valor ?? g.value ?? 0),
          data: g.date ? new Date(g.date).toISOString() : "",
        }));

        const today = new Date();

        function filterByPeriod(item: { data: string }) {
          const date = new Date(item.data);
          switch (periodFilter) {
            case "semana":
              const weekAgo = new Date();
              weekAgo.setDate(today.getDate() - 7);
              return date >= weekAgo && date <= today;
            case "mes":
              const monthAgo = new Date();
              monthAgo.setMonth(today.getMonth() - 1);
              return date >= monthAgo && date <= today;
            case "ano":
              const yearAgo = new Date();
              yearAgo.setFullYear(today.getFullYear() - 1);
              return date >= yearAgo && date <= today;
            default:
              return true;
          }
        }

        const entradasFiltradas = entradas.filter(filterByPeriod);
        const saidasFiltradas = saidas.filter(filterByPeriod);

        const totalEntradas = entradasFiltradas.reduce(
          (acc, e) => acc + e.valor,
          0,
        );
        const totalSaidas = saidasFiltradas.reduce(
          (acc, s) => acc + s.valor,
          0,
        );

        setSaldoLiquido(totalEntradas - totalSaidas);
      } catch (err) {
        console.error(err);
        setError("Erro ao calcular saldo líquido.");
      } finally {
        setLoading(false);
      }
    }

    loadBalance();
  }, [periodFilter]);

  return { saldoLiquido, loading, error };
}
