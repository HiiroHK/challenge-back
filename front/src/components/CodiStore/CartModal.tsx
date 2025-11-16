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

const formSchema = z.object({
  product: z.enum(["product1", "product2", "product3"], {
    message: "O campo produto é obrigatório",
  }),

  quantity: z.coerce.number({
    message: "O campo quantidade é obrigatório",
  }),

  professor: z.string({
    message: "O campo professor é obrigatório",
  }),

  rotation: z.enum(["morning", "afternoon", "night"], {
    message: "O campo turno é obrigatório",
  }),
});

type formSchema = z.infer<typeof formSchema>;

export function Cart() {
  const {
    handleSubmit,
    control,
    register,
    formState: { errors },
    reset,
  } = useForm<formSchema>({
    resolver: zodResolver(formSchema),
  });
  async function addCart(data: formSchema) {
    try {
      console.log(data);

      toast.success("Venda registrada com sucesso!");

      reset();
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
        toast.error("Erro ao registrar venda");
      }
    }
  }

  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button className="flex h-12 w-full cursor-pointer gap-2 rounded-lg bg-[#A243D2] px-5 py-3 text-white transition duration-[1s] hover:bg-purple-700 lg:w-40">
            + Nova venda
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogTitle>Registrar venda</DialogTitle>
          <DialogDescription>
            Adicione produtos ao carrinho e registre uma nova venda
          </DialogDescription>

          <form onSubmit={handleSubmit(addCart)} className="w-full">
            <h1 className="mb-6">Adicionar produto</h1>
            <div className="flex justify-between">
              <div>
                <Controller
                  name="product"
                  control={control}
                  render={({ field }) => (
                    <Select onValueChange={field.onChange}>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione um produto" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="product1">Produto 1</SelectItem>
                        <SelectItem value="product2">Produto 2</SelectItem>
                        <SelectItem value="product3">Produto 3</SelectItem>
                      </SelectContent>
                    </Select>
                  )}
                />
              </div>

              <div>
                <Input
                  type="number"
                  placeholder="Quantidade"
                  min={0}
                  {...register("quantity")}
                  required
                />
                {errors?.quantity && (
                  <span className="text-left text-sm text-red-500">
                    {errors.quantity.message}
                  </span>
                )}
              </div>
            </div>
            <Button
              type="button"
              className="mt-4 mb-4 w-full cursor-pointer bg-purple-500 hover:bg-purple-600"
            >
              + Adicionar
            </Button>

            <div className="mb-4 flex justify-between">
              <div>
                <Controller
                  name="rotation"
                  control={control}
                  render={({ field }) => (
                    <Select onValueChange={field.onChange}>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione o turno" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="morning">Manhã</SelectItem>
                        <SelectItem value="afternoon">Tarde</SelectItem>
                        <SelectItem value="night">Noite</SelectItem>
                      </SelectContent>
                    </Select>
                  )}
                />
                {errors?.rotation && (
                  <span className="text-left text-sm text-red-500">
                    {errors.rotation.message}
                  </span>
                )}
              </div>

              <div>
                <Input
                  type="text"
                  placeholder="Professor responsável"
                  {...register("professor")}
                  required
                />
                {errors?.professor && (
                  <span className="text-left text-sm text-red-500">
                    {errors.professor.message}
                  </span>
                )}
              </div>
            </div>

            <Button className="w-full cursor-pointer bg-purple-500 hover:bg-purple-600">
              Registrar venda (0 itens)
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
