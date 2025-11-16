//Formulário de Gastos
import {
  DialogContent,
  DialogTrigger,
  Dialog,
  DialogTitle,
  DialogDescription,
} from "../ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

import { Input } from "../ui/input";
import { Button } from "@/components/ui/button";

import { z } from "zod";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { toast } from "sonner";
import type { IconBaseProps } from "react-icons";

interface Expensesprops {
  title?: string;
  description?: string;
  trigger?: string;
  icon?: React.ComponentType<IconBaseProps>;
}

const formSchema = z.object({
  expenses: z.enum(["fixedExpense", "variableExpense"], {
    message: "O campo tipo despesa é obrigatório",
  }),

  description: z.string({
    message: "O campo descrição da despesa é obrigatório",
  }),

  value: z.coerce.number({ message: "O campo valor é obrigatório" }),
});

type formSchema = z.infer<typeof formSchema>;

export function ExpensesForm({
  title,
  description,
  trigger,
  icon: Icon,
}: Expensesprops) {
  const {
    handleSubmit,
    control,
    register,
    formState: { errors },
    reset,
  } = useForm<formSchema>({
    resolver: zodResolver(formSchema),
  });

  async function confirmExpense(data: formSchema) {
    try {
      console.log(data);

      toast.success("Despesa cadastrada com sucesso!");

      reset();
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
        toast.error("Erro ao cadastrar despesa");
      }
    }
  }

  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <button
            className={`${
              trigger === "Novo gasto"
                ? "bg-[#A243D2] px-5 py-3 text-white transition duration-[1s] hover:bg-purple-700"
                : "flex h-9 w-9 items-center justify-center rounded-sm border bg-white transition duration-[0.5s] hover:bg-gray-300"
            } flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg`}
          >
            <div className="flex items-center justify-center">
              {Icon && <Icon />}
            </div>

            {trigger}
          </button>
        </DialogTrigger>

        <DialogContent>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
          <form onSubmit={handleSubmit(confirmExpense)}>
            <span>Tipo de despesa</span>
            <Controller
              name="expenses"
              control={control}
              render={({ field }) => (
                <Select onValueChange={field.onChange}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Selecione um item para cadastrar despesa" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="fixedExpense">Despesa Fixa</SelectItem>
                    <SelectItem value="variableExpense">
                      Despesa variável
                    </SelectItem>
                  </SelectContent>
                </Select>
              )}
            />
            {errors?.expenses && (
              <span className="text-left text-sm text-red-500">
                {errors.expenses.message}
              </span>
            )}

            <div>
              <span className="text-left">Descrição da despesa:</span>
              <Input
                placeholder="Digite a descrição despesa que deseja cadastrar"
                type="text"
                {...register("description")}
                required
              />
              {errors?.description && (
                <span className="mb-4 text-left text-sm text-red-500">
                  {errors.description.message}
                </span>
              )}
            </div>

            <div>
              <span className="text-left">Valor:</span>
              <Input
                placeholder="Digite o valor da despesa"
                type="number"
                {...register("value")}
                required
              />
              {errors?.value && (
                <span className="mb-4 text-left text-sm text-red-500">
                  {errors.value.message}
                </span>
              )}
            </div>

            <Button className="mt-4 cursor-pointer justify-between bg-purple-500 p-4 hover:bg-purple-600">
              Salvar
            </Button>
          </form>
        </DialogContent>
      </Dialog>
         
    </div>
  );
}
