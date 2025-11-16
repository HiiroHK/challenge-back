import { SquarePen, Trash2 } from "lucide-react";
import { Card } from "@/components/ui/card";

import { SalesForm } from "@/components/Sales/SalesForm";

interface CardSalesProps {
  name: string;
  email: string;
  phone: string;
  type: string;
  data: string;
  grossvalue: string;
  discount: string;
  deduction: string;
  finalvalue: string;
}

export function CardSales({
  name,
  email,
  phone,
  type,
  data,
  grossvalue,
  discount,
  deduction,
  finalvalue,
}: CardSalesProps) {
  return (
    <div>
      {/*card de edição da venda*/}
      <Card className="bg-white p-4 transition duration-[0.5s] hover:bg-gray-100">
        {/*Header*/}
        <header className="flex flex-col gap-4 lg:flex-row lg:justify-between">
          <div className="flex flex-col">
            <h1 className="text-[18px] font-medium">{name}</h1>
            <p>{email}</p>
            <p>{phone}</p>
          </div>
          {/*content*/}
          <div className="flex flex-col">
            <div
              className={`flex items-center justify-center rounded-2xl ${type === "Online" ? "h-7 w-14 bg-black" : "h-7 w-20 bg-gray-200 px-2"}`}
            >
              <span
                className={` ${type === "Online" ? "text-white" : "text-black"}`}
              >
                {type}
              </span>
            </div>
            <p className="flex items-start text-gray-500">{data}</p>
          </div>
        </header>

        {/* Data Area */}
        <main className="flex w-full flex-col justify-between gap-4 text-sm lg:flex-row lg:items-center">
          <div className="grid w-4/5 grid-cols-1 gap-5 lg:grid-cols-4">
            <div>
              <p>Valor bruto</p>
              <p className="text-[16px] font-bold text-green-600">
                R$ {grossvalue}
              </p>
            </div>
            <div>
              <p> Desconto</p>
              <p className="text-[16px] font-bold text-red-600">
                -R$ {discount}
              </p>
            </div>
            <div>
              <p>Deduçoes</p>
              <p className="text-[16px] font-bold text-red-600">
                -R$ {deduction}
              </p>
            </div>
            <div>
              <p>Valor final</p>
              <p className="text-[18px] font-bold text-purple-800">
                R$ {finalvalue}
              </p>
            </div>
          </div>
          {/*Modal de edição do card*/}
          <div className="flex gap-1">
            <SalesForm
              title="Edite sua venda"
              description="Insira os dados novos"
              icon={SquarePen}
            />

            {/*Botão de excluir o card*/}
            <button className="flex h-9 w-9 items-center justify-center rounded-sm border bg-white transition duration-[0.5s] hover:bg-gray-300">
              <Trash2 />
            </button>
          </div>
        </main>
      </Card>
    </div>
  );
}
