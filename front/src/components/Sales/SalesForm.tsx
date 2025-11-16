//Formulário de vendas
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

interface Salesprops {
  title?: string;
  description?: string;
  trigger?: string;
  icon?: React.ComponentType<IconBaseProps>;
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

export function SalesForm({
  title,
  description,
  trigger,
  icon: Icon,
}: Salesprops) {
  const {
    handleSubmit,
    control,
    register,
    formState: { errors },
    reset,
  } = useForm<formSchema>({
    resolver: zodResolver(formSchema),
  });

  async function confirmSale(data: formSchema) {
    try {
      console.log(data);

      toast.success("Venda cadastrada com sucesso!");

      reset();
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
        toast.error("Erro ao cadastrar venda");
      }
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
          <form onSubmit={handleSubmit(confirmSale)}>
            <label>Modalidade do curso</label>

            <Controller
              name="typeCourse"
              control={control}
              render={({ field }) => (
                <Select onValueChange={field.onChange}>
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
              <label htmlFor="">E-mail</label>
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
              <label htmlFor="">Telefone</label>
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
                <label htmlFor="">Valor Bruto</label>
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
                <label htmlFor="">Desconto (%)</label>
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
                <label htmlFor="">Comissão (%)</label>
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
                <label htmlFor="">Imposto</label>
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
                <label htmlFor="">Taxa do cartão</label>
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

                <Button className="mt-4 cursor-pointer justify-between bg-purple-500 p-4 hover:bg-purple-600">
                  Salvar
                </Button>
              </div>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
