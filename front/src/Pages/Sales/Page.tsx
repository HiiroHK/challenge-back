import { Aside } from "@/components/Aside";
import { CardSales } from "@/components/Sales/Cardsales";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SalesForm } from "@/components/Sales/CreateSalesForm";
import {
  ChevronLeft,
  ChevronRight,
  FilterIcon,
  Search,
  Plus,
} from "lucide-react";
import { useEffect, useState } from "react";
import { FiltroPorPeriodo } from "@/components/Dashboard/FiltroPorPeriodo";
import { RangeCalendar } from "@/components/Dashboard/RangeCalendar";
import { AllSales } from "@/http/sales/allSales";

{
  /*Tipo dos daos de vendas*/
}
type vendas = {
  id: string;
  name: string;
  email: string;
  phone: string;
  modality: string;
  data: string;
  grossvalue: number;
  discount: number;
  deduction: number;
  finalvalue: number;
};
type Filter = "semana" | "mes" | "ano";
export function Sales() {
  const [selectedFilter, setselectedFilter] = useState<Filter>("mes");

  const [salesList, setsalesList] = useState<vendas[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  {
    /*Lógica do filtro do tipo de venda*/
  }
  const [selectedVendas, setSelectedVendas] = useState<string>("all");
  const filteredVendas =
    selectedVendas === "all"
      ? salesList
      : salesList.filter((Vendas) => Vendas.modality === selectedVendas);

  async function loadSales() {
    setLoading(true);
    setError(null);
    try {
      const resp = await AllSales();
      const mapped: vendas[] = resp.map((e: any) => ({
        id: e.id,
        modality: e.modalidade === "ONLINE" ? "Online" : "Presencial",
        name: e.nomeAluno ?? "Venda",
        email: e.email ?? "",
        phone: e.telefone ?? "",
        data: e.dataVenda
          ? new Date(e.dataVenda).toLocaleDateString("pt-BR")
          : "",
        grossvalue: e.valorBruto ?? 0,
        discount: e.desconto ?? 0,
        deduction: e.imposto ?? 0,
        finalvalue: e.valorLiquido ?? 0,
      }));
      setsalesList(mapped);
    } catch (err) {
      console.error(err);
      setError("Erro ao carregar vendas.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadSales();
  }, []);

  return (
    <div className="flex h-screen bg-gray-100">
      <Aside />
      <div className="flex w-full flex-col gap-2 overflow-auto p-5">
        {/*Header*/}
        <div className="flex w-full flex-col justify-between lg:flex-row lg:items-center">
          <div className="flex flex-col gap-1">
            <h1 className="text-4xl font-bold">Módulo de Vendas</h1>
            <p className="text-[18px] text-gray-500">
              Gerencie vendas de cursos online e presenciais
            </p>
          </div>

          <SalesForm
            title="Cadastre sua nova venda"
            description="Insira os dados da venda"
            trigger="Nova venda"
            icon={Plus}
          />
        </div>
        {/*Input de pesquisa e select*/}
        <div className="flex w-full flex-col gap-4 rounded-lg bg-white p-5 shadow lg:flex-row lg:items-center">
          <div className="flex w-full items-center gap-3 rounded-lg border px-3 py-2 lg:w-5/6">
            <Search />
            <input
              type="text"
              placeholder="Buscar por nome ou e-mail..."
              className="w-full outline-none"
            />
          </div>
          <FiltroPorPeriodo
            value={selectedFilter}
            onChange={setselectedFilter}
          />
          <RangeCalendar />
          {/*select e filtro do tipo de venda*/}
          <div className="h-full w-full lg:w-1/6">
            <Select
              value={selectedVendas}
              onValueChange={(value) => setSelectedVendas(value)}
            >
              <SelectTrigger className="flex w-full cursor-pointer p-5">
                <FilterIcon />
                <SelectValue placeholder="Todos os tipos" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos os tipos</SelectItem>
                <SelectItem value="Online">Online</SelectItem>
                <SelectItem value="Presencial">Presencial</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        {/*Tabela de cards de vendas*/}
        <section className="mt-2 grid gap-5 rounded-md border bg-white p-4">
          <h1 className="text-2xl font-semibold">Vendas cadastradas</h1>
          {error && <p className="text-red-500">{error}</p>}
          {filteredVendas.map((Vendas) => (
            <CardSales
              id={Vendas.id}
              name={Vendas.name}
              email={Vendas.email}
              phone={Vendas.phone}
              type={Vendas.modality}
              data={Vendas.data}
              grossvalue={Vendas.grossvalue}
              discount={Vendas.discount}
              deduction={Vendas.deduction}
              finalvalue={Vendas.finalvalue}
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
