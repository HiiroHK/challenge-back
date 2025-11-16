import { SquarePen, Trash2 } from "lucide-react";
import { Card } from "@/components/ui/card";
import { ExpensesForm } from "@/components/Expenses/ExpensesForm";

interface CardExpensesProps {
  title: string;
  description: string;
  data: string;
  fixed?: string;

  value: string;
}

export function CardExpenses({
  title,
  description,
  data,
  fixed,

  value,
}: CardExpensesProps) {
  return (
    <div>
      {/*Card de edição do gasto*/}
      <Card className="bg-white p-2 transition duration-[0.5s] hover:bg-gray-100">
        {/*Header*/}
        <header className="flex flex-col justify-between gap-2 lg:flex-row">
          <div className="flex flex-col gap-2 md:flex-row md:items-center lg:gap-5">
            <h1 className="w-fit text-[18px] font-medium">{title}</h1>
            {/*Content*/}
            <div
              className={`flex w-fit items-center rounded-2xl px-2 ${fixed === "Fixa" ? "w-11 bg-red-500" : "w-[70px] bg-gray-200"}`}
            >
              <span
                className={`${fixed === "Fixa" ? "text-white" : "text-black"}`}
              >
                {fixed}
              </span>
            </div>
          </div>

          <h1 className="text-2xl font-bold text-red-600">R$ {value}</h1>
        </header>
        <div className="mr-4 flex justify-between">
          <div className="text-gray-500">
            <p>{description}</p>
            <p>{data}</p>
          </div>
          {/*Modal de edição de gasto*/}
          <div className="flex gap-1">
            <ExpensesForm
              title="Edite sua despesa"
              description="Insira os dados novos"
              icon={SquarePen}
            />

            {/*Botão de excluir o card*/}
            <button className="flex h-9 w-9 items-center justify-center rounded-sm border bg-white transition duration-[0.5s] hover:bg-gray-300">
              <Trash2 />
            </button>
          </div>
        </div>
      </Card>
    </div>
  );
}
