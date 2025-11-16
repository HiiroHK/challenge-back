import { InfoCard } from "@/components/Dashboard/InfoCard";
import { Aside } from "@/components/Aside";
import {
  BanknoteArrowDown,
  ChartNoAxesCombined,
  TrendingDown,
  TrendingUp,
  TrendingUpDown,
} from "lucide-react";
import { Button } from "@/components/Dashboard/Button";

import { RangeCalendar } from "@/components/Dashboard/RangeCalendar";

import { useEffect, useState } from "react";

import { getTotalSales, type totalSalesResponse } from "@/http/getTotalSales";

import {
  getTotalExpenses,
  type totalExpensesResponse,
} from "@/http/getTotalExpenses";
import { FiltroPorPeriodo } from "@/components/Dashboard/FiltroPorPeriodo";
import { ToggleButton } from "../../components/Dashboard/ToggleButton";
import { useNavigate } from "react-router-dom";

type Filter = "semana" | "mes" | "ano";
export function Dashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (!token) {
      navigate("/login");
    }
  }, [navigate]);
  const [selectedFilter, setselectedFilter] = useState<Filter>("mes");

  //Funções para obter o total de vendas
  const [totalSales, setTotalSales] = useState<totalSalesResponse[]>([]);

  async function getTotalSale() {
    try {
      const result = await getTotalSales();
      setTotalSales(result);
    } catch (error) {
      console.log(error);
    }
  }
  const totalSale = totalSales.reduce((acc, sales) => {
    return acc + sales.valor;
  }, 0);

  useEffect(() => {
    getTotalSale();
  }, []);

  //Funções para obter o total de despesas

  const [totalExpenses, setTotalExpenses] = useState<totalExpensesResponse[]>(
    [],
  );
  async function getTotalExpense() {
    try {
      const result = await getTotalExpenses();
      setTotalExpenses(result);
    } catch (error) {
      console.log(error);
    }
  }
  const totalExpense = totalExpenses.reduce((acc, expenses) => {
    return acc + expenses.valor;
  }, 0);

  useEffect(() => {
    getTotalExpense();
  }, []);

  // Calculo saldo liquido

  const saldoLiquido = totalSale - totalExpense;

  return (
    <div className="flex h-screen bg-gray-100">
      <Aside />
      <main className="flex w-full flex-col gap-2 overflow-auto p-5">
        <header className="flex flex-col items-center justify-between gap-4 lg:flex-row">
          <div>
            <h1 className="text-4xl font-bold">Dashboard Financeiro</h1>
            <p className="text-[18px] text-gray-500">
              Visão geral das finanças da Codi Academy
            </p>
          </div>
          {/* Filter por periodo e por data selecionada */}
          <div className="flex flex-col gap-2 lg:flex-row">
            <FiltroPorPeriodo
              value={selectedFilter}
              onChange={setselectedFilter}
            />
            <RangeCalendar />
          </div>
        </header>
        {/* Cards de resumos */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-4">
          <InfoCard
            iconMain={TrendingUp}
            iconSecundary={ChartNoAxesCombined}
            name="  Total de Vendas"
            value={totalSale}
            color="green"
          />
          <InfoCard
            iconMain={TrendingDown}
            iconSecundary={BanknoteArrowDown}
            name="  Total de Despesas"
            value={totalExpense}
            color="red"
          />
          <InfoCard
            iconMain={TrendingUpDown}
            iconSecundary={BanknoteArrowDown}
            name="Saldo Líquido"
            value={saldoLiquido}
            color="blue"
          />
        </section>
        {/* Gráfico */}

        <section className="rounded-lg border-2 border-purple-200 bg-purple-100 sm:p-6">
          <div className="mb-4 justify-end">
            <ToggleButton
              filter={selectedFilter}
              setFilter={setselectedFilter}
            />
          </div>
        </section>
        {/* Ações Rápidas */}
        <section className="mt-6 flex flex-col rounded-lg border-2 border-purple-200 bg-purple-100 p-4 sm:p-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            <h3 className="text-xl font-semibold text-[#A243D2]">
              Ações Rápidas
            </h3>
          </div>
          <div className="flex flex-col gap-4 md:flex-row">
            <Button to="/vendas"> Gerenciar Vendas</Button>
            <Button to="/gastos">Gerenciar Despesas</Button>
            <Button to="/relatorios"> Vizualizar Relatórios</Button>
          </div>
        </section>
      </main>
    </div>
  );
}
