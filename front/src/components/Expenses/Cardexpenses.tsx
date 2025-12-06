import { SquarePen, Trash2 } from "lucide-react";
import { Card } from "@/components/ui/card";
import { UpdateExpensesForm } from "./UpdateExpensesForm";
import { DeleteExpenses } from "@/http/expenses/deleteExpenses";
import { toast } from "sonner";
import { useMutation, useQueryClient } from "@tanstack/react-query";

interface CardExpensesProps {
  id: string;
  title: string;
  description: string;
  data: string;
  fixed?: string;
  value: number;
  onDeleted?: () => void; // ✅ Função para atualizar lista após delete
}

export function CardExpenses({
  id,
  title,
  description,
  data,
  fixed,
  value,
  onDeleted,
}: CardExpensesProps) {
  const queryClient = useQueryClient();

  const valorFormatado = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);

  const deleteMutation = useMutation({
    mutationFn: () => DeleteExpenses({ id }),
    onSuccess: () => {
      toast.success("Despesa deletada com sucesso!");
      queryClient.invalidateQueries({ queryKey: ["expenses"] });
      onDeleted?.();
    },
    onError: () => {
      toast.error("Erro ao deletar despesa");
    },
  });

  return (
    <div>
      <Card className="bg-white p-2 transition duration-[0.5s] hover:bg-gray-100">
        <header className="flex flex-col justify-between gap-2 lg:flex-row">
          <div className="flex flex-col gap-2 md:flex-row md:items-center lg:gap-5">
            <h1 className="w-fit text-[18px] font-medium">{title}</h1>
            <div
              className={`flex w-fit items-center rounded-2xl px-2 ${
                fixed === "Fixa" ? "w-11 bg-red-500" : "w-[70px] bg-gray-200"
              }`}
            >
              <span
                className={`${fixed === "Fixa" ? "text-white" : "text-black"}`}
              >
                {fixed}
              </span>
            </div>
          </div>

          <span className="text-2xl font-bold text-red-600">
            {valorFormatado}
          </span>
        </header>
        <div className="mr-4 flex justify-between">
          <div className="text-gray-500">
            <p>{description}</p>
            <p>{data}</p>
          </div>

          <div className="flex gap-1">
            <UpdateExpensesForm
              title="Edite sua despesa"
              description="Insira os dados novos"
              icon={SquarePen}
              onSuccess={() =>
                queryClient.invalidateQueries({ queryKey: ["expenses"] })
              }
            />

            <button
              className="flex h-9 w-9 items-center justify-center rounded-sm border bg-white transition duration-[0.5s] hover:bg-gray-300"
              onClick={() => deleteMutation.mutate()}
              disabled={deleteMutation.isPending} // ✅ Status correto do TanStack
            >
              <Trash2 />
            </button>
          </div>
        </div>
      </Card>
    </div>
  );
}
