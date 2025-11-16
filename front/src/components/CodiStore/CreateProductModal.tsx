import {
  DialogContent,
  DialogTrigger,
  Dialog,
  DialogTitle,
  DialogDescription,
} from "../../components/ui/dialog";

import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { toast } from "sonner";

const formSchema = z.object({
  description: z.string({
    message: "O campo descrição é obrigatório",
  }),
  price: z.coerce.number({
    message: "O campo preco é obrigatório",
  }),
});

type formSchema = z.infer<typeof formSchema>;

export function CreateProduct() {
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm<formSchema>({
    resolver: zodResolver(formSchema),
  });

  async function handleCreateProduct(data: formSchema) {
    try {
      console.log(data);

      toast.success("Produto cadastrado com sucesso!");

      reset();
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
        toast.error("Erro ao cadastrar produto");
      }
    }
  }

  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button className="flex h-12 w-full cursor-pointer gap-2 rounded-lg bg-[#A243D2] px-5 py-3 text-white transition duration-[1s] hover:bg-purple-700 lg:w-40">
            + Novo produto
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogTitle>Cadastrar produto</DialogTitle>
          <DialogDescription className="mb-6">
            Adicione um novo produto ao seu catálogo
          </DialogDescription>
          <form onSubmit={handleSubmit(handleCreateProduct)}>
            <label htmlFor="">Descrição do Produto:</label>
            <Input
              className="mt-2 mb-8 h-16 p-1"
              type="text'"
              placeholder="Ex: Coca-cola 350ml"
              {...register("description")}
              required
            />
            {errors?.description && (
              <span className="text-left text-sm text-red-500">
                {errors.description.message}
              </span>
            )}
            <label htmlFor="">Preço(R$):</label>
            <Input
              className="my-2 p-1"
              type="number"
              placeholder="0,00"
              {...register("price")}
              required
            />
            {errors?.price && (
              <span className="text-left text-sm text-red-500">
                {errors.price.message}
              </span>
            )}
            <div className="mt-8 mb-2 flex gap-4">
              <Button className="cursor-pointer bg-purple-500 hover:bg-purple-600">
                Cadastrar produto
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
