import { Button } from "@/components/Dashboard/Button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Controller } from "react-hook-form";
import type { IconBaseProps } from "react-icons";
import { toast } from "sonner";
import { z } from "zod";

{
  /*Mensagens de erro*/
}
const formSchema = z.object({
  title: z.string({
    message: "O campo nome do curso é obrigatório",
  }),

  description: z.string().optional(),

  cursos: z.enum(["Ativo", "Inativo", "Breve"], {
    message: "O Campo status do curso é obrigatório",
  }),

  value: z.coerce.number({ message: "O campo valor é obrigatório" }),
});

type formSchema = z.infer<typeof formSchema>;

interface CoursesFormProps {
  title: string;
  description: string;
  trigger?: string;
  Icon?: React.ComponentType<IconBaseProps>;
  button?: string;
}

export function CoursesForm({
  title,
  description,
  trigger,
  Icon: Icon,
  button,
}: CoursesFormProps) {
  const {
    handleSubmit,
    control,
    register,
    formState: { errors },
    reset,
  } = useForm<formSchema>({ resolver: zodResolver(formSchema) });

  async function confirmCourses(data: formSchema) {
    try {
      console.log(data);

      toast.success("Curso criado com sucesso");

      reset();
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
        toast.error("Erro ao cadastrar curso");
      }
    }
  }

  return (
    <div>
      <Dialog>
        {/*Botão para abrir o modal*/}
        <DialogTrigger asChild>
          <button className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-[#A243D2] px-5 py-3 text-white transition duration-[1s] hover:bg-purple-700">
            {Icon && <Icon />}

            {trigger}
          </button>
        </DialogTrigger>

        {/*Titulo e descrição do modal*/}
        <DialogContent>
          <DialogHeader>
            <DialogTitle> {title} </DialogTitle>
            <DialogDescription> {description} </DialogDescription>
          </DialogHeader>

          <div className="grid gap-3">
            <form
              onSubmit={handleSubmit(confirmCourses)}
              className="grid gap-3"
            >
              {/*Área para adicionaar imagem*/}
              <div>
                <label htmlFor="">Insira uma imagem</label>
                <div className="rounded-md border p-2">
                  <input type="file" className="w-full" />
                </div>
              </div>

              <div>
                {/*Select do status do curso*/}
                <label htmlFor="">Selecione o status do curso</label>
                <Controller
                  name="cursos"
                  control={control}
                  render={({ field }) => (
                    <Select onValueChange={field.onChange}>
                      <SelectTrigger className="rounded-md border-black">
                        <SelectValue placeholder="Status do curso" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Ativo">Ativo</SelectItem>
                        <SelectItem value="Inativo">Inativo</SelectItem>
                        <SelectItem value="Breve">Em breve</SelectItem>
                      </SelectContent>
                    </Select>
                  )}
                />
                {errors?.cursos && (
                  <p className="text-left text-sm text-red-500">
                    {errors.cursos.message}
                  </p>
                )}
              </div>

              {/*Inputs de nome e descrição do curso*/}
              <div className="grid gap-3">
                <div className="">
                  <label htmlFor="">Nome do curso</label>
                  <Input
                    type="text"
                    placeholder="Nome do curso"
                    className="rounded-md border border-black p-3"
                    required
                    {...register("title")}
                  />
                  {errors?.title && (
                    <p className="text-left text-sm text-red-500">
                      {errors.title.message}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="">Descrição do curso</label>
                  <Input
                    type="text"
                    placeholder="Descrição"
                    className="rounded-md border border-black p-3"
                    required
                    {...register("description")}
                  />
                  {errors?.description && (
                    <p className="text-left text-sm text-red-500">
                      {errors.description.message}
                    </p>
                  )}
                </div>
              </div>

              {/*Input de valor*/}
              <div>
                <label htmlFor="">Insira o valor do curso</label>
                <Input
                  type="number"
                  min={0}
                  placeholder="Insira o valor do curso"
                  className="rounded-md border border-black p-3"
                  {...register("value", { valueAsNumber: true })}
                />
                {errors?.value && (
                  <p className="text-left text-sm text-red-500">
                    {errors.value.message}
                  </p>
                )}
              </div>

              {/*Botão de salvar*/}
              <Button
                type="submit"
                className="mt-4 flex cursor-pointer justify-between bg-purple-500 hover:bg-purple-600"
              >
                {button}
              </Button>
            </form>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
