import { Aside } from "@/components/Aside";
import { CardSales } from "@/components/Sales/Cardsales";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SalesForm } from "@/components/Sales/SalesForm";
import {
  ChevronLeft,
  ChevronRight,
  FilterIcon,
  Search,
  Plus,
} from "lucide-react";
import { useState } from "react";
import { FiltroPorPeriodo } from "@/components/Dashboard/FiltroPorPeriodo";
import { RangeCalendar } from "@/components/Dashboard/RangeCalendar";

{
  /*Tipo dos daos de vendas*/
}
type Vendas = {
  id: string;
  name: string;
  email: string;
  phone: string;
  type: string;
  data: string;
  grossvalue: string;
  discount: string;
  deduction: string;
  finalvalue: string;
};
type Filter = "semana" | "mes" | "ano";
export function Sales() {
  const [selectedFilter, setselectedFilter] = useState<Filter>("mes");
  const [vendasList] = useState<Vendas[]>([
    {
      id: "1",
      name: "Gabriel",
      email: "Gabriel@gmail.com",
      phone: "(32)1111-1111",
      type: "Presencial",
      data: "12-02-25",
      grossvalue: "3.500,00",
      discount: "100,00",
      deduction: "200,00",
      finalvalue: "3.470,00",
    },
    {
      id: "2",
      name: "Eduardo",
      email: "Eduardo@gmail.com",
      phone: "(32)2222-2222",
      type: "Presencial",
      data: "14-01-25",
      grossvalue: "3.250,00",
      discount: "90,00",
      deduction: "200,00",
      finalvalue: "2.980,00",
    },
    {
      id: "3",
      name: "Jander",
      email: "Jander@gmail.com",
      phone: "(32)3333-3333",
      type: "Presencial",
      data: "16-01-25",
      grossvalue: "3.300,00",
      discount: "120,00",
      deduction: "170,00",
      finalvalue: "3.010,00",
    },
    {
      id: "4",
      name: "Vanessa",
      email: "Vanessa@gmail.com",
      phone: "(32)4444-4444",
      type: "Online",
      data: "21-01-25",
      grossvalue: "2.800,00",
      discount: "110,00",
      deduction: "163,00",
      finalvalue: "2.527,00",
    },
    {
      id: "5",
      name: "Bruno",
      email: "Bruno@gmail.com",
      phone: "(32)5555-5555",
      type: "Presencial",
      data: "01-01-25",
      grossvalue: "2.500,00",
      discount: "150,00",
      deduction: "220,00",
      finalvalue: "3.130,00",
    },
    {
      id: "6",
      name: "Max",
      email: "Max@gmail.com",
      phone: "(32)6666-6666",
      type: "Online",
      data: "01-01-25",
      grossvalue: "2.600,00",
      discount: "60,00",
      deduction: "180,00",
      finalvalue: "2.360,00",
    },
    {
      id: "7",
      name: "Helisson",
      email: "Helisson@gmail.com",
      phone: "(32)7777-7777",
      type: "Online",
      data: "01-01-25",
      grossvalue: "2.800,00",
      discount: "60,00",
      deduction: "180,00",
      finalvalue: "2.360,00",
    },
    {
      id: "8",
      name: "Lucas",
      email: "Lucas@gmail.com",
      phone: "(32)8888-8888",
      type: "Online",
      data: "01-01-25",
      grossvalue: "2.950,00",
      discount: "130,00",
      deduction: "190,00",
      finalvalue: "2.460,00",
    },
  ]);

  {
    /*Lógica do filtro do tipo de venda*/
  }
  const [selectedVendas, setSelectedVendas] = useState<string>("all");
  const filteredVendas =
    selectedVendas === "all"
      ? vendasList
      : vendasList.filter((Vendas) => Vendas.type === selectedVendas);

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
          {filteredVendas.map((Vendas) => (
            <CardSales
              name={Vendas.name}
              email={Vendas.email}
              phone={Vendas.phone}
              type={Vendas.type}
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
