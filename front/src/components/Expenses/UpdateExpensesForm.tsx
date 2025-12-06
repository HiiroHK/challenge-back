//Formulário de Gastos atualizado com TanStack Query v5
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
import { useEffect } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { UpdateExpenses } from "@/http/expenses/updateExpenses"; // Função que faz a API de update

interface Expensesprops {
  title?: string;
  description?: string;
  trigger?: string;
  icon?: React.ComponentType<IconBaseProps>;
  initialData?: {
    id: string;
    name?: string;
    type?: "Fixa" | "Variável";
    description?: string;
    value?: number;
  };
  onSuccess?: () => void;
}

const formSchema = z.object({
  expenses: z.enum(["Fixa", "Variável"], {
    message: "O campo tipo despesa é obrigatório",
  }),
  description: z.string({
    message: "O campo descrição da despesa é obrigatório",
  }),
  name: z.string({
    message: "O campo nome da despesa é obrigatório",
  }),
  value: z.coerce.number({ message: "O campo valor é obrigatório" }),
});

type formSchema = z.infer<typeof formSchema>;

export function UpdateExpensesForm({
  title,
  description,
  trigger,
  icon: Icon,
  initialData,
  onSuccess,
}: Expensesprops) {
  const queryClient = useQueryClient();

  const {
    handleSubmit,
    control,
    register,
    formState: { errors },
    reset,
  } = useForm<formSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      expenses:
        initialData?.type === "Fixa"
          ? "Fixa"
          : initialData?.type === "Variável"
            ? "Variável"
            : undefined,
      name: initialData?.name,
      description: initialData?.description,
      value: initialData?.value ?? undefined,
    },
  });

  useEffect(() => {
    if (initialData) {
      reset({
        expenses:
          initialData.type === "Fixa"
            ? "Fixa"
            : initialData.type === "Variável"
              ? "Variável"
              : undefined,
        name: initialData.name ?? "",
        description: initialData.description ?? "",
        value: initialData.value ?? undefined,
      });
    }
  }, [initialData, reset]);

  const mutation = useMutation({
    mutationFn: (data: formSchema) =>
      UpdateExpenses({
        id: initialData!.id,
        name: data.name,
        description: data.description,
        type: data.expenses,
        value: data.value,
        date: new Date(),
      }),
    onSuccess: () => {
      toast.success("Despesa atualizada com sucesso!");
      queryClient.invalidateQueries({ queryKey: ["expenses"] });
      onSuccess?.();
      reset();
    },
    onError: () => {
      toast.error("Erro ao atualizar despesa");
    },
  });

  const onSubmit = (data: formSchema) => {
    if (!initialData?.id) {
      toast.error("Despesa não localizada");
      return;
    }
    mutation.mutate(data);
  };

  const isSubmitting = mutation.status === "pending";

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
          <form onSubmit={handleSubmit(onSubmit)}>
            <span>Tipo de despesa</span>
            <Controller
              name="expenses"
              control={control}
              render={({ field }) => (
                <Select onValueChange={field.onChange} value={field.value}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Selecione um item para cadastrar despesa" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Fixa">Despesa Fixa</SelectItem>
                    <SelectItem value="Variável">Despesa Variável</SelectItem>
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
              <span className="text-left">Nome da despesa:</span>
              <Input
                placeholder="Digite o nome da despesa"
                {...register("name")}
              />
              {errors?.name && (
                <span className="text-left text-sm text-red-500">
                  {errors.name.message}
                </span>
              )}
            </div>

            <div>
              <span className="text-left">Descrição da despesa:</span>
              <Input
                placeholder="Digite a descrição"
                {...register("description")}
              />
              {errors?.description && (
                <span className="text-left text-sm text-red-500">
                  {errors.description.message}
                </span>
              )}
            </div>

            <div>
              <span className="text-left">Valor:</span>
              <Input
                placeholder="Digite o valor"
                type="number"
                {...register("value")}
              />
              {errors?.value && (
                <span className="text-left text-sm text-red-500">
                  {errors.value.message}
                </span>
              )}
            </div>

            <Button
              className="mt-4 bg-purple-500 hover:bg-purple-600"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Atualizando..." : "Atualizar Despesa"}
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
