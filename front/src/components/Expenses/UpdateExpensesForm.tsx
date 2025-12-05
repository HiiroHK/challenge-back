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
import { useEffect, useState } from "react";

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
    message: "O campo descrição da despesa é obrigatório",
  }),

  name: z.string({
    message: "O campo nome da despesa é obrigatório",
  }),

  value: z.coerce.number({ message: "O campo valor é obrigatório" }),
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

  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (initialData) {
      reset({
        expenses:
          initialData.type === "Fixa"
            ? "Fixa"
            : initialData.type === "Variável"
              ? "Variável"
              : undefined,
        description: initialData.description ?? "",
        value: initialData.value ?? undefined,
      });
    }
  }, [initialData, reset]);

  async function updateExpense(data: formSchema) {
    if (!initialData?.id) {
      toast.error("Despesa não localizada");
    }
    try {
      setIsSubmitting(true);

      const payload = {
        id: initialData?.id,
        name: initialData?.name ?? undefined,
        description: data.description,
        type: data.expenses,
        value: data.value,
        date: new Date(),
      };

      await UpdateExpensesForm(payload);

      toast.success("Despesa Atualizada com sucesso!");
      onSuccess?.();

      reset();
    } catch (error) {
      console.log(error);
      toast.error("Erro ao atualizar despesa");
    } finally {
      setIsSubmitting(false);
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
          <form onSubmit={handleSubmit(updateExpense)}>
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
                placeholder="Digite o nome da despesa que deseja cadastrar"
                type="text"
                {...register("name")}
                required
              />
              {errors?.name && (
                <span className="mb-4 text-left text-sm text-red-500">
                  {errors.name.message}
                </span>
              )}
            </div>

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

            <Button
              className="mt-4 cursor-pointer justify-between bg-purple-500 p-4 hover:bg-purple-600"
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
