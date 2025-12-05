import React, { useEffect, useState } from "react";
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
import { Button } from "../ui/button";
import { z } from "zod";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import type { IconBaseProps } from "react-icons";
import { Updatesales } from "@/http/sales/updateSales";

interface Salesprops {
  title?: string;
  description?: string;
  trigger?: string;
  icon?: React.ComponentType<IconBaseProps>;
  initialData?: {
    id: string;
    name?: string;
    type?: "Online" | "Presencial";
    email?: string;
    phone?: string;
    grossValue?: number;
    discount?: number;
    commission?: number;
    tax?: number;
    cardTax?: number;
    valorliquido?: number;
  };
  onSuccess?: () => void;
}

const formSchema = z.object({
  typeCourse: z.enum(["online", "presencial"], {
    message: "O campo modalidade de curso é obrigatório",
  }),

  name: z
    .string({ message: "O campo nome é obrigatório" })
    .min(5, { message: "O nome deve conter no mínimo 5 caracteres" }),

  email: z
    .string({ message: "O campo email é obrigatório" })
    .email({ message: "Digite um email válido" }),

  phone: z
    .string({ message: "O campo telefone é obrigatório" })
    .min(11, { message: "O número deve conter no mínimo 11 dígitos" }),

  grossValue: z.coerce.number({ message: "O campo valor bruto é obrigatório" }),

  discount: z.coerce.number({ message: "O campo desconto é obrigatório" }),

  commission: z.coerce.number({ message: "O campo comissão é obrigatório" }),

  tax: z.coerce.number({ message: "O campo imposto é obrigatório" }),

  cardTax: z.coerce.number({ message: "O campo taxa cartão é obrigatório" }),
});

type formSchema = z.infer<typeof formSchema>;

export function UpdateSalesForm({
  title,
  description,
  trigger,
  icon: Icon,
  initialData,
  onSuccess,
}: Salesprops) {
  const {
    handleSubmit,
    control,
    register,
    formState: { errors },
    reset,
  } = useForm<formSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      typeCourse:
        initialData?.type === "Online"
          ? "online"
          : initialData?.type === "Presencial"
            ? "presencial"
            : undefined,
      name: initialData?.name,
      email: initialData?.email,
      phone: initialData?.phone,
      grossValue: initialData?.grossValue,
      discount: initialData?.discount,
      commission: initialData?.commission,
      tax: initialData?.tax,
      cardTax: initialData?.cardTax,
      valorliquido: initialData?.valorliquido,
    },
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (initialData) {
      reset({
        typeCourse:
          initialData?.type === "Online"
            ? "online"
            : initialData?.type === "Presencial"
              ? "presencial"
              : undefined,
        name: initialData?.name ?? "",
        email: initialData?.email ?? "",
        phone: initialData?.phone ?? undefined,
        grossValue: initialData?.grossValue ?? undefined,
        discount: initialData?.discount ?? undefined,
        commission: initialData?.commission ?? undefined,
        tax: initialData?.tax ?? undefined,
        cardTax: initialData?.cardTax ?? undefined,
        valorliquido: initialData?.valorliquido ?? undefined,
      });
    }
  }, [initialData, reset]);

  async function updateSales(data: formSchema) {
    if (!initialData?.id) {
      toast.error("Venda não localizada");
      return;
    }
    try {
      setIsSubmitting(true);

      const payload = {
        id: initialData.id,
        type: data.typeCourse === "online" ? "Online" : "Presencial",
        name: data.name,
        email: data.email,
        telefone: data.phone,
        valorbruto: data.grossValue,
        desconto: data.discount,
        comissao: data.commission,
        impostos: data.tax,
        taxacartao: data.cardTax,
        valorliquido: data.valorliquido ?? undefined,
        date: new Date(),
      };

      await Updatesales(payload);

      toast.success("Venda atualizada com sucesso!");
      onSuccess?.();

      reset();
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
        toast.error("Erro ao atualizar venda");
      } else {
        console.error(error);
        toast.error("Erro ao atualizar venda");
      }
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
              trigger === "Nova venda"
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

        <DialogContent className="p-3">
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
          <form onSubmit={handleSubmit(updateSales)}>
            <label>Modalidade do curso</label>

            <Controller
              name="typeCourse"
              control={control}
              render={({ field }) => (
                <Select onValueChange={field.onChange} value={field.value}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Selecione uma modalidade" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="online">Online</SelectItem>
                    <SelectItem value="presencial">Presencial</SelectItem>
                  </SelectContent>
                </Select>
              )}
            />
            {errors?.typeCourse && (
              <span className="text-left text-sm text-red-500">
                {errors.typeCourse.message}
              </span>
            )}

            <div>
              <label className="text-left">Nome do aluno</label>
              <Input
                placeholder="Nome do aluno"
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
              <label>E-mail</label>
              <Input
                placeholder="E-mail"
                type="email"
                {...register("email")}
                required
              />
              {errors?.email && (
                <span className="text-left text-sm text-red-500">
                  {errors.email.message}
                </span>
              )}
            </div>

            <div>
              <label>Telefone</label>
              <Input
                placeholder="Telefone"
                type="tel"
                {...register("phone")}
                required
              />
              {errors?.phone && (
                <span className="text-left text-sm text-red-500">
                  {errors.phone.message}
                </span>
              )}
            </div>

            <h1 className="m-4 font-medium">Dados da venda:</h1>
            <div className="grid grid-cols-2 gap-2">
              <div>
                <label>Valor Bruto</label>
                <Input
                  placeholder="Valor Bruto"
                  type="number"
                  {...register("grossValue")}
                  required
                />
                {errors?.grossValue && (
                  <span className="text-left text-sm text-red-500">
                    {errors.grossValue.message}
                  </span>
                )}
              </div>

              <div>
                <label>Desconto (%)</label>
                <Input
                  placeholder="Desconto"
                  type="number"
                  {...register("discount")}
                  required
                />
                {errors.discount && (
                  <span className="text-left text-sm text-red-500">
                    {errors.discount.message}
                  </span>
                )}
              </div>

              <div>
                <label>Comissão (%)</label>
                <Input
                  placeholder="Comissão"
                  type="number"
                  {...register("commission")}
                  required
                />
                {errors.commission && (
                  <span className="text-left text-sm text-red-500">
                    {errors.commission.message}
                  </span>
                )}
              </div>

              <div>
                <label>Imposto</label>
                <Input
                  placeholder="Imposto"
                  type="number"
                  {...register("tax")}
                  required
                />
                {errors?.tax && (
                  <span className="text-left text-sm text-red-500">
                    {errors.tax.message}
                  </span>
                )}
              </div>

              <div>
                <label>Taxa do cartão</label>
                <Input
                  placeholder="Taxa do cartão"
                  type="number"
                  {...register("cardTax")}
                  required
                />
                {errors?.cardTax && (
                  <span className="text-left text-sm text-red-500">
                    {errors.cardTax.message}
                  </span>
                )}
              </div>
            </div>

            <Button
              className="mt-4 cursor-pointer justify-between bg-purple-500 p-4 hover:bg-purple-600"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Salvando..." : "Salvar"}
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
