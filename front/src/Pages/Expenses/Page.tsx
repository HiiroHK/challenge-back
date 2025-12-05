import { Aside } from "@/components/Aside";
import { CardExpenses } from "@/components/Expenses/Cardexpenses";
import { CardsReports } from "@/components/Reports/CardsReports";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ExpensesForm } from "@/components/Expenses/ExpensesForm";
import {
  Calendar,
  ChevronLeft,
  ChevronRight,
  FilterIcon,
  Plus,
  Search,
  TrendingDown,
} from "lucide-react";
import { useEffect, useState } from "react";
import { FiltroPorPeriodo } from "@/components/Dashboard/FiltroPorPeriodo";
import { RangeCalendar } from "@/components/Dashboard/RangeCalendar";
import { AllExpenses } from "@/http/expenses/allExpenses";

{
  /*Tipos de dados de gastos*/
}
type Gastos = {
  id: string;
  title: string;
  description: string;
  data: string;
  fixed: string;
  Appellant: string;
  value: number;
};

type Filter = "semana" | "mes" | "ano";
export function Expenses() {
  const [selectedFilter, setselectedFilter] = useState<Filter>("mes");
  {
    /*Gastos cadastrados*/
  }
  const [expensesList, setExpensesList] = useState<Gastos[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  {
    /*Lógica do filtro de gastos*/
  }
  const [selectedfixed, setSelectedfixed] = useState<string>("all");

  async function loadExpenses() {
    setLoading(true);
    setError(null);
    try {
      const resp = await AllExpenses();
      const mapped: Gastos[] = resp.map((e: any) => ({
        id: e.id,
        title: e.name ?? e.title ?? "Despesa",
        description: e.description ?? "",
        data: e.date ? new Date(e.date).toLocaleDateString("pt-BR") : "",
        fixed:
          e.type === "fixedExpense" || e.type === "Fixa" ? "Fixa" : "Variável",
        Appellant: e.appellant ?? "",
        value: Number(e.value ?? e.valor ?? 0),
      }));
      setExpensesList(mapped);
    } catch (err) {
      console.error(err);
      setError("Erro ao carregar despesas");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadExpenses();
  });

  const filteredGastos =
    selectedfixed === "all"
      ? expensesList
      : expensesList.filter((gastos) => gastos.fixed === selectedfixed);

  return (
    <div className="flex h-screen bg-gray-100">
      <Aside />
      <div className="flex w-full flex-col gap-2 overflow-auto p-5">
        {/*Header*/}
        <div className="flex flex-col justify-between lg:flex-row lg:items-center">
          <div className="flex flex-col gap-1">
            <h1 className="text-4xl font-bold">Módulo de Gastos</h1>
            <p className="text-[18px] text-gray-500">
              Gerencie despesas fixas e variáveis
            </p>
          </div>

          <ExpensesForm
            title="Cadastre sua nova despesa"
            description="Insira os dados da despesa"
            trigger="Novo gasto"
            icon={Plus}
          />
        </div>
        {/*Cards com os tipos de despesas*/}
        <section className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <CardsReports
            title={"Despesas fixas"}
            value={4413}
            color={"red"}
            icon={Calendar}
            bgColor={"red"}
          />
          <CardsReports
            title={"Despesas variáveis"}
            value={10440}
            color={"orange"}
            icon={TrendingDown}
            bgColor={"orange"}
          />
          <CardsReports
            title={"Total de gastos"}
            value={14850}
            color={"purple"}
            icon={TrendingDown}
            bgColor={"purple"}
          />
        </section>
        {/*Inputs de pesquisa e select*/}
        <div className="flex w-full flex-col gap-4 rounded-lg bg-white p-5 shadow lg:flex-row lg:items-center">
          <div className="flex w-full items-center gap-3 rounded-lg border px-3 py-2 lg:w-5/6">
            <Search />
            <input
              type="text"
              placeholder="Buscar despesas"
              className="w-full outline-none"
            />
          </div>
          <FiltroPorPeriodo
            value={selectedFilter}
            onChange={setselectedFilter}
          />
          <RangeCalendar />
          {/*Select e filtro do tipo de despesa*/}
          <div className="h-full w-full lg:w-1/6">
            <Select
              value={selectedfixed}
              onValueChange={(value) => setSelectedfixed(value)}
            >
              <SelectTrigger className="flex w-full cursor-pointer p-5">
                <FilterIcon />
                <SelectValue placeholder="Todas as categorias" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todas as categrias</SelectItem>
                <SelectItem value="Fixa">Despesas Fixas</SelectItem>
                <SelectItem value="Variável">Despesas Variaveis</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        {/*Tabela de cards de gastos*/}
        <section className="grid gap-5 rounded-md border bg-white p-4">
          <h1 className="text-2xl font-semibold">Todas as depesas</h1>
          {error && <p className="text-red-500">{error}</p>}
          {filteredGastos.map((Gastos) => (
            <CardExpenses
              id={Gastos.id}
              title={Gastos.title}
              description={Gastos.description}
              data={Gastos.data}
              fixed={Gastos.fixed}
              value={Gastos.value}
            />
          ))}
          {/*Botões de paginação*/}
          <div className="mt-1 mr-1 flex justify-end gap-1">
            <ChevronLeft className="h-10 w-10 rounded-[8px] border-2 transition duration-[2s] hover:bg-gray-400" />
            <ChevronRight className="h-10 w-10 rounded-[8px] border-2 transition duration-[2s] hover:bg-gray-400" />
          </div>
        </section>
      </div>
    </div>
  );
}
